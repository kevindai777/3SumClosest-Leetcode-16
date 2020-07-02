//Objective is similar to '3Sum' except this time we find three integers such that
//the sum is closest to the target. We return the sum of the integers.


let nums = [-1,2,1,-4]
let target = 1


//O(n^2) solution similar to '3Sum'. We don't have to skip duplicates.

nums.sort((a,b) => {
    return a - b
})

let diff = Infinity

for (let i = 0; i < nums.length && diff !== 0; i++) {
    let j = i + 1
    let k = nums.length - 1

    while (j < k) {
        let sum = nums[i] + nums[j] + nums[k]

        //Find the minimum diff
        if (Math.abs(diff) > Math.abs(target - sum)) {
            diff = target - sum
        }

        if (sum < target) {
            j++
        } else {
            k--
        }
    }
}

return target - diff