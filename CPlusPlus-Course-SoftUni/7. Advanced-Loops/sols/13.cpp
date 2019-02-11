#include <iostream>

int main() {
	int n;
	std::cin >> n;
	int c = 1;
	for(int i = 1; i <= n; i++) {
		for(int j = 0; j < i; j++) {
			std::cout << c++ << " ";
			if(c == n+1)
				return 0;
		}
		std::cout << std::endl;
	}
}
