import { sign } from "crypto";

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

// コールバック関数
type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: "man", age: 25 },
  { name: "woman", age: 25 },
  { name: "junior", age: 15 },
];

// アロー関数は基本高階関数と一緒に使われる
const names = users.map((u: User) => u.name + "だよ");
console.log(names);

const highName = users.filter((u: User) => u.age > 20);
console.log(highName);

// ユニオン型
type Man = {
  name: string;
};
type Animal = {
  type: number;
};
type UnionUser = Man | Animal;
const user1: UnionUser = {
  name: "man",
};
const user2: UnionUser = {
  type: 1,
};
console.log("user1:" + user1.name);
console.log("user2:" + user2.type);

// リテラルとユニオンについて
function SingleNumber(type: "plus" | "minus") {
  return type === "plus" ? 1 : -1;
}
console.log(SingleNumber("plus"));
console.log(SingleNumber("minus"));
