#include <iostream>

int main() {
    std::string p;
    std::cin >> p;
    if (p == "banana" || p == "apple" || p == "kiwi" || p == "cherry" ||
        p == "lemon" || p == "grapes") {
        std::cout << "fruit";
    }

    else if (p == "tomato" || p == "cucumber" || p == "pepper" ||
             p == "carrot") {
        std::cout << "vegetable";
    }

    else {
        std::cout << "unknown";
    }
}
