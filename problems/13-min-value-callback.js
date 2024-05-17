/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(array, callback) {
    let value = array[0]
    
    if (typeof(callback) !== 'function'){
        array.filter(function (acc) {
            if(value < acc){
                value = value
            } else {
                value = acc
            }
        })
    } else if (typeof(callback) === 'function') {
        let result = array.map(function(acc) {
            return callback(acc)
        })
        value = result[0]
        for(let el of result) {
            if(value < el){
                value = value
            } else {
                value = el
            }
        }
    }
    return value
};





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
