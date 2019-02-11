#include <iostream>

int main() {
    int num;
    std::cin >> num;

    std::string arr[] = {"",       "one",    "two",    "three",    "four",
                         "five",   "six",    "seven",  "eight",    "nine",
                         "ten",    "eleven", "twelve", "thirteen", "twenty",
                         "thirty", "forty", "fifty",  "sixty",    "seventy",
                         "eighty", "ninety"};
    if (num < 0)
        std::cout << "invalid number";
    else if (num == 0)
        std::cout << "zero";
    else if (num <= 13)
        std::cout << arr[num];
    else if (num == 15)
        std::cout << "fifteen";
    else if (num < 20)
        std::cout << arr[num % 10] << "teen";
    else if (num < 100) {
        std::string what = arr[num % 10];
        num /= 10;
        std::cout << arr[num + 12] << ((what != "") ? " " : "") << what;
    } else if (num == 100)
        std::cout << "one hundred";
    else
        std::cout << "invalid number";
    return 0;
}
