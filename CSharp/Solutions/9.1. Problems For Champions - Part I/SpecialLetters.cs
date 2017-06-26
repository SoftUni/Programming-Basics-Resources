namespace FiveSpecialLetters
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class FiveSpecialLetters
    {
        public static void Main(string[] args)
        {
            string pattern = "abcde";
            bool printed = false;

            int rangeStart = int.Parse(Console.ReadLine());
            int rangeEnd = int.Parse(Console.ReadLine());

            for (int i = 0; i < 5; i++)
            {
                for (int k = 0; k < 5; k++)
                {
                    for (int j = 0; j < 5; j++)
                    {
                        for (int p = 0; p < 5; p++)
                        {
                            for (int t = 0; t < 5; t++)
                            {
                                string current = "" +
                                    pattern[i] +
                                    pattern[k] +
                                    pattern[j] +
                                    pattern[p] +
                                    pattern[t];

                                string unique = "" + current[0];

                                for (int l = 1; l < current.Length; l++)
                                {
                                    if (unique.IndexOf(current[l]) == -1)
                                    {
                                        unique += current[l];
                                    }
                                }

                                int sum = 0;
                                for (int l = 0; l < unique.Length; l++)
                                {
                                    int add = 0;

                                    switch (unique[l])
                                    {
                                        case 'a': add = 5; break;
                                        case 'b': add = -12; break;
                                        case 'c': add = 47; break;
                                        case 'd': add = 7; break;
                                        case 'e': add = -32; break;
                                    }

                                    sum += (l + 1) * add;
                                }

                                if (sum >= rangeStart && sum <= rangeEnd)
                                {
                                    Console.Write(current + " ");
                                    printed = true;
                                }
                            }
                        }
                    }
                }
            }

            if (!printed)
            {
                Console.WriteLine("No");
            }
        }
    }
}
