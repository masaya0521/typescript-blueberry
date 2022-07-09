const message: string = "Hello world";

const NumberStartTime: number = Date.now();
let coutNumber: number = 0;
for (let index = 0; index < 100; index++) {
  coutNumber = 1 + 1;
}
const NumberEndTime = Date.now(); // 終了時間

const BigIntStartTime: number = Date.now();
let coutBigInt: BigInt = 0n;
for (let index = 0; index < 100; index++) {
  coutBigInt = 1n + 1n;
}
const BigIntEndTime = Date.now(); // 終了時間

console.log(`numberの処理時間 : ${NumberEndTime - NumberStartTime} ミリ秒`); // 10000000000のforでまわして9252ミリ秒
console.log(`bigIntの処理時間 : ${BigIntEndTime - BigIntStartTime} ミリ秒`); // 10000000000のforでまわして9238ミリ秒
