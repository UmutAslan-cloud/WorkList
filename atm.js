

let hesapA={
    ad:"Umut Aslan",
    hesapNo:"12345678",
    bakiye:18200,
    ekHesap:2500
};

let hesapB= {
    ad:"Nur Kacak",
    hesapNo:"321654987",
    bakiye:2500,
    ekHesap:3200
}

function paraCek(hesap,miktar) {
    console.log(`Merhaba ${hesap.ad}`);

    if (hesap.bakiye>=miktar) {
        console.log("Lutfen Paranizi unutmayin");
    } else {
        let toplam=hesap.bakiye+hesap.ekHesap;
        if (toplam>=miktar) {
            if (confirm("Ek hesabinizi kullanmak istermisiniz")) {
                console.log("Paranizi unutmayin")
                
            } else {
                console.log(`${hesap.hesapNo} nolu hesabinizda ${miktar} bulunmaktadir`);

            } 
        }else {
                console.log("Bakiye yetersiz");
            }
    }
}
paraCek(hesapA,20000);