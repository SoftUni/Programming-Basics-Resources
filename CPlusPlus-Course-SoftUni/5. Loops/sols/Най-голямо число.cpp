#include <iostream>

using namespace std;

int main ()
{
	int n;
	cin >> n;
	int max = 0;
	cin >> max;
	for (int i = 1 ; i < n ; i ++)
	{
		int a;
		cin >> a;
		max = std::max (a, max);
	}
	cout << max << "\n";
}
