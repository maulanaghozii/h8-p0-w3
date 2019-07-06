function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var curentGeometry = 0;
    var prefGeometry   = arr[1] / arr[0];
    for(index = 1; index<arr.length - 1; index++){
        curentGeometry = arr[index + 1] / arr[index];
        
        if(curentGeometry === prefGeometry){
            prefGeometry = curentGeometry; 
        } else{
            return false;
        };
    };
    return curentGeometry === prefGeometry;
  };
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false