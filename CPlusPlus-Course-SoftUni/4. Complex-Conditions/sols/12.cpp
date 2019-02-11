#include <cmath>
#include <iostream>

int main() {
    std::string year;
    int present, week;
    std::cin >> year >> present >> week;
    double weekInSf = 48 - week;
    double gameSf = weekInSf * 3.0 / 4.0 + week;
    double total = gameSf + (present * 2.0 / 3.0);

    if (year == "normal") {
        std::cout << floor(total);
    } else if (year == "leap") {
        std::cout << floor(total + total * 0.15);
    }
}
