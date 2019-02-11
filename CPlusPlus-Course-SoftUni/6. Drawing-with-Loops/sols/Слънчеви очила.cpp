#include <iostream>

using namespace std;

int main ()
{
	int n;
	cin >> n;
	cout << string (2 * n, '*') << string (n, ' ') << string (2 * n, '*') << '\n';
	for (int i = 0 ; i < n - 2 ; i ++)
		cout << '*' << string (2 * n - 2, '/') << '*' << string (n, ((i == (n - 3) / 2)?'|':' ')) << '*' << string (2 * n - 2, '/') << '*' << '\n';
	cout << string (2 * n, '*') << string (n, ' ') << string (2 * n, '*') << '\n';
}
