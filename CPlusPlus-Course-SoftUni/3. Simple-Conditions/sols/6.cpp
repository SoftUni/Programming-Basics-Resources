#include <iostream>

int main() {
    int num;
    std::cin >> num;
    double bon = 0.0;
    if (num <= 100)
        bon += 5;
    else if (num <= 1000)
        bon += 20.0 * num / 100;
    else
        bon += 10.0 * num / 100;
    if (num % 2 == 0)
        bon++;
    if (num % 10 == 5)
        bon += 2;
    std::cout << bon << std::endl << num + bon << std::endl;
    return 0;
}
