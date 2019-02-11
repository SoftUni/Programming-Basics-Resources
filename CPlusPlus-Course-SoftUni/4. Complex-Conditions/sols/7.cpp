#include <iomanip>
#include <iostream>

int main() {
    std::string fruit, day;
    double quantity;

    std::cin >> fruit >> day >> quantity;

    if (day == "Saturday" || day == "Sunday") {
        if (fruit == "banana") {
            std::cout << std::fixed << std::setprecision(2) << quantity * 2.7;
        } else if (fruit == "apple") {
            std::cout << std::fixed << std::setprecision(2) << quantity * 1.25;
        } else if (fruit == "orange") {
            std::cout << std::fixed << std::setprecision(2) << quantity * 0.9;
        }

        else if (fruit == "grapefruit") {
            std::cout << std::fixed << std::setprecision(2) << quantity * 1.6;
        } else if (fruit == "kiwi") {
            std::cout << std::fixed << std::setprecision(2) << quantity * 3.0;
        } else if (fruit == "pineapple") {
            std::cout << std::fixed << std::setprecision(2) << quantity * 5.6;
        } else if (fruit == "grapes") {
            std::cout << std::fixed << std::setprecision(2) << quantity * 4.2;
        } else {
            std::cout << "error";
        }

    } else if (day == "Monday" || day == "Tuesday" || day == "Wednesday" ||
               day == "Thursday" || day == "Friday") {
        if (fruit == "banana") {
            std::cout << std::fixed << std::setprecision(2) << quantity * 2.5;
        } else if (fruit == "apple") {
            std::cout << std::fixed << std::setprecision(2) << quantity * 1.2;
        } else if (fruit == "orange") {
            std::cout << std::fixed << std::setprecision(2) << quantity * 0.85;
        }

        else if (fruit == "grapefruit") {
            std::cout << std::fixed << std::setprecision(2) << quantity * 1.45;
        } else if (fruit == "kiwi") {
            std::cout << std::fixed << std::setprecision(2) << quantity * 2.7;
        } else if (fruit == "pineapple") {
            std::cout << std::fixed << std::setprecision(2) << quantity * 5.5;
        } else if (fruit == "grapes") {
            std::cout << std::fixed << std::setprecision(2) << quantity * 3.85;
        } else {
            std::cout << "error";
        }
    } else {
        std::cout << "error";
    }
    return 0;
}
