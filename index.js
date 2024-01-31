// 1.mencari keliling persegi panjang
// Memasukan nilai panjang lebar
// Menghitung rumus: 2*p + 2*L
// Menampilkan hasil

//memasukan nilai panjang,lebar

let panjang = 150;
let lebar = 40;

// Menghitung rumus
let hasil = 2 *panjang + 2 * lebar;

// Menampilkan
console.log("Keliling persegi panjang adalah: "+ hasil)

// 2. Luas Lingkaran

// Tentukan phi dan r
let phi = 3.14;
let r = 10;

let hasill = phi*r*r;

console.log("hasil nya"+ hasill)

let Lp = 64;
let sisi = Math.sqrt(Lp)

let hasilNya = 4* sisi;

console.log (hasilNya)

//syarat umur membuat KTP
// Input
let umur = 18;

// proses/logika
if(umur >= 17){
    result = "Membuat KTP"
} else {
    result ="Belum bisa membuat KTP"
}

//output
console.log(result)

//soal 1

// Input nilai
let PABP = 86;
let MTK = 82;
let DPK = 77;

let Ratarata =(PABP + MTK + DPK / 3)

if(Ratarata >= 80 && Ratarata < 100){
    result ="Grade A"
} else if (Ratarata >= 75 )