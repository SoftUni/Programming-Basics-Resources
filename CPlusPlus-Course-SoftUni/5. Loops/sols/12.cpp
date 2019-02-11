#include <iostream>

using namespace std;

int main ()
{
	int n; cin >> n;
	if(n > 1)
	{
		int arr [100000];
		for(int i = 0; i < n; i++)
		{
			int a , b;
			cin >> a >> b;
			arr [i] = a + b;
		}
		int max = -100000;
		for(int i = 0; i < n - 1; i++)
		{
			if(max < abs(arr[i] - arr [i+1]))
			{
				max = abs(arr[i] - arr[i+1]);
			}
		}
		if(max == 0)
		{
			cout << "Yes, value=" << arr[0];
		}
		else
		{
			cout << "No, maxdiff=" << max;
		}
	}
	else
	{
		int a, b;
		cin >> a >> b;
		cout << "Yes, value=" << a + b;
	}
	cout << endl;
}
