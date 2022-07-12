type Human = {
  name: string;
};

type Family<name extends Human, Child extends Human> = {
  mother: name;
  father: Child;
};
