#include <iostream>
#include <string>

int main() {
	std::string pass;
	std::cin >> pass;
	if(pass == "s3cr3t!P@ssw0rd")
		std::cout << "Welcome";
	else
		std::cout << "Wrong password!";
	std::cout << std::endl;
}
