const fact = (x) => {
  if (x === 1) {
    return 1;
  }

  return x * fact(x - 1);
};

const x = fact(3);