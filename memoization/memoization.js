import { monitorPerformance } from '../utils/monitorPerformance.js'

const prevValues = []

function squareWithMemo(n) {
    if (prevValues[n] != null) {
        return prevValues[n];
    }

    let result = 0;
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            result += 1;
        }
    }

    prevValues[n] = result;
    return result;
}

function square(n) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            result += 1;
        }
    }
    return result;
}


monitorPerformance(() => {
    console.log(squareWithMemo(30000));
    console.log(squareWithMemo(30000));
    console.log(squareWithMemo(30000));
}, 'with MEMO')

monitorPerformance(() => {
    console.log(square(30000));
    console.log(square(30000));
    console.log(square(30000));
}, 'without MEMO')
