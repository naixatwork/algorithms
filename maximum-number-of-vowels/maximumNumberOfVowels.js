/*
    Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
    Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
*/

import {monitorPerformance} from "../utils/monitorPerformance.js";

const maxVowels = function (s, k) {
    const strArray = s.split('');
    const vowels = ['a', 'i', 'u', 'o', 'e'];
    let finalCount = 0;
    for (let i = 0; i < strArray.length; i++) {
        const window = [];
        let count = 0;
        for (let j = 0; j < k; j++) {
            window.push(strArray[i + j])
        }

        for (const element of window) {
            // @ts-ignore
            if (vowels.includes(element)) {
                count++;
            }
        }
        finalCount = Math.max(finalCount, count);
    }

    return finalCount;
};

/**
* @param {string} s
* @param {number} k
* @return {number}
*/
const maxVowels2 = function(s, k) {
    let array = ['a','e','i','o','u']
    let count = 0
    for(let i = 0; i < k; i++) {
        if(array.includes(s[i])) {
            count++
        }
    }
    let max = count
    console.log(max)
    for(let i = k; i < s.length; i++) {
        if(array.includes(s[i])) {
            count++
        }
        if(array.includes(s[i - k])) {
            count--
        }
        max = Math.max(max, count)
    }
    return max
};

monitorPerformance(() => {
    console.log(maxVowels2('leetcode', 3))
}, "for in for")
