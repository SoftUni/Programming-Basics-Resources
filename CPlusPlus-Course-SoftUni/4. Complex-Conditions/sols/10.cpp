#include <iostream>

int main() {
    std::string animal;
    std::cin >> animal;
    if (animal == "dog")
        std::cout << "mammal";
    else if (animal == "crocodile" || animal == "tortoise" || animal == "snake")
        std::cout << "reptile";
    else
        std::cout << "unknown";
}
