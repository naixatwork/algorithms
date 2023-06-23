/**
* @param {string[]} strs
* @return {string[][]}
*/
var groupAnagrams = function(strs) {
    const hashed = new Map();
    
    strs.forEach(str => {
        const sorted = str.split('').sort().join('');
        if (hashed.has(sorted)) {
            hashed.get(sorted).push(str);
        } else {
            hashed.set(sorted, [str]);
        }
    })
    
    console.log(hashed)
    
    return [...hashed.values()].filter(grouped => grouped.length > 0);
};
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
//console.log(groupAnagrams(["",""]))