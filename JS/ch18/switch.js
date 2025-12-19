const mon = parseInt(Math.random() * 12.0) + 1;

console.log(mon);

switch (mon) {
    case 2:
        console.log("이제 조금 따뜻해졌네.");
  case 1:
  case 12:
    console.log("겨울");
    break;
  case 3:
  case 4:
  case 5:
    console.log("봄");
    break;
  case 8:
    console.log("파이어");
  case 7:
  case 6:
    console.log("여름");
    break;
  case 9:
  case 10:
  case 11:
    console.log("가을");
    break;
}