#include <iostream>

using namespace std;

int main ()
{
	int n;
	cin >> n;
	for (int i = 0 ; i <= n ; i ++)
	{
		string left = string (n - i, ' ') + string (i, '*');
		string right = string (i, '*') + string (n - i, ' ');
		cout << left << " | " << right;
		cout << "\n";
	}
}
