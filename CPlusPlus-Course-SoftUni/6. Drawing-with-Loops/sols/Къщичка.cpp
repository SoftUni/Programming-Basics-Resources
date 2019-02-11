#include <iostream>

using namespace std;

int main ()
{
	int n;
	cin >> n;
	int stars = (n % 2 == 0) ? 2 : 1;
	for(int i = 0; i < (n + 1) / 2; i++)
	{
		for(int j = 0; j < (n - stars) / 2; j++)
		{
			cout << "-";
		}
		for(int j = 0; j < stars; j++)
		{
			cout << "*";
		}
		for(int j = 0; j < (n - stars) / 2; j++)
		{
			cout << "-";
		}
		cout << endl;
		stars += 2;
	}
	for(int i = 0; i < n - ((n+1)/2); i++)
	{
		cout << "|";
		for(int j = 0; j < n - 2; j++)
		{
			cout << "*";
		}
		cout << "|\n";	
	}
}
