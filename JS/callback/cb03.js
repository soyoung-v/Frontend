// 배열의 filter.
// 배열에서 필요한 아이템들만 뽑아서 새로운 배열을 만들때 사용

const arr = [3, 88, 76, 9, 34, 65];

const oddArr = arr.filter(item => item % 2);
// const oddArr = arr.filter((item) => { return item % 2 === 1; });
console.log(oddArr);
console.log(arr);

//true falue 중 t값은 새로운 배열에 넣고 f값은 버린다