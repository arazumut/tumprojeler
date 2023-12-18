// Birinci sayıyı alma
var num1 = prompt("İlk sayıyı giriniz");

// İkinci sayıyı alma
var num2 = prompt("İkinci sayıyı giriniz");

// İşlem türünü alma
var operation = prompt("Toplama için '+', çıkarma için '-', çarpma için '*', bölme için '/' giriniz");

// Sonucu hesaplama
var result;

switch (operation) {
 case '+':
    result = parseFloat(num1) + parseFloat(num2);
    break;
 case '-':
    result = parseFloat(num1) - parseFloat(num2);
    break;
 case '*':
    result = parseFloat(num1) * parseFloat(num2);
    break;
 case '/':
    if (parseFloat(num2) == 0) {
      alert("Sıfıra bölünemez!");
      break;
    } else {
      result = parseFloat(num1) / parseFloat(num2);
      break;
    }
 default:
    alert("Geçersiz işlem!");
}

// Sonucu gösterme
alert("Sonuç: " + result);