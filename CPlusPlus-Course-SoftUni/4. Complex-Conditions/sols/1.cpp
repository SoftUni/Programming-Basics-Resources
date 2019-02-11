#include <iostream>

int main() {
    double age;
    std::string gender;
    std::cin >> age >> gender;
    if (age < 16) {
        if (gender == "m")
            std::cout << "Master";
        else if (gender == "f")
            std::cout << "Miss";
    } else {
        if (gender == "m")
            std::cout << "Mr.";
        else if (gender == "f")
            std::cout << "Ms.";
    }
    return 0;
}
