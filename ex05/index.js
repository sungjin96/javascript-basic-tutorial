// 배열
// const array = []
const array = [1, 2, 3, 4, 5];
const array2 = new Array();

console.log(array);
console.log(array[0]);
// console.log(array(5)) ERROR!!!
console.log(array.length);

// 배열에 새로운 데이터를 넣는 방법
array.push(6);
console.log(array);

// 두개의 배열 합시는 두가지 방법
// const newArray = array.concat([7,8,9])
const newArray = [...array, 7, 8, 9];
console.log(newArray);

// 배열의 마지막 데이터 뽑기
console.log(newArray.pop())
console.log(newArray)

// 배열 자르기
console.log(newArray.slice(5))

// forIn 문
for (let index in array) {
  console.log(index);
}

// forOf 문
for (let number of array) {
  console.log(number);
}

// forEach 문
array.forEach(function (number) {
  console.log(number);
});
array.forEach((number) => {
  console.log(number);
});
const total = array.reduce((total, number) => {
  return (total += number);
}, 0);
console.log(`총 합: ${total}`);

// const one = array.find((number) => {
//     return number === 1
// })
const one = array.find((number) => number === 1);
const twoMore = array.filter((number) => number >= 2);

// 문제!!!! 만약 [1,2,3,4,5,6,7,8,9,10]의 배열이 있다면, 이중 5 이상의 숫자의 합을 구하라.
const result = array
  .filter((number) => number >= 5)
  .reduce((total, number) => (total += number), 0);
