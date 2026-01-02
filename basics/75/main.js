function replace(num) {
    if (num.length <= 1) {
        return num;
    }

    let a = num[0];
    let b = num[num.length - 1];

    num[0] = b;
    num[num.length - 1] = a;

    return num;
}

console.log(replace([1, 2, 3]));
