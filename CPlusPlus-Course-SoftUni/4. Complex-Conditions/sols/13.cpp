#include <iostream>

int main() {
    int h, x, y;
    std::cin >> h >> x >> y;

    if ((x < h && y > h) || (x > 2 * h && y > h) || (x < 0) || (x > 3 * h) ||
        (y < 0) || (y > 4 * h)) {
        std::cout << "outside";
    } else if ((x > 0 && x < 3 * h && y > 0 && y < h) ||
               (x > h && x < 2 * h && y < 4 * h && y > 0)) {
        std::cout << "inside";
    } else {
        std::cout << "border";
    }
    return 0;
}
