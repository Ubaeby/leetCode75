var pivotIndex = function(nums) {
    let beginning = 0;
    let end = 0;
    //The pivot index is found when the left side equals to the right side
    //Then we can determine that "if" it is equal, to return the middle
    for (let i = 0; i < nums.length; i++) {
        beginning += nums[i];
    }

    for (let j = 0; j < nums.length; j++) {
        beginning -= nums[j];
        if (beginning === end) {
            return j;    
        }
        end += nums[j];
    }
    return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]))