const swap = (str) => {

    if (str.length <= 1) return str;

    const part1 = str.at(0);
    const part2 = str.substring(1, str.length - 1);
    const part3 = str.at(-1);

    return part3 + part2 + part1;
}

console.log(swap("muskan"))
console.log(swap(""))
console.log(swap("ram"))
console.log(swap("vineet"))