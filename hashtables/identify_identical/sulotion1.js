const readlineSync = require('readline-sync');

function hasIdenticals(snowflakes) {
    for (const [index, snowflake] of snowflakes.entries()) {
        for (let i = index + 1; i < snowflakes.length; i++) {
            if (snowflake == snowflakes[i]) {
                console.log('identicals found', { snowflake, 'match\'s index': i });
                return;
            }
        }
    }
    console.log('there are no identicals');
    return;
}


function program() {
    const integers = [];
    const amountOfIntegers = 0;

    const readAmountOfIntegersFromReadLine = () => {
        const input = readlineSync.question("provide number of integers: ");
        const amount = parseInt(amount);
        return amount;
    }

    const setTheAmountOfIntegers = () => {
        amountOfIntegers = readAmountOfIntegersFromReadLine();
    }

    setTheAmountOfIntegers();

    const setIntegers = (integer) => {
        integers.push(integer);
    }

    const readIntegerFromReadLine = () => {
        const input = readlineSync.question("provide an integer: ");
        const integer = parseInt(input);
        return integer;
    }

    for (let index = 0; index < amountOfIntegers; index++) {
        integers.push(parseInt());
        console.log(integers);
    }

    hasIdenticals(integers);
}

program();
