// 배열의 forEach
// arr의 배열에서 하나씩 꺼내와 proc함수를 실행하라

const arr = [3, 88, 76, 9, 34, 65];

function proc(item) {
    console.log(item);
}

arr.forEach(proc);
// for (let i = 0; i < arr.length; i++) {
//     proc(arr[i]);
// }

arr.forEach(item => {
    console.log(item + 2);
});