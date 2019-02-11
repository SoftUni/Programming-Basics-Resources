#include <iostream>

int main() {
	int n;
	std::cin >> n;
	for(int i = 1; i <= n; i = 2 * i + 1) {
		std::cout << i << std::endl;
	}
	return 0;
}
