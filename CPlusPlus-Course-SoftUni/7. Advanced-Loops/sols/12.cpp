#include <iostream>

int main() {
    int n;
    std::cin >> n;
    if (n < 2)
        std::cout << 1;
    else {
        int f1 = 1, f2 = 1;
        for (int i = 0; i < n; i++) {
            int tmp = f1;
            f1 = f2;
            f2 = tmp + f2;
        }
        std::cout << f1 << std::endl;
    }
}
