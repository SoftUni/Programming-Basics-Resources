#include <iostream>

using namespace std;

int main ()
{
	string text;
	getline (cin, text);
	int sum = 0;
	for (int i = 0 ; i < text.size () ; i ++)
	{
		if(text [i] == 'a')
		{
			sum += 1;
		}
		if(text [i] == 'e')
		{
			sum += 2;
		}
		if(text [i] == 'i')
		{
			sum += 3;
		}
		if(text [i] == 'o')
		{
			sum += 4;
		}
		if(text [i] == 'u')
		{
			sum += 5;
		}
	}
	cout << sum << "\n";
}
