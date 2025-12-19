
// for (let i = 1; i <= 10; i++) {
//     if (i == 5) { break; }
//     console.log(i)
// }

// for (let i = 1; i <= 10; i++) {
//     if (i == 5) { continue; }
//   console.log(i);
// }

// for (let i = 0; i < 10; i++){
//     for (let k = 0; i < 10; k++){
//         if (k == 5) { break; }
//         console.log(`i:${i}, k:${k}`)
//     }
// }

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 1) {continue;}
//         console.log(i)
//     }

// for (let i = 1; i <= 10; i++) {
//     if (i % 3 === 0) { continue; }
//     if (i === 8) { break; }
//     console.log(i)
// }


// 반복문에 별명 지정
outerLoop:
for (let i = 0; i < 10; i++) {
    for (let k = 0; i < 10; k++) {
        if (k == 5) { continue outerLoop; }
        console.log(`i:${i}, k:${k}`)
    }
}
