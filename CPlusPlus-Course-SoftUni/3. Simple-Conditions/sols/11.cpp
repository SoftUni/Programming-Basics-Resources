#include <iostream>

char tolower(char in) {
    if (in <= 'Z' && in >= 'A')
        return in - ('Z' - 'z');
    return in;
}

int main() {
    std::string a, b;
    std::cin >> a >> b;
    if (a.size() != b.size())
        std::cout << "no\n";
    else {
        for (size_t i = 0; i < a.size(); i++) {
            if (tolower(a[i]) != tolower(b[i])) {
                std::cout << "no\n";
                return 0;
            }
        }
        std::cout << "yes\n";
    }
    return 0;
}
