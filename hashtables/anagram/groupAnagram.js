var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let result = true;
    const hashedS = new Map()
    const hashedT = new Map()

    s.split('').forEach(char => {
        if (hashedS.has(char)) {
            hashedS.set(char, hashedS.get(char) + 1)
        } else {
            hashedS.set(char, 1)
        }
    })

    t.split('').forEach(char => {
        if (hashedT.has(char)) {
            hashedT.set(char, hashedT.get(char) + 1)
        } else {
            hashedT.set(char, 1)
        }
    })

    for (const keyS of hashedS.keys()) {
        if (hashedT.get(keyS) !== hashedS.get(keyS)) {
            result = false;
        }
    }

    return result
};


/**
* @param {string[]} strs
* @return {string[][]}
*/
var groupAnagrams = function(strs) {
    const prohibiten = [];
    const hashed = new Map();
    
    for (let i = 0; i <= strs.length; i++) {
        if (!prohibiten.includes(strs[i]))
            hashed.set(strs[i], [])
        for (let j = i; j < strs.length; j++) {
            if (isAnagram(strs[i], strs[j])) {
                prohibiten.push(strs[j])
                hashed.get(strs[i])?.push(strs[j]);
//                result.push([strs[i], strs[j]])
            }
        }
    }
    
    console.log(hashed)
    
    return [...hashed.values()].filter(grouped => grouped.length > 0);
};
//console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams(["",""]))