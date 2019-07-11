function groupAnimals(animals) {
    // you can only write your code here!
    // variable charSama untuk menampung nama hewan yang memiliki awal karakter sama
    let charSama = [];
    // variable result untuk menampung hasil dari variable charSama
    let result   = [];
    // data dalam array disortir berdasarkan abjad 
    animals.sort()
    // variable charAwal sebagi penampung character awal pada velue array animals
    let charAwal = '';
    for(i=0; i<animals.length;i++){
      //variable initAwal sebagai pembanding dengan variable charAwal
      let initAwal = animals[i].substr(0,1);
      // bandingkan apabila charAwal dan initAwal tidak sama maka lakukan push ke dalam charSama
      if(charAwal !== initAwal){
        //melakukan perulangan untuk mencari animals dengan awalan sama
        for(j=0; j<animals.length; j++){
          let firstChar = animals[j].substr(0,1);
          //apabila ditemukan initAwal dan firstChar maka lakukan push ke array charSama
          if(initAwal === firstChar){
            charSama.push(animals[j]);
          }
        }
         // jika sudah tidak ada lagi value yang memiliki character awal yang sama maka push array charSama ke dalam result
      result.push(charSama);
      //kosongkan kembali charSama untuk menampung karakter awal yang beda selanjutnya
      charSama = [];
      // kemudian ganti charAwal dengan initAwal
      charAwal = initAwal
      } 
    }
    return result;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]