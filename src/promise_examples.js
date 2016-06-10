function slowFunction(cb) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => resolve(Math.floor(Math.random() * 10)),
            2000
        );
    });
}
function slowHare(cb) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => resolve(Math.floor(Math.random() * 10)),
            Math.random()*2000 + 1000
        );
    });
}

console.log('start the race!');
let tortoiseNum, hareNum, sum;
const tortoisePromise = slowFunction()
    .then((num) => { 
        console.log(`I'm a tortoise. My num is ${num}`);
        tortoiseNum = num;
    });
const harePromise = slowHare()
    .then((num) => { 
        console.log(`I'm a hare. My num is ${num}`);
        hareNum = num;
    });

Promise.all([tortoisePromise, harePromise]).then(() => {
    sum = hareNum + tortoiseNum;
    console.log(`Race over! Sum is ${sum}`);
});