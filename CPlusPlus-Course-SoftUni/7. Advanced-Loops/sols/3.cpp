#include <iostream>

int main() {
	int n;
	std::cin >> n;
	int q = 1;
	for(int i = 0; i <= n; i++) {
		std::cout << q << std::endl;
		q *= 2;
	}
	return 0;
}
