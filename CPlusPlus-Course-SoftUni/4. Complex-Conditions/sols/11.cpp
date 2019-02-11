#include <iomanip>
#include <iostream>

int main() {
    std::string projection;
    int row, coloum;
    double price = 0.00;
    std::cin >> projection >> row >> coloum;

    if (projection == "Premiere") {

        price = 12.00;
        double profite = row * coloum * price;
        std::cout << std::fixed << std::setprecision(2) << profite;
    }

    else if (projection == "Normal") {

        price = 7.50;
        double profite = row * coloum * price;
        std::cout << std::fixed << std::setprecision(2) << profite;
    } else if (projection == "Discount") {

        price = 5.00;
        double profite = row * coloum * price;
        std::cout << std::fixed << std::setprecision(2) << profite;
    }
    return 0;
}
