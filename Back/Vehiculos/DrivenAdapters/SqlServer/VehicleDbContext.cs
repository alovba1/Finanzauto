using Microsoft.EntityFrameworkCore;
using Vehiculos.Domain.Model;

namespace Vehiculos.DrivenAdapters.SqlServer
{
    public class VehicleDbContext : DbContext
    {
        public VehicleDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Vehicle> Vehicle { get; set; }
    }
}
