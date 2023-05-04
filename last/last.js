/*
    should return the last element of given array if the array is empty it should return -1
*/

import {monitorPerformance} from "../utils/monitorPerformance.js";

function lastWithIf(array) {
    if (array.length === 0) return -1;
    return array[array.length - 1];
}

function lastWithTernary(array) {
    return array.length ? array[array.length - 1] : -1;
}

function lastWithSlice(array) {
    return array.length ? array.slice(-1)[0] : -1;
}

const array = new Array(500).fill(4);
const emptyArray = [];

monitorPerformance(() => {
    console.log(lastWithIf(array));
}, "if / else block")

monitorPerformance(() => {
    console.log(lastWithIf(emptyArray));
}, "empty if / else block")

monitorPerformance(() => {
    console.log(lastWithTernary(array));
}, "ternary")

monitorPerformance(() => {
    console.log(lastWithTernary(emptyArray));
}, "empty ternary")

monitorPerformance(() => {
    console.log(lastWithSlice(array));
}, "slice")

monitorPerformance(() => {
    console.log(lastWithSlice(emptyArray));
}, "empty slice")