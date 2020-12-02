
let yaricap/*r*/=135;

function circleSquad(yaricap) {
    let cevre=parseInt(2*Math.PI*yaricap);
    console.log(cevre);
    let alan=parseInt(Math.PI*yaricap**2);
    console.log(alan);
}

circleSquad(yaricap);

/* parseInt=Tam sayiya yuvarlama */

let vize=99;
let final=51;

function result(vize,final) {
    let not=parseInt(vize*0.4+final*0.6);
    if (not>45) {
        console.log("Bestanden");
    } else {
        console.log("Nicht Bestanden");
    }
}

result(vize,final);