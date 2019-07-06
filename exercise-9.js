// ==== SOAL ===== //
//Diberikan sebuah function cariMean(arr) 
//yang menerima sebuah array angka. 
//Function akan me-return mean dari array 
//atau deret angka tersebut. Mean adalah 
//angka rata-rata dari deret bilangan tersebut. 
//Contoh, mean atau rata-rata dari [1, 2, 3, 4, 5] adalah 3. 
//Kita perlu kemudian melakukan pembulatan angka 
//dari hasil mean yang didapatkan (pembulatan ke atas).

function cariMean(arr) {
    // you can only write your code here!
    var sum = 0;
    var pembagi = arr.length;
    var result = 0;

    for(index=0; index<pembagi; index++){
        sum = sum + arr[index];
    }
    result = Math.ceil(sum / pembagi);
    return result;
  }
  
  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 3
  console.log(cariMean([7, 7, 7, 7, 7])); // 7