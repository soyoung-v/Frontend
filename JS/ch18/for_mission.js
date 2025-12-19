// mission_01
// for (let i = 0; i < 10; i++) {
//   console.log("i : ", i + 1);
// }

// let a = []
// for (let i = 0; i < 10; i++) {
//   a += (i+1);
// }
// console.log('a : ', a)

//mission_02
// for (let i = 100; i < 110; i++) {
//   console.log("i : ", i - 99);
// }

// for (let i = 100; i <= 110; i++) {
//     if (i != 100) {
//         console.log("i : ", i - 100);
//     }
// }

//mission_03
// for (let i = 9; i < 16; i++) {
//     console.log('안녕!');
// }

//mission_04
// for (let i = 9; i > 2; i--) {
//     console.log('안녕!');
// }

//mission_05
// const dan = parseInt(Math.random() * 8) + 2
// console.log('dan: ', dan);

// for (let i=1; i<=9 ; i++) {
//     // console.log(dan, ' X ', i, ' = ', dan * i);
//     console.log(`${dan} X ${i} = ${dan * i}`);
// }

//mission_06
// for (let a = 2; a <= 9; a++) {
    
//         for (let i = 1; i <= 9; i++) {
//             console.log(`${a} X ${i} = ${a * i}`);
//         }
//     if(a!=9) console.log("------------");
// }

// for (let a = 2; a <= 9; a++) {
//     if (a > 2) { console.log("------------"); }
//   for (let i = 1; i <= 9; i++) {
//     console.log(`${a} X ${i} = ${a * i}`);
//   }
// }

//mission_07

const star = parseInt(Math.random() * 5) + 3;
console.log(star);

// // for (let a = 1; a <= star; a++){
// //     console.log('*')
// // }

// let i = ''
// for (let a = 1; a <= star; a++) {
//     i += '*'
// }
// console.log(i)

//mission_08

// let i = ''
// for (let b = 1; b <= star; b++) {
//     for (let a = 1; b==1 && a <= star; a++) {
//         i += "*";
//     }
//     console.log(i)
// }


let i = "";
for (let b = 1; b <= star; b++) {
    for (let a = 1; a <= star; a++) {
        if (b > 1) continue;
    i += "*";
  }
    console.log(i);
}

// let i = ''
// for (let a = 0; a < star; a++) {
//     i += '*';
// }
// for(let b = 0; b < star; b++) {
//     console.log(i)
// }

// let i = "";
// for (let b = 1; b <= star; b++) {
//     for (let a = 1; a <= star; a++) {
//     i += "*";
//   }
//     i += '\n';
// }
//  console.log(i);

// let i = "";
// for (let a = 1; a <= star; a++) {
//   for (let b = 1; b < a + 1; b++) {
//     i += "*";
//   }
//   i += "\n";
// }

// console.log(i);

// for (let a = star; a > 0; a--) {
//   for (let b = 1; b < a + 1; b++) {
//     i += "*";
//   }
//   i += "\n";
// }

// console.log(i);
 
// let i = "";
// for (let a = 0; a < star; a++){
//     for (let b = 0; b < star - (a+1); b++){
//         i += '_';
//     }
//     for (let c = 0; c < a+1; c++){
//         i += '*';
//     }
//     i += '\n';
// }

// let i = "";
// for (let a = 0; a < star; a++) {
//   for (let b = 0; b < star - (a + 1); b++) {
//     i += "_";
//   }
//   for (let c = 0; c < a + 1; c++) {
//     i += "*";
//   }
//   i += "\n";
// }

// console.log(i);


// let i = "";
// for (let a = 0; a < star; a++) {
//     for (let b = 0; b < star; b++) {
//         if (b < star - (a + 1)) { i += "_"; }
//         else {i += "*";}
//   }
//   i += "\n";
// }
// console.log(i);

// for (let i = star; i > 0; i--) {
//     let str = '';
//     for (let k = 1; k <= star; k++) {
//         str += k < i ? '_' : '*';
//     }
//     console.log(str);
// }