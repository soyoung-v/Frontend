//자바스크립트는 싱글 스레드, 비동기처리 합니다.
//싱글 스레드 = 스레드가 하나다. (일하는 사람 1명)
//스레드 = 프로그램 안에서 실행단위

setTimeout(() => {
    console.log('첫번째 setTimeout');
    setTimeout(() => {
        console.log('두번째 setTimeout');
        setTimeout(() => {
            console.log('세번째 setTimeout');
        }, 800);
    },900);
}, 1000);

//콜백지옥에 빠지지 않기 위해 promise를 사용한다
setTimeout(()=>{console.log('첫번째 setTimeout');},1000);
setTimeout(()=>{console.log('두번째 setTimeout');},900);
setTimeout(() => { console.log('세번째 setTimeout'); }, 800);



