// for ( 1 = 2 ; 4 ) {
//    3 ;
// }

// for (let i = 0; i < 10; i++) {
//   console.log("i : ", i);
// }

// 중첩 for문 (for in for)
for (let h = 0; h < 6; h++){
    for (let m = 0; m < 10; m++) {
        for (let s = 0; s < 10; s++) {
            console.log(`${h}:${m}:${s}`);
        }
    }    
}