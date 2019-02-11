#include <iostream>
#include <string>

using namespace std;

int main() {
    string firstName;
    cin >> firstName;
    string lastName;
    cin >> lastName;
    int age;
    cin >> age;
    string town;
    cin >> town;
    cout << "You are " << firstName << " " << lastName
         << ", a " << age
         << "-years old person from " << town << ".";

    return 0;
}
