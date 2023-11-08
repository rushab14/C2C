using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace ShapeLib
{
    public class Rectangle:Paint,IShape
    {
        public int length { get; set; }
        public int breadth { get; set; }

        public override double CalculateArea()
        {
            return length * breadth;
        }
        public Rectangle(int length , int breadth)
        {
            this.length = length;
            this.breadth = breadth; 
        }
        public string  GetDetails()
        {
            return $"Length of the rectangle is {this.length}, breadth is {this.breadth}";
        }
    }
}
