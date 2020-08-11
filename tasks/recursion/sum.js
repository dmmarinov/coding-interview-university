const sum = (list) => {
  if (list.length === 0) {
    return 0;
  }

  if (list.length === 1) {
    return list[0];
  }

  return list.pop() + sum(list);
};

const arr = [1, 2, 3, 4];
console.log(sum(arr));