// const arr = new Array(10);

// for (i = 0; i < arr.length; i++){
//     arr[i] = i+1
// }

// console.log(arr[3])

// const arr = [3, 8, 11, 86, 43, 22, 27]
// let num = 0
// for (i = 0; i < arr.length; i++){
//  num += arr[i]
// }

// console.log(num)

// const arr = [3, 8, 11, 86, 43, 22, 27];
// let num1 = 0
// let num2 = 0

// for (i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 1) {
//         num1 += arr[i]
//     }
//     else { num2 += arr[i]}
// }

// console.log(`홀수 합 : ${num1} , 짝수 합 : ${num2}`)

const arr = [3, 8, 11, 86, 43, 22, 27];
let max = arr[0];
let min = arr[0];
for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
    if (arr[i] < min) {
      min = arr[i];
    }
}
    
console.log (min,max)