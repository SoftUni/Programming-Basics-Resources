#include <iostream>

int main() {
    double a;
    std::cin >> a;
    if (a <= 10)
        std::cout << "slow";
    else if (a <= 50)
        std::cout << "average";
    else if (a <= 150)
        std::cout << "fast";
    else if (a <= 1000)
        std::cout << "ultra fast";
    else
        std::cout << "extremely fast";
    std::cout << std::endl;
    return 0;
}
