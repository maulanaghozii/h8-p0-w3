function balikString(str){
    arr = [];
    for(let index = 0; index < str.length; index++){
        arr = str[index] + arr;
    }
    return arr;
}

console.log(balikString('Hello World'));
console.log(balikString('Hello Function'));
console.log(balikString('Hacktiv8'));
