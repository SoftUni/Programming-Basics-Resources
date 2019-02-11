#include <iostream>

int main() {
	int n;
	std::cin >> n;
	bool prime = true;
	if(n < 2)
		prime = false;
	for(int i = 2; i * i <= n; i++) {
		if(n % i == 0) {
			prime = false;
			break;
		}
	}
	if(prime)
		std::cout << "prime\n";
	else
		std::cout << "not prime\n";
	return 0;
}
