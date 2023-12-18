//!tyt puan hesaplama programı

let türkçedogru, türkçeyanlış = 0;
let matematikdogru, matematikyanlış = 0;
let sosyaldoğru, sosyalyanlış = 0;
let fendoğru, fenyanlış = 0;
let puan = 0;
let okulpuanı = 0;

let yenisatir = "\r\n";
let mesaj = "tyt puan hesaplama programına hoşgeldiniz!" + yenisatir
  + "1-puan hesapla" + yenisatir
  + "2-çıkış yap";
let seçim = prompt(mesaj);
switch (seçim) {
  case "1":

    okulpuanı = Number(prompt("okul puanınızı giriniz"));
    türkçedogru = Number(prompt("türkçe doğru saynızı giriniz"));
    türkçeyanlış = Number(prompt("türkçe yanlış saynızı giriniz"));

    matematikdogru = Number(prompt("matematik doğru sayınızı giriniz"));
    matematikyanlış = Number(prompt("matematik yanlış sayınızı girniniz"));

    sosyaldoğru = Number(prompt("sosyal doğru sayınızı giriniz"));
    sosyalyanlış = Number(prompt("sosyal yanlış sayınızı giriniz"));

    fendoğru = Number(prompt("fen doğru sayınızı giriniz"));
    fenyanlış = Number(prompt("fen yanlış sayınızı giriniz"));

    let doğrunet = türkçedogru + sosyaldoğru + matematikdogru + fendoğru;
    let yanlışnet = türkçeyanlış + sosyalyanlış + matematikyanlış + fenyanlış;
    let kalannet = doğrunet - (yanlışnet / 4); //todo 4 yanlış 1 doğruyu götürme mevzusu
    puan = (kalannet * 4) + 100 + okulpuanı;//todo herbir soru 4 puan o yüzden *4 kullandım. 100 puan osym direkt veriyor +okuldan aldığım puan
    alert("tyt puan hesaplama başarıyla gerçekleşmiştir! tyt puanınız:" + puan)
    break;

  case "2":
    alert("programdan çıkış yapıldı!");
    break;

  default:
    alert("lütfen 1 veya 2 ye basın");
    break;
}

