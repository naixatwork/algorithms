/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    let result = true;
    
    const sortedS = s.split('').sort().join('')
    const sortedT = t.split('').sort().join('')
    
    return sortedS === sortedT;
    
//    const hashedS = new Map()
//    const hashedT = new Map()
//    
//    s.split('').forEach(char => {
//        if (hashedS.has(char)) {
//            hashedS.set(char, hashedS.get(char) + 1)
//        } else {
//            hashedS.set(char, 1)
//        }
//    })
//    
//    t.split('').forEach(char => {
//        if (hashedT.has(char)) {
//            hashedT.set(char, hashedT.get(char) + 1)
//        } else {
//            hashedT.set(char, 1)
//        }
//    })
//    
//    if (!Object.is(hashedS, hashedT)) {
//        result = false;
//    }
    
//    for (const keyS of hashedS.keys()) {
//        if (hashedT.get(keyS) !== hashedS.get(keyS)) {
//            result = false;
//        }
//    }

//    return result
};

//isAnagram("anagram", "nagaram");
console.log(isAnagram("aacc", "ccac"))