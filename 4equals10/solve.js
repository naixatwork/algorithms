const numbers = [6,5,3,1];

const operationTree = {
    '+': {
        '+': {
            '+': {},
            '-': {},
            '*': {},
            '/': {},
        },
        '-': {
            '+': {},
            '-': {},
            '*': {},
            '/': {},
        },
        '*': {
            '+': {},
            '-': {},
            '*': {},
            '/': {},
        },
        '/': {
            '+': {},
            '-': {},
            '*': {},
            '/': {},
        },
    },
    '-': {
        '+': {
            '+': {},
            '-': {},
            '*': {},
            '/': {},
        },
        '-': {
            '+': {},
            '-': {},
            '*': {},
            '/': {},
        },
        '*': {
            '+': {},
            '-': {},
            '*': {},
            '/': {},
        },
        '/': {
            '+': {},
            '-': {},
            '*': {},
            '/': {},
        },
    },
    '*': {
        '+': {
            '+': {},
            '-': {},
            '*': {},
            '/': {},
        },
        '-': {
            '+': {},
            '-': {},
            '*': {},
            '/': {},
        },
        '*': {
            '+': {},
            '-': {},
            '*': {},
            '/': {},
        },
        '/': {
            '+': {},
            '-': {},
            '*': {},
            '/': {},
        },
    },
    '/': {
        '+': {
            '+': {},
            '-': {},
            '*': {},
            '/': {},
        },
        '-': {
            '+': {},
            '-': {},
            '*': {},
            '/': {},
        },
        '*': {
            '+': {},
            '-': {},
            '*': {},
            '/': {},
        },
        '/': {
            '+': {},
            '-': {},
            '*': {},
            '/': {},
        },
    },
}


const isEqualTo10 = (first, second, third) => {
    const equation = `${numbers[0]} ${first} ${numbers[1]} ${second} ${numbers[2]} ${third} ${numbers[3]}`;
    if (eval(equation) === 10) {
        console.log(equation)
    }
}

for (const firstRowKey in operationTree) {
    for (const secondRowKey in operationTree[firstRowKey]) {
        for (const thirdRowKey in operationTree[firstRowKey][secondRowKey]) {
            isEqualTo10(firstRowKey, secondRowKey, thirdRowKey)
        }
    }
}

