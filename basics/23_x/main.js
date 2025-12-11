const front_back = (str) => {
    if(str.length >=  3){
        let back = str.slice(-3)
        return back + str + back
    }
}

console.log(front_back("muskan"));
