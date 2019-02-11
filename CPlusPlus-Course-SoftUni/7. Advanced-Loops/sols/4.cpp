#include <iostream>

int main() {
	int n;
	std::cin >> n;
	int q = 1;
	for(int i = 0; i <= n; i+=2) {
		std::cout << q << std::endl;
		q *= 4;
	}
	return 0;
}
