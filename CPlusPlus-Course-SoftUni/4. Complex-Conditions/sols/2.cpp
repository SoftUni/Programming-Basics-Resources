#include <iostream>

int main() {
    std::string product, town;
    double q;
    std::cin >> product >> town >> q;

    if (town == "Sofia") {
        if (product == "coffee") {
            std::cout << q * 0.5;
        } else if (product == "water") {
            std::cout << q * 0.8;
        } else if (product == "beer") {
            std::cout << q * 1.2;
        } else if (product == "sweets") {
            std::cout << q * 1.45;
        } else if (product == "peanuts") {
            std::cout << q * 1.6;
        }
    }

    if (town == "Varna") {
        if (product == "coffee") {
            std::cout << q * 0.45;
        } else if (product == "water") {
            std::cout << q * 0.7;
        } else if (product == "beer") {
            std::cout << q * 1.1;
        } else if (product == "sweets") {
            std::cout << q * 1.35;
        } else if (product == "peanuts") {
            std::cout << q * 1.55;
        }
    }

    if (town == "Plovdiv") {
        if (product == "coffee") {
            std::cout << q * 0.4;
        } else if (product == "water") {
            std::cout << q * 0.7;
        } else if (product == "beer") {
            std::cout << q * 1.15;
        } else if (product == "sweets") {
            std::cout << q * 1.30;
        } else if (product == "peanuts") {
            std::cout << q * 1.5;
        }
    }
}
