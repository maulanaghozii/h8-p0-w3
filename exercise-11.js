function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var curentArithmetic = 0;
    var prefArithmetic   = arr[1] - arr[0];
    for(index = 1; index<arr.length - 1; index++){
        curentArithmetic = arr[index + 1] - arr[index];
        
        if(curentArithmetic === prefArithmetic){
            prefArithmetic = curentArithmetic; 
        } else{
            return false;
        };
    };
    return curentArithmetic === prefArithmetic;
  };
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false