#include <iostream>

int main() {
	int a, b, c;
	std::cin >> a >> b >> c;
	if(a == b && b == c)
		std::cout << "yes\n";
	else
		std::cout << "no\n";
	return 0;
}
