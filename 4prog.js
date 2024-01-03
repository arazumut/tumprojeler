//!çarpım tablosu programı
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + "x" + j + "=" + (i * j));
    }
    console.log("----------------------------------");
}



//!asal sayı bulma programı

//todo math.floor buçuklu bir sayı girildiğinde onu tam sayıya yuvarlar


let sayıseç = Number(prompt("lütfen sorgulamak istediğiniz sayıyı giriniz"));
let sonuc = true
for (let s = 2; s <= Math.floor(sayıseç / 2); s++) {
    if (sayıseç % s == 0) {
        //eğer seçtiğimiz sayı 1 le 10 arasındaki tüm sayılardan birine bölümünden kalan 0 sa sayı asal değildir!!
        alert(sayıseç + " sayısı asal değildir");
        sonuc = false;
    } else {
        alert(sayıseç + " sayısı asaldır");
        break;
    }
}



//!  (x!=?) faktoriyel hesaplama programı

let faksayı = Number(prompt("lütfen faktoriyelini hesaplamak istediğiniz sayıyı giriniz"));
//yani sayı 5 girilirse 5*4*3*2*1 şeklinde çarpıyo
let çarpım = 1; //?çarpımı 1 den başlattık(girilen sayıya kadar.)
for (let d = 1; d <= faksayı; d++) {
    çarpım = çarpım * d;
    //todo d değişkenimiz seçtiğimiz sayıya kadar yükselip sonra durur.
}
alert("sonuç:" + çarpım)


//! seçilen sayı armstrong sayısı mı? programı
//?armstrong=seçilen sayınin rakamlarının küpünün toplamı aynı sayıyı veriyorsa bu sayı armstrong sayısıdır  
//153= 1*1*1 + 5*5*5 + 3*3*3=1+125+27=153 //todo 153 sayısı armstrongudur mesela
let toplammm = 0;
//todo çünkü aşağıda kullandıımız charAt ifadesi 0 dan başlayan bir indextir
let armsayı = prompt("armstrong mu diye merak ettiğiniz sayıyı giriniz");

//* indexlerde işlemler 0 dan başlar..(charAt)

for (let e = 0; e < armsayısayı.lenght; e++) {
    // lenght ifadesi sayının uzunluğu ile ilgilidir.
    let rakam = armsayısayı.charAt(e)
    //todo charat elementi; bir sayı girildeiğinde bunu indexler yani 153 sayısının 0. index i 1 dir 1. indexi 5 tir...
    toplammm = rakam * rakam * rakam
    //todo yani sayı kaç basamaklı olırsa olsun tek tek her basamagın küpünü almasını sağladık.
}
if (Number(armsayı) == toplammm) {
    alert("bu sayı armstrong sayısıdır");
} else {
    alert("bu sayı armstrong sayısı değildir")
}