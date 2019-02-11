#include <iostream>

int main() {
    double x1, y1, x2, y2, x, y;
    std::cin >> x1 >> y1 >> x2 >> y2 >> x >> y;

    bool isOnTop = y == y1 && (x >= x1 && x <= x2);
    bool isOnButtom = y == y2 && (x >= x1 && x <= x2);
    bool isOnLeft = x == x1 && (y >= y1 && y <= y2);
    bool isOnRight = x == x2 && (y >= y1 && y <= y2);

    if (isOnTop || isOnButtom || isOnLeft || isOnRight) {
        std::cout << "Border";
    } else {
        std::cout << "Inside / Outside";
    }
    return 0;
}
