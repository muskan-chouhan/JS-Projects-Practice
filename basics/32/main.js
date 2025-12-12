function check(str ,char){
        let text = str.slice(1, 4);
        return text.includes(char);
}
console.log(check("muskan","k"));
console.log(check("Console", "e"));