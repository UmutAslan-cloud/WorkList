
let hak=5;
let tahmin;
let number=Math.floor((Math.random()*10)+1);
console.log(number);

while (hak>0) {
    hak--;
    tahmin=Number(prompt("Bir sayi giriniz"))
    if (number==tahmin) {
        console.log("Tebrikler");
    } else if (number>tahmin){
        console.log("yukari")
    }else{
        console.log("asagi")
    }
    if(hak==0) {
        console.log("Hakkiniz bitti");
    }
}