#include <iomanip>
#include <iostream>

int main() {
    double a;
    std::cin >> a;
    std::cout << std::fixed << std::setprecision(0) << (a * 180) / 3.14
              << std::endl;
    return 0;
}
