const person1 = {
    name: "김철수3",
    age: 25,
    married: false,
};

console.log(typeof person1);
console.log(person1);

// marride 의 값을 F에서 T로 변경
person1.married = true;

console.log(person1);

person1['age'] = 30;
const key = 'name';
person1[key] = '권수영';
person1.address = '대구';
person1['height'] = 174.3;

console.log(person1);
