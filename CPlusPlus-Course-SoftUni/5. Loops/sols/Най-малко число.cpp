#include <iostream>

using namespace std;

int main ()
{
	int n;
	cin >> n;
	int min = 0;
	cin >> min;
	for (int i = 1 ; i < n ; i ++)
	{
		int a;
		cin >> a;
		min = std::min (a, min);
	}
	cout << min << "\n";
}
