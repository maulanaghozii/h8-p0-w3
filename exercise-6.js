function angkaPalindrome(num) {
    // you can only write your code here!

    // argumen num meskipun merupakah Palindrome tetap tidak dicetak. oleh karena itu tambahkan 1 angka terlebih dahulu. 
    var countUp = num + 1;


    function isAngkaPalindrome(countUp){
      var numSum = countUp.toString();
      var numReverse = '';
      for(index = 0; index < numSum.length; index++){
        numReverse = numSum[index]+numReverse;
      }
      return numSum === numReverse;
    }
    // function isAngkaPalindrome akan return nilai boolean

    // pengondisian untuk cek hasil function isAngkaPalindrome
    while(true){
      if(isAngkaPalindrome(countUp)){
        return countUp;
      } else{
        countUp += 1;
      }
    }
}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001