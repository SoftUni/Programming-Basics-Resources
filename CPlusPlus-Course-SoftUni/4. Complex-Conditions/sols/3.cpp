#include <iostream>

int main() {
    double x1, y1, x2, y2, x, y;
    std::cin >> x1 >> y1 >> x2 >> y2 >> x >> y;
    bool isInside = (x <= x2 && x >= x1) && (y <= y2 && y >= y1);

    if (isInside) {
        std::cout << "Inside";
    } else {
        std::cout << "Outside";
    }
    return 0;
}
