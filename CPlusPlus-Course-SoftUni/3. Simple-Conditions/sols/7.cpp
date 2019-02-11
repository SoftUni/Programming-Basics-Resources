#include <iostream>

int main() {
    int res = 0;
    int q;
    std::cin >> q;
    res += q;
    std::cin >> q;
    res += q;
    std::cin >> q;
    res += q;
    int min = res / 60;
    int sec = res % 60;
    std::cout << min << ":";
    if(sec < 10)
        std::cout << 0;
    std::cout << sec << std::endl;
    return 0;
}
