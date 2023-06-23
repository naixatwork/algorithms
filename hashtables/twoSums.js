
/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSum = function(nums, target) {
    const result = [];
    const hashed = new Map();
    
    nums.forEach((num, index) => {
        if (hashed.has(target - num)) {
            result.push(index, hashed.get(target - num))
        } else {
            hashed.set(num, index);
        }
        
        console.log(hashed)
    })
    
    return result;
};

console.log(twoSum([2,7,11,15], 9))