#include <iostream>
#include <cmath>

using namespace std;

int main ()
{
	int n;
	cin >> n;
	int sum1 = 0, sum2 = 0;
	for (int i = 0 ; i < n ; i ++)
	{
		int a;
		cin >> a;
		sum1 += a;
	}
	for (int i = 0 ; i < n ; i ++)
	{
		int a;
		cin >> a;
		sum2 += a;
	}
	if (sum1 == sum2)
		cout << "Yes, sum = " << sum1 << endl;
	else
		cout << "No, diff = " << abs (sum1 - sum2) << endl;
}
