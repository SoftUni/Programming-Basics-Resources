#include <iostream>
#include <string>

using namespace std;

const double Int32MinValue = -10000, Int32MaxValue = 10000; 

int main ()
{
	int n; cin >> n;
	double OddSum = 0, OddMin = Int32MaxValue, OddMax = Int32MinValue;
	double EvenSum = 0, EvenMin = Int32MaxValue, EvenMax = Int32MinValue;
	for(int i = 0; i < n; i++)
	{
		double p; cin >> p;
		if((i+1) % 2 == 0)
		{
			EvenSum += p;
			if(EvenMax < p)
				EvenMax = p;
			if(EvenMin > p)
				EvenMin = p;
		}
		else
		{
			OddSum += p;
			if(OddMax < p)
				OddMax = p;
			if(OddMin > p)
				OddMin = p;
		}
	}
	cout << "OddSum=" << OddSum << ", ";
	cout << "OddMin=";
	if (OddMin == Int32MaxValue) cout << "No";
	else                         cout << OddMin;
	cout << ", OddMax=";
	if (OddMax == Int32MinValue) cout << "No";
	else                         cout << OddMax;
	cout << ", EvenSum=" << EvenSum << ", ";
	cout << "EvenMin=";
	if (EvenMin == Int32MaxValue) cout << "No";
	else                         cout << EvenMin;
	cout << ", EvenMax=";
	if (EvenMax == Int32MinValue) cout << "No";
	else                         cout << EvenMax;
	cout << "\n";
}
