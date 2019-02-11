#include <iostream>
#include <cmath>

using namespace std;

int main ()
{
	int n;
	cin >> n;
	int sum [2] = {0, 0};
	for (int i = 0 ; i < n ; i ++)
	{
		int a;
		cin >> a;
		sum [i % 2] += a;
	}
	if (sum [0] == sum [1])
		cout << "Yes\nSum = " << sum [1] << endl;
	else
		cout << "No\nDiff = " << abs (sum [1] - sum [0]) << endl;
}
