#include <iostream>

int main() {
	int fac = 1;
	int n;
	std::cin >> n;
	for(int i = 2; i <= n; i++)
		fac *= i;
	std::cout << fac << std::endl;
	return 0;
}
