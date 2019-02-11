#include <iomanip>
#include <iostream>

int main() {
    std::string town;
    double sell;
    std::cin >> town >> sell;

    if (sell < 0) {
        std::cout << "error";
    }

    else if (town == "Sofia") {
        if (sell > 10000) {
            std::cout << std::fixed << std::setprecision(2) << sell * 0.12;
        } else if (sell > 1000 && sell <= 10000) {
            std::cout << std::fixed << std::setprecision(2) << sell * 0.08;
        } else if (sell > 500 && sell <= 1000) {
            std::cout << std::fixed << std::setprecision(2) << sell * 0.07;
        } else if (sell >= 0 && sell <= 500) {
            std::cout << std::fixed << std::setprecision(2) << sell * 0.05;
        }
    }

    else if (town == "Varna") {
        if (sell > 10000) {
            std::cout << std::fixed << std::setprecision(2) << sell * 0.13;
        } else if (sell > 1000 && sell <= 10000) {
            std::cout << std::fixed << std::setprecision(2) << sell * 0.10;
        } else if (sell > 500 && sell <= 1000) {
            std::cout << std::fixed << std::setprecision(2) << sell * 0.075;
        } else if (sell >= 0 && sell <= 500) {
            std::cout << std::fixed << std::setprecision(2) << sell * 0.045;
        }
    }

    else if (town == "Plovdiv") {
        if (sell > 10000) {
            std::cout << std::fixed << std::setprecision(2) << sell * 0.145;
        } else if (sell > 1000 && sell <= 10000) {
            std::cout << std::fixed << std::setprecision(2) << sell * 0.12;
        } else if (sell > 500 && sell <= 1000) {
            std::cout << std::fixed << std::setprecision(2) << sell * 0.08;
        } else if (sell >= 0 && sell <= 500) {
            std::cout << std::fixed << std::setprecision(2) << sell * 0.055;
        }
    }

    else {
        std::cout << "error";
    }

    return 0;
}
