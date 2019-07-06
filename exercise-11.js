function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var curentAritmatika = 0;
    var prefAritmatika   = arr[1] - arr[0];
    for(index = 1; index<arr.length - 1; index++){
        curentAritmatika = arr[index + 1] - arr[index];
        
        if(curentAritmatika === prefAritmatika){
            prefAritmatika = curentAritmatika; 
        } else{
            return false;
        };
    };
    return curentAritmatika === prefAritmatika;
  };
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false