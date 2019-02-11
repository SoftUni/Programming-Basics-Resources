#include <iostream>
#include <algorithm>

int main() {
	int a, b;
	std::cin >> a >> b;
	if(a < b)
		std::swap(a, b);
	while(b != 0) {
		int tmp = a;
		a = b;
		b = tmp % b;
	}
	std::cout << a << std::endl;;
	return 0;
}
