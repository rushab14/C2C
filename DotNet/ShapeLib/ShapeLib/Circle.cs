using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShapeLib
{
    public class Circle:Paint,IShape
    {
        public int radius { get; set; }

        public Circle(int radius)
        {
            this.radius = radius;
        }

        public string GetDetails()
        {
            return $"Radius of the circle is {this.radius}";
        }

        public override double CalculateArea()
        {
            return Math.PI * radius*radius;
        }

        
    }
}
