
let hak=5;
let tahmin,sayac=0;
let number=Math.floor((Math.random()*10)+1);
console.log(number);

while (hak>0) {
    hak--;
    sayac++;
    tahmin=Number(prompt("Bir sayi giriniz"))
    if (number==tahmin) {
        console.log("Tebrikler");
        console.log(`Puan: ${100-(20)*(sayac-1)}`);
    } else if (number>tahmin){
        console.log("yukari");
    }else{
        console.log("asagi");
    }
    if(hak==0) {
        console.log("Hakkiniz bitti");
    }
}