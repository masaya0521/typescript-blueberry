// ジェネリクス
const generics = <T>(element: T): T => {
  return element;
};

const stringText = "a";
const numberText = 1;

// どの型でもいける
console.log(generics(stringText));
console.log(generics(numberText));
