/*
Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
*/

/*
Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
*/

import {monitorPerformance} from "../utils/monitorPerformance.js";

/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = n => () => n++;
const cleanCreateCounter = function(n) {
    let count = n - 1
    return function() {
        count++
        return count
    };
};

monitorPerformance(() => {
    const cleanCounter = cleanCreateCounter(10)
    console.log(cleanCounter()) // 10
    console.log(cleanCounter()) // 11
    console.log(cleanCounter()) // 12
    console.log(cleanCounter()) // 13
}, "cleanCounter")

monitorPerformance(() => {
    const counter = createCounter(10);
    console.log(counter()) // 10
    console.log(counter()) // 11
    console.log(counter()) // 12
    console.log(counter()) // 13
}, "counter")
