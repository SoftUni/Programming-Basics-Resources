#include <iomanip>
#include <iostream>

int main() {
    double a;
    std::cin >> a;
    std::cout << std::fixed << std::setprecision(2) << a * 1.79549 << std::endl;
}
