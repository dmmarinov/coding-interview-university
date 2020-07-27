#include <iostream>

using namespace std;

int main() {
  string name;
  cout << "What is your name?" << endl;
  getline(cin, name);
  cout << "My name is " << name << endl;

  return 0;
}