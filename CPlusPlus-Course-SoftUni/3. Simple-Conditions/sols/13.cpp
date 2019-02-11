#include <iomanip>
#include <iostream>
#include <string>

int main() {
    std::string type;
    std::cin >> type;
    if (type == "square") {
        double a;
        std::cin >> a;
        std::cout << std::fixed << std::setprecision(3) << a * a;
    } else if (type == "rectangle") {
        double a, b;
        std::cin >> a >> b;
        std::cout << std::fixed << std::setprecision(3) << a * b;
    } else if (type == "circle") {
        double r;
        std::cin >> r;
        std::cout << std::fixed << std::setprecision(3) << r * r * 3.14159;
    } else {
        double a, h;
        std::cin >> a >> h;
        std::cout << std::fixed << std::setprecision(3) << a * h / 2;
    }
    std::cout << std::endl;
    return 0;
}
