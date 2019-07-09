function targetTerdekat(arr) {
    // you can only write your code here!
    let jarakTerdekat = 0;
    let charO = [];
    let charX = [];

    for (let index = 0; index < arr.length; index++) {
        if(arr[index] === 'o'){
            charO.push(index);
        } else if (arr[index] === 'x') {
            charX.push(index);
        }
    }
    
    for (let i = 0; i < charO.length; i++) {
        for (let j = 0; j < charX.length; j++) {
            if (jarakTerdekat === 0) {
                jarakTerdekat = Math.abs(charO[i] - charX[j]);
            } else {
                if ( (Math.abs(charO[i] - charX[j])) < jarakTerdekat ) {
                    jarakTerdekat = Math.abs(charO[i] - charX[j]);
                }
            }
        }
    }

    return jarakTerdekat;
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2