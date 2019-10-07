const { taskOne, taskTwo } = require('./tasks');

// Sequential processes
// async function main() {

//      try {
    //     console.time('Measuring time');
    //     const valueOne = await taskOne();
    //     const valueTwo = await taskTwo();
    //     console.timeEnd('Measuring time');

    //     console.log('Task One returned', valueOne);
    //     console.log('Task two returned', valueTwo);
    // } catch(e) {
    //     console.log(e);
    // }
    // }


// Parallel processes
async function main() {
    
    try {
        console.time('Measuring time');
        const results = await Promise.all([taskOne(), taskTwo()]);
        console.timeEnd('Measuring time');

        console.log('Task One returned', results[0]);
        console.log('Task two returned', results[1]);
    
    } catch(e) {
        console.log(e);
    }

}


main();