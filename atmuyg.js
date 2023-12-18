//!atm uygulaması programı
let yenisatırr = "\r\n"
// \r\n elemnti yeni satıra geçiren elemnttir.
let kredisınırı = 100000;
let atmbakiye = 1000;
let yatırmasınırı = 10000
let atmmetin = "1-bakiye görüntüleme" + yenisatırr
  + "2-para çekme" + yenisatırr
  + "3-para yatırma" + yenisatırr
  + "4-kredi çekme" + yenisatırr
  + "5-çıkış" + yenisatırr
  + "ZİRAAT BANKASINA HOŞGELDİNİZ!!" + yenisatırr
  + "lütfen yapmak istediğiniz işlemi seçiniz"

let seçimm = prompt(atmmetin);
switch (seçimm) {
  case "1":
    alert("bakiyeniz : " + atmbakiye);
    break;

  case "2":
    let çekilecektutar = Number(prompt("çekmek istediğiniz tutarı giriniz"))
    if (çekilecektutar < atmbakiye) {
      atmbakiye = atmbakiye - çekilecektutar;
      alert("para çekme işleminiz başarıyla gerçekleşmiştir. kalan bakiye:" + atmbakiye)
    } else {
      alert("yetersiz bakiye!!" + yenisatırr
        + "bakiyeniz:" + atmbakiye + " " + "çekilecek tutar:" + çekilecektutar);
    }
    break;

  case "3":
    let yatırılacaktutar = Number(prompt("lütfen yatırmak istediğiniz tutarı giriniz"))
    if (yatırılacaktutar > yatırmasınırı) {
      alert("yatırılan tutar çok büyük! günlük yatırma sınırı:" + yatırmasınırı)

    } else {
      alert("başarıyla yatırılmıştır")
    }
    atmbakiye = atmbakiye + yatırılacaktutar;
    alert("başarıyla yatırılmıştır! güncel bakiyeniz:" + atmbakiye);
    break;

  case "4":
    let çekilecekkredi = Number(prompt("lütfen çekmek istediğiniz kredi miktarını giriniz"));
    if (çekilecekkredi > kredisınırı) {
      alert("bankamızın şuanda kredi sınırının 100000 lira olduğundan bu işlemi gerçekleştiremiyor,lütfen daha düşük bir miktar talep ediniz");
    }
    else {
      alert("krediniz çekilmiştir!! çekilen tutar :" + çekilecekkredi + "güzel günlerde harcamanız dileğiyle.");
    }
    break;

  case "5":
    alert("başarıyla çıkış işleminiz gerçekleşti")
    break;


  default:
    alert("lütfen geçerli bir işlem seçiniz")
    break;
}

