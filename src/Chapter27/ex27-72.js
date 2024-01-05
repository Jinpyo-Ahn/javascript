// function sum() {
//     var arr = Array.prototype.slice.call(arguments);
//     console.log(arr);
//
//     return arr.reduce(function (pre, cur) {
//         return pre + cur;
//     }, 0);
// }
//
// console.log(sum(1, 2, 3));

// function sum() {
//     const arr = Array.from(arguments);
//     console.log(arr);
//
//     return arr.reduce((pre, cur) => pre + cur, 0);
// }
//
// console.log(sum(1, 2, 3));

function sum() {
    const arr = [...arguments];
    console.log(arr);

    return arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

console.log(sum(1, 2, 3));