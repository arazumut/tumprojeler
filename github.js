//! yaşıma göre ehliyet alabilir miyim uygulaması

let yaşamyılı = prompt("yaşınızı giriniz:");
if (yaşamyılı > 18) {
  alert("ehliyet alma yaşına sahipsiniz!!, yaşınız:" + yaşamyılı);
}
else {
  alert("maalesef ehliyet alma yaşına sahip değilsiniz, yaşınız:" + yaşamyılı);
}


//!ders ortalaması bulma programı 
let vize1 = Number(prompt("vize1 notunuzu giriniz:"));
let vize2 = Number(prompt("vize2 notunuzu giriniz:"));
let final = Number(prompt("final notunuzu giriniz:"));
let ortalama = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4);
//todo vize1 ve vize2 notunun %30 u yani çarpı 0.3  finalin ise %40 ı yani çarpı 0.4  alınan bir program
if (ortalama > 50) {
  alert("Sınıfı Geçtiniz!!!, Ortalamanız:" + ortalama);
}
else {
  alert("Sınıfta Kaldınız, Ortalamanız:" + ortalama);
}