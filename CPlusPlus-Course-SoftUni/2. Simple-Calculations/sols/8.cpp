#include <iostream>
#include <iomanip>

int main() {
	double a, h;
	std::cin >> a >> h;
	std::cout << std::fixed<< std::setprecision(2) << a * h / 2 << std::endl;
	return 0;
}
