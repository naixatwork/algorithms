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
    let amountOfIntegers = 0;

    const readAmountOfIntegersFromReadLine = () => {
        const input = readlineSync.question("provide number of integers: ");
        const amount = parseInt(input);
        return amount;
    }

    const setTheAmountOfIntegers = () => {
        amountOfIntegers = readAmountOfIntegersFromReadLine();
    }

    const setIntegers = (integer) => {
        integers.push(integer);
    }

    const readIntegerFromReadLine = () => {
        const input = readlineSync.question("provide an integer: ");
        const integer = parseInt(input);
        return integer;
    }

    const setIntegersAccordingToTheAmount = () => {
        for (let index = 0; index < amountOfIntegers; index++) {
            const integer = readIntegerFromReadLine();
            setIntegers(integer);
            console.log(integers);
        }
    }

    setTheAmountOfIntegers();
    setIntegersAccordingToTheAmount();
    hasIdenticals(integers);
}

program();
