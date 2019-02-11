#include <iostream>

using namespace std;

int main ()
{
	int n;
	cin >> n;
	if(n == 1)
	{
		cout << "*" << endl;
	}
	else if(n == 2)
	{
		cout << "**" << endl;
	}
	else
	{
		int mid = (n % 2 == 0) ? 0 : -1;
		while(mid + 2 <= n)
		{
			if(mid == -1)
			{
				for(int i = 0; i < (n - 1) / 2; i++)
				{
					cout << "-";
				}
				cout << "*";
				for(int i = 0; i < (n - 1) / 2; i++)
				{
					cout << "-";
				}	
			}
			else
			{
				for(int i = 0; i < (n - mid - 2) / 2; i++)
				{
					cout << "-";
				}
				cout << "*";
				for(int i = 0; i < mid; i++)
				{
					cout << "-";
				}
				cout << "*";
				for(int i = 0; i < (n - mid - 2) / 2; i++)
				{
					cout << "-";
				}
			}
			cout << endl;
			mid += 2;
		}
		mid -= 4;
		do
		{
			if(mid == -1)
			{
				for(int i = 0; i < (n - 1) / 2; i++)
				{
					cout << "-";
				}
				cout << "*";
				for(int i = 0; i < (n - 1) / 2; i++)
				{
					cout << "-";
				}	
			}
			else
			{
				for(int i = 0; i < (n - mid - 2) / 2; i++)
				{
					cout << "-";
				}
				cout << "*";
				for(int i = 0; i < mid; i++)
				{
					cout << "-";
				}
				cout << "*";
				for(int i = 0; i < (n - mid - 2) / 2; i++)
				{
					cout << "-";
				}
			}
			cout << endl;
			mid -= 2;
		} while(mid >= -1);
	}
}
