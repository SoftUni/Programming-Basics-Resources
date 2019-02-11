#include <iostream>

int main() {
	int n;
	do {
		std::cout << "Еnter a number in the range [1...100]:\n";
		std::cin >> n;
		if(n < 1 || n > 100)
			std::cout << "Invalid number!\n";
	} while(n < 1 || n > 100);
	std::cout << "The number is: " << n << std::endl;
	return 0;
}
