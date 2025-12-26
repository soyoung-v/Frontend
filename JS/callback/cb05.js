//배열의 reduce함수, 배열을 하나의 값으로 변경하고 싶을 때 사용
//주로 전체 sum값을 구할 때

const arr = [3, 88, 76, 9, 34, 65];

// prev = 이전에 return한 값 current = 현재값
const result = arr.reduce((prev, current) => {
    return prev + current;
});

const result2 = arr.reduce((prev, current) => {
    return prev + current;
}, 0); // 0은 초기값으로 쓰인다 첫번째 prev의 역할
