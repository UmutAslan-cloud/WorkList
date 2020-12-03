//forEach
let cars=["BMW","Mercedes","Toyota","Wolkswagen","Seat"];
cars.forEach(function (items) {
    console.log(items)
    
});
/*  //Array with Loops for in for each
 let cars=["BMW","Mercedes","Toyota","Wolkswagen","Seat"];

 for(let i in cars){
     console.log(`index: ${i} model:${cars[i]}`);
 }  */
 //map 
 let number=[2,5,85,6,7,12];
 let num=number.map(function (n) {
     return n*n;
     
 });
 console.log(num);