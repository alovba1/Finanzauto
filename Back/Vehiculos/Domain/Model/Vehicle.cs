namespace Vehiculos.Domain.Model
{
    public class Vehicle
    {
      
        private string brand = null;
        private string color = null;
        private string transmission  = null;
        private string pathimg = null; 

        public int Id { get; set; }
        public string Brand { get { return brand; } set { brand = value; } }
        public string Color { get { return color; } set { color = value; } }
        public string Transmission { get { return transmission; } set { transmission = value; } }
        public string Pathimg { get { return pathimg; } set { pathimg = value; } }

    }
}
