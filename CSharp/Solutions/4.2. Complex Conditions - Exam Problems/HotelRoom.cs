namespace HotelRoom
{
    using System;

    public static class HotelRoom
    {
        public static void Main()
        {
            // Read input data
            string month = Console.ReadLine();
            int nights = int.Parse(Console.ReadLine());

            // Initialization of the required parameters
            decimal studioPrice = 50.00M;
            decimal apartmentPrice = 65.00M;
            decimal studioRent = 0.00M;
            decimal apartmentRent = 0.00M;

            // Calculate studio and apartment rent prices.
            switch (month)
            {
                case "May":
                case "October":
                    studioPrice = 50.00M;
                    apartmentPrice = 65.00M;

                    studioRent = studioPrice * nights;
                    apartmentRent = apartmentPrice * nights;

                    if (nights > 14)
                    {
                        studioRent *= 0.70M;
                        apartmentRent *= 0.90M;
                    }
                    else if (nights > 7)
                    {
                        studioRent *= 0.95M;
                    }

                    break;
                case "June":
                case "September":
                    studioPrice = 75.20M;
                    apartmentPrice = 68.70M;

                    studioRent = studioPrice * nights;
                    apartmentRent = apartmentPrice * nights;

                    if (nights > 14)
                    {
                        studioRent *= 0.80M;
                        apartmentRent *= 0.90M;
                    }

                    break;
                case "July":
                case "August":
                    studioPrice = 76.00M;
                    apartmentPrice = 77.00M;

                    studioRent = studioPrice * nights;
                    apartmentRent = apartmentPrice * nights;

                    if (nights > 14)
                    {
                        apartmentRent *= 0.90M;
                    }

                    break;
                default:
                    break;
            }

            string studioInfo = string.Format("Studio: {0:F2} lv.", decimal.Round(studioRent, 2));
            string apartmentInfo = string.Format("Apartment: {0:F2} lv.", decimal.Round(apartmentRent, 2));

            // Display the result
            Console.WriteLine(apartmentInfo);
            Console.WriteLine(studioInfo);
        }
    }
}
