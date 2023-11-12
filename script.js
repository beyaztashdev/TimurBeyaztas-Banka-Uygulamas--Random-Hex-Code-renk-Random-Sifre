// ! Banka uygulaması
let bakiye = 1000
let tutar = []

let secim = prompt("İşlem seçiniz:\n1. Bakiye sorgula\n2. Para çek\n3. Para yatır\n4. Çıkış")

switch (secim) {
  case "1":
    console.log("Bakiyeniz: " + bakiye)
    break
  case "2":
    let tutar = Number(prompt("Çekmek istediğiniz tutarı giriniz:"))
    if (tutar > bakiye) {
      console.log("Bakiyeniz yetersiz.")
    } else {
      bakiye -= tutar
      console.log("Bakiyeniz: " + bakiye)
    }
    break
  case "3":
    tutar = Number(prompt("Yatırmak istediğiniz tutarı giriniz:"))
    bakiye += tutar
    console.log("Bakiyeniz: " + bakiye)
    break
  case "4":
    break
  default:
    console.log("Geçersiz işlem.")
    break
}


// ! Random HEX Code renk
// let karakterler = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// function rastgeleHexRenk() {
// 	let renk = ''
// 	for (let i = 0; i < 6; i++) {
// 		renk += karakterler[Math.floor(Math.random() * karakterler.length)]
// 	}
// 	return "#" + renk
// }

// const renk = rastgeleHexRenk()

// console.log(renk)


// ! Random şifre oluşturma
// let karakterler  = [ "a", "b", "c", "ç", "d", "e", "f", "g", "ğ", "h", "ı", "i", "j", "k", "l", "m", "n", "o", "ö", "p", "r", "s", "ş", "t", "u", "ü", "v", "y", "z", "q", "w", "x", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "I", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "Ş", "T", "U", "Ü", "V", "Y", "Z", "Q", "W", "X", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "!", "'", "^", "+", "%", "&", "/", "(", ")", "=", "?", "-", "_", "*", ",", ";", "`", "{", "}", "[", "]", "@", "|", "<", ">", ".", ":", "é", "$","#","£","€", "₺"]

// const uzunluk = Number(prompt('Şifre uzunluğunu giriniz:'))
// const sifre = rastgeleSifreOlustur(uzunluk)

// function rastgeleKarakterSec() {
// 	let karakter = karakterler[Math.floor(Math.random() * karakterler.length)]
// 	return karakter
// }

// function rastgeleSifreOlustur(uzunluk) {
// 	let sifre = ''
// 	for (let i = 0; i < uzunluk; i++) {
// 		sifre += rastgeleKarakterSec()
// 	}
// 	return sifre
// }

// console.log('Şifreniz: ' + sifre)