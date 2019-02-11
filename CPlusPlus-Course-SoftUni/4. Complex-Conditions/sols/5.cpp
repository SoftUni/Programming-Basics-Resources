#include <iostream>

int main() {
    int n;
    std::cin >> n;
    if (n != 0 && (n < 100 || n > 200))
        std::cout << "invalid\n";
}
