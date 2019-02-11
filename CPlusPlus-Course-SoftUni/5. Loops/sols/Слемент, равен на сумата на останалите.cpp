#include <iostream>

using namespace std;

int main ()
{
	int n; cin >> n;
	int arr [10000];
	for(int i = 0; i < n; i++)
	{
		cin >> arr [i];
	}
	int max = -(1 << 30), summ = 0;
	for(int i = 0; i < n; i++)
	{
		int sum = 0;
		for(int j = 0; j < n; j++)
		{
			if(i != j)
				sum += arr[j];
		}
		if(sum == arr[i])
		{
			cout << "Yes\nSum = " << arr[i];
			return 0;
		}
		else
		{
			if(max < arr [i])
			{
				max = arr [i];
				summ = abs(sum - arr [i]);
			}
		}
	}
	cout << "No\nDiff = " << summ << "\n";
}
