#include <iostream>

int main() {
	int n;
	std::cin >> n;
	if(n < 100)
		std::cout << "Less than 100";
	else if(n > 200)
		std::cout << "Greater than 200";
	else
		std::cout << "Between 100 and 200";
	std::cout << std::endl;
	return 0;
}
