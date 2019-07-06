function pasanganTerbesar(num) {
    // you can only write your code here!
    var biggestValue = 0;
    var currentValue = 0;
    numString = num.toString();

    for(index = 0; index<numString.length; index++){
      currentValue = Number (numString[index]+numString[index+1]);

      if(currentValue > biggestValue){
        biggestValue = currentValue;
      };
    }
    return biggestValue;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99