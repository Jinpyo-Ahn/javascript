const arrayLike = {
    0:1,
    1:2,
    2:3,
    length: 3
};

for (let i = 0; i< arrayLike.length; i++) {
    console.log(arrayLike[i]);
}

for (const item of Array.from(arrayLike)) {
    console.log(item);
}

const arr = Array.from(arrayLike);
console.log(arr);