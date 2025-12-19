const rVal = parseInt(Math.random() * 25.0) + 1;

if (rVal % 2 == 0) {
    console.log('짝수입니다.');
}
else {console.log("홀수입니다.");}
 

console.log(rVal)

if (rVal < 15) {
  console.log("15보다 작습니다.");
} else {
  console.log("15이상입니다.");
}