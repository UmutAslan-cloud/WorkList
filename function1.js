

function route(t,V) {
    let x = t*V;
    return x;
    
}

let find=route(5,65);
console.log(find)

function ageCal(birthDay) {
    return 2020-birthDay;
}

let ageAslan=ageCal(1995);
let ageNol=ageCal(2019);

console.log(ageAslan);
console.log(ageNol);

function Retire(birthDay,Name) {
    let age=ageCal(birthDay);
    let retire=65-age;

    if(retire>0){
        console.log(`Mr&Ms ${Name} Emekli Olmaniza ${retire} yil kaldi.`);
    } else{
        console.log("Emeklisiniz");
    }
}
Retire(1995,"Ali Riza");
