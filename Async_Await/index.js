// Looks like synch code without blocking execution thread
// Async infront of function forces it to return a promise
// await can only be inside async function, waits for promise, async func will pause where it ways

const simpleFunction = async () => {
    return 'Simple';
}; 

const simpleFunction2 = async () => {
    let simple = await simpleFunction(); 
    console.log(simple);
    console.log('Simple 2');
}

simpleFunction2();
console.log('Waiting');

