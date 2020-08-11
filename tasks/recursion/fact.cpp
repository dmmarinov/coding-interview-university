#include <iostream>

using namespace std;

int fact(int x) {
  if (x == 1) {
    return 1;
  }

  cout << x * fact(x - 1) << endl;

  return x * fact(x - 1);
};

int main() {
  int x = fact(3);

  // cout << x << endl;
}