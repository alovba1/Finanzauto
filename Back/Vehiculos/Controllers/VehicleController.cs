using Microsoft.AspNetCore.Mvc;
using Vehiculos.DrivenAdapters.SqlServer;
using Vehiculos.Domain.Model;
using Microsoft.EntityFrameworkCore;

namespace Vehiculos.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VehicleController : Controller
    {
        private readonly VehicleDbContext _vehicleDbContext;

        public VehicleController(VehicleDbContext vehicleDbContext)
        {
            _vehicleDbContext = vehicleDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllVehicle()
        {
            var vehicle = await _vehicleDbContext.Vehicle.ToListAsync();
            return Ok(vehicle);
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetVehicle([FromRoute]int id)
        {
            var vehicle =
                await _vehicleDbContext.Vehicle.FirstOrDefaultAsync(x => x.Id == id);

            if (vehicle == null)
            {
                return NotFound();
            }
            return Ok(vehicle);

        }
		
		[HttpPost]
        public async Task<IActionResult> AddVehicle([FromBody] Vehicle vehicleRequest)
        {
            vehicleRequest.Id = 0;

            await _vehicleDbContext.Vehicle.AddAsync(vehicleRequest);
            await _vehicleDbContext.SaveChangesAsync();

            return Ok(vehicleRequest);
        }


        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> UpDateVehicle([FromRoute] int id, Vehicle updatevehicleRequest)
        {
            var vehicle = await _vehicleDbContext.Vehicle.FindAsync(id);
            if (vehicle == null)
            {
                return NotFound();
            }
            vehicle.Brand = updatevehicleRequest.Brand;
            vehicle.Color = updatevehicleRequest.Color;
            vehicle.Transmission = updatevehicleRequest.Transmission;
            vehicle.Pathimg = updatevehicleRequest.Pathimg;

            await _vehicleDbContext.SaveChangesAsync();

            return Ok(vehicle);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> DeleteVehicle([FromRoute] int id)
        {
            var vehicle = await _vehicleDbContext.Vehicle.FindAsync(id);
            if (vehicle == null)
            {
                return NotFound();
            }
            _vehicleDbContext.Vehicle.Remove(vehicle);
            await _vehicleDbContext.SaveChangesAsync();
            return Ok(vehicle);
        }

    }
}
