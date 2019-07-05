function palindrome(kata){
    var kataReverse = '';
    for(index = 0; index < kata.length; index++){
        kataReverse = kata[index]+kataReverse;
    }

    if (kataReverse == kata){
        return true;
    } else{
        return false;
    }
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false