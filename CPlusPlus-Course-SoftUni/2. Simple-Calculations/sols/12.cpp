#include <iostream>
#include <iomanip>

int main() {
    double n;
    std::cin >> n;
    std::string from, to;
    std::cin >> from >> to;
    if (from == "USD")
        n *= 1.79549;
    if (from == "EUR")
        n *= 1.95583;
    if (from == "GBP")
        n *= 2.53405;
    if (to == "USD")
        n /= 1.79549;
    if (to == "EUR")
        n /= 1.95583;
    if (to == "GBP")
        n /= 2.53405;
    std::cout << std::fixed << std::setprecision(2) << n << std::endl;
    return 0;
}
