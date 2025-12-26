const arr = [3, 88, 76, 9, 34, 65];

const arr2 = arr.filter(item => item <= 70);

console.log(arr);
console.log(arr2);

// const arr3 = arr.filter(item => item < 10 || item > 70);
const arr3 = arr.filter((item,i) => i < 4);
console.log(arr3);

const arr4 = arr.map(item => {
    if (item % 2) { return item; }
    else { return item + 2; }
});
// const arr4 = arr.map((item) => (item % 2 ? item : item + 2));
// {}있으면 return을 해야되고 없으면 생략이 가능하다.

console.log(arr4);

const arr5 = arr.filter(item => item % 2 === 0).map(item => item / 2);
const arr6 = arr5.map(item => item / 2 );

console.log(arr5);
console.log(arr6);