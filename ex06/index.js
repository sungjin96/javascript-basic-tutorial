// 객체
const dog = {
  name: "뽀삐",
  age: 4,
};
const cat = {
  name: "또또",
  age: 5,
};

console.log(dog);
console.log(cat);

console.log(dog.name);
console.log(dog.age);

dog.name = "뽀빠이";
console.log(dog);

const { age } = dog;
console.log(age);

const newDog = {...dog, gender: "남"}
console.log(newDog)
