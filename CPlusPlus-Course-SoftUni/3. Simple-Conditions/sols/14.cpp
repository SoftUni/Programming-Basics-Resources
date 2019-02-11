#include <iostream>

int main() {
	int h, m;
	std::cin >> h >> m;
	m += 15;
	if(m >= 60) {
		h ++;
		m -= 60;
	}
	if(h >= 24)
		h -= 24;
	std::cout << h << ":";
	if(m < 10)
		std::cout << 0;
	std::cout << m << std::endl;
	return 0;
}
