#include <iostream>

using namespace std;

int main ()
{
	int n;
	cin >> n;
	cout << "+ "; for (int i = 0 ; i < n - 2 ; i ++) cout << "- "; cout << '+' << endl;
	for (int i = 0 ; i < n - 2 ; i ++)
	{
		cout << "| "; for (int i = 0 ; i < n - 2 ; i ++) cout << "- "; cout << '|' << endl;
	}
	cout << "+ "; for (int i = 0 ; i < n - 2 ; i ++) cout << "- "; cout << '+' << endl;
}
