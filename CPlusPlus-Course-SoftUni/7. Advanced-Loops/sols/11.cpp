#include <iostream>

int main() {
	int n;
	do {
		std::cout << "Еnter even number:\n";
		std::cin >> n;
		if(n % 2)
			std::cout << "The number is not even.\n";
	} while(n % 2);
	std::cout << "Even number entered: " << n << std::endl;
	return 0;
}
