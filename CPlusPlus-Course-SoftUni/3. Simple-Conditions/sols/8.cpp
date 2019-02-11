#include <iostream>
#include <iomanip>

int main() {
    double n;
    std::cin >> n;
    std::string from, to;
    std::cin >> from >> to;
    if (from == "mm")
        n /= 1000;
    if (from == "cm")
        n /= 100;
    if (from == "mi")
        n /= 0.000621371192;
    if (from == "in")
        n /= 39.3700787;
    if (from == "km")
        n /= 0.001;
    if (from == "ft")
        n /= 3.2808399;
    if (from == "yd")
        n /= 1.0936133;
    if (to == "mm")
        n *= 1000;
    if (to == "cm")
        n *= 100;
    if (to == "mi")
        n *= 0.000621371192;
    if (to == "in")
        n *= 39.3700787;
    if (to == "km")
        n *= 0.001;
    if (to == "ft")
        n *= 3.2808399;
    if (to == "yd")
        n *= 1.0936133;
    std::cout << std::fixed << std::setprecision(2) << n <<" alabala" << std::endl;
    return 0;
}
