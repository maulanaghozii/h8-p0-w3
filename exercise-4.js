var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
    input.splice(1,2,'Roman Almasyah Elsharawy','Provinsi Bandar Lampung');
    input.splice(4,1,'Pria', 'SMA International Metro');

    // Melakukan pemisahan antara tanggal, bulan dan tahun
    var date     = input[3].split('/');

    // membuat variable tanggal baru supaya tidak mengganggu array pada variable date
    var newDate  = date.slice();
    // melakukan sortir dari angka terbesar ke angka terkecil
    newDate.sort(function(value1, value2) { return Number(value1) < Number(value2) });
    // membuat string kosong yg akan diisi sebagai nama bulan
    var month    = '';
    // melakukan penggabungan pada array tanggal menjadi string dengan pemisah '-'
    var joinDate = date.join('-');
    // melakukan pembatasan jumlah karakter pada nama maksimal 15 karakter
    var validName = input[1].slice(0,15);
    
    // melakukan pengondisian pada bulan
    switch(date[1]){
        case '01' : { month = 'Januari'; break;}
        case '02' : { month = 'Februari'; break;}
        case '03' : { month = 'Maret'; break;}
        case '04' : { month = 'April'; break;}
        case '05' : { month = 'Mei'; break;}
        case '06' : { month = 'Juni'; break;}
        case '07' : { month = 'Juli'; break;}
        case '08' : { month = 'Agustus'; break;}
        case '09' : { month = 'September'; break;}
        case '10' : { month = 'Oktober'; break;}
        case '11' : { month = 'November'; break;}
        case '12' : { month = 'Desember'; break;}
        default: {month = 'invalid bulan'}
    }
    console.log(input);
    console.log(month);
    console.log(newDate);
    console.log(joinDate);
    console.log(validName);
}

dataHandling2(input);
