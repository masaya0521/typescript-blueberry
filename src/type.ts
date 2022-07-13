type Human = {
  name: string;
};

type Family<name extends Human, Child extends Human> = {
  mother: name;
  father: Child;
};

const obj = {
  name: "name",
  email: "test",
};

// アロー関数ds
const sum = (...args: number[]): number => {
  let result = 0;
  for (const num of args) {
    result += num;
  }
  return result;
};

console.log(sum(1, 10, 100));
console.log(sum(1, 5));
