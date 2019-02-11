#include <iostream>

int main() {
    int n;
    std::cin >> n;
    for (int i = 0; i < n; i++) {
        int q = i + 1;
        bool b = false;
        for (int j = 0; j < n; j++) {
            if (q >= n) {
                b = true;
            }
            std::cout << q << " ";
            if (!b)
                q++;
            else
                q--;
        }
        std::cout << std::endl;
    }
}
