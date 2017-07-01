namespace MatchTickets
{
    using System;

    public static class MatchTickets
    {
        public static void Main()
        {
            // Read input data
            decimal budget = decimal.Parse(Console.ReadLine());
            string ticketType = Console.ReadLine();
            int people = int.Parse(Console.ReadLine());

            // Initialization of the required parameters
            decimal transportCharges = 0.00M;
            decimal moneyForTickets = 0.00M;
            decimal moneyDifference = 0.00M;

            // Calculate transport charges
            if (people <= 4)
            {
                transportCharges = 0.75M * budget;
            }
            else if (people <= 9)
            {
                transportCharges = 0.60M * budget;
            }
            else if (people <= 24)
            {
                transportCharges = 0.50M * budget;
            }
            else if (people <= 49)
            {
                transportCharges = 0.40M * budget;
            }
            else if (people >= 50)
            {
                transportCharges = 0.25M * budget;
            }

            // Calculate money for tickets.
            switch (ticketType)
            {
                case "Normal":
                    moneyForTickets = people * 249.99M;
                    break;
                case "VIP":
                    moneyForTickets = people * 499.99M;
                    break;
                default:
                    moneyForTickets = people * 249.99M;
                    break;
            }

            // Calculate amount of money left and result to display.
            moneyDifference = budget - transportCharges - moneyForTickets;
            string result = string.Format(
                "Yes! You have {0:F2} leva left.",
                decimal.Round(moneyDifference, 2));

            if (moneyDifference < 0)
            {
                result = string.Format(
                    "Not enough money! You need {0:F2} leva.",
                    Math.Abs(decimal.Round(moneyDifference, 2)));
            }

            // Display the result
            Console.WriteLine(result);
        }
    }
}
