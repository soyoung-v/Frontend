// function abs(num) {
//     if (num < 0) {
//         console.log(num * -1);
//         return;
//     }
//       console.log(num);
//     }

// abs(10)
// abs(-20)

// function abs(num) {
//     if (num < 0) { return -num; }
//     return num;
// }

//  console.log('절대값: ', abs(-10))


// function random(num) {
//     const ran = parseInt(Math.random() * num);
//     return ran;
// }

// const randomValue = random(9)
// console.log('randomValue: ',randomValue)
// const randomValue2 = random(15);
// console.log('randomValue2 :',randomValue2);

// function random(x,y) {
//     const ran = parseInt(Math.random() * (y-x) ) + x;
//     return ran;
// }
// const randomValue = random(3,9)
// console.log('randomValue: ',randomValue)
// const randomValue2 = random(10,15);
// console.log('randomValue2 :',randomValue2);

// function printStarLine(x) {
//     let star = ''
//     for (let i = 0; i < x; i++){
//         star += '*'
//     }
//     console.log(star)
// }

// printStarLine(5);
// printStarLine(3);

// console.log('-----------------square')

// function printStarSquare(y) {
//     for (let i = 0; i < y; i++) {
//         printStarLine(y)
//     }
// }

// // printStarSquare(5);
// // printStarSquare(3);


// function printStarTriangle(i) {
//     for (j = 1; j <= i; j++){
//         printStarLine(j)
//     }
// }

// printStarTriangle(5);
// printStarTriangle(3);

// const arr = [10, 8, 4, 88, 65, 3];
// const max = findMax(arr);

// function findMax(arr) {
//     let max = arr[0];
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(max)


const arr = [10, 8, 4, 88, 65, 3, 99];

// function sumArr(arr) {
//     let sum = 0;
//     for (i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
const sumArr = arr => {
    let sum = 0;
        for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
     }
    return sum;
}

const sum = sumArr(arr);
console.log(sum)