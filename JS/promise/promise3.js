/*
async, await 사용법 - 무조건 함수가 필요!

then, catch 사용하지 않겠다.
*/

const increaseAndPrintPromise = (n) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const increased = n + 1;
            console.log('increased:', increased);
            resolve(increased);
        }, 1000)
    });
}

const callFunction = async (n) => {
    let result = await increaseAndPrintPromise(n);
    console.log('result:', result);
    const result2 = await increaseAndPrintPromise(result);
    console.log('result2:', result2);
}
callFunction(10);

