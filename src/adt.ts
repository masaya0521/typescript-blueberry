// adt（代数的データ型）と型の絞り込みの例

type Human = {
  tag: "human";
  name: string;
};
type Animal = {
  tag: "animal";
  text: string;
};
// ユニオン型の定義
type User = Human | Animal;

function getUserName(user: User) {
  // ここで型の絞り込みが行われている
  if (user.tag === "human") {
    return user.name;
  } else {
    return "名無し";
  }
}

const tama: User = {
  tag: "animal",
  text: "test",
};
const taro: User = {
  tag: "human",
  name: "taro",
};

console.log(getUserName(tama));
console.log(getUserName(taro));
