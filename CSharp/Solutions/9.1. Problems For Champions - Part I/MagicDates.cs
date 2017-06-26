namespace MagicDates
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    
    public class MagicDates
    {
        public static void Main(string[] args)
        {
            int startYear = int.Parse(Console.ReadLine());
            int endYear = int.Parse(Console.ReadLine());
            int magicWeight = int.Parse(Console.ReadLine());

            DateTime currentDate = new DateTime(startYear, 1, 1);

            bool printed = false;

            while (currentDate.Year <= endYear)
            {
                int dateWeight = 0;
                string dateString = currentDate.ToString("ddMMyyyy");

                for (int i = 0; i < dateString.Length - 1; i++)
                {
                    for (int j = i + 1; j < dateString.Length; j++)
                    {
                        dateWeight += (dateString[i] - '0') * (dateString[j] - '0');
                    }
                }

                if (dateWeight == magicWeight)
                {
                    Console.WriteLine(currentDate.ToString("dd-MM-yyyy"));
                    printed = true;
                }

                currentDate = currentDate.AddDays(1);
            }

            if (!printed)
            {
                Console.WriteLine("No");
            }
        }
    }
}
