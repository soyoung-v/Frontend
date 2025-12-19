const value = parseInt(Math.random() * 10.0) + 1;

if (value >= 8) { console.log(`${value}값은 8이상이다.`)  }
    else if (value % 2 == 1) {  console.log(`${value}값은 홀수이다.`);}
    // else if (식3) {  식3이 T일때 수행  }
    else { console.log(`${value}값은 8미만이면서 짝수이다.`); }
    
// console.log('value: '+ value);
// console.log(`value: ${value}`);
// console.log('value: ${value}');