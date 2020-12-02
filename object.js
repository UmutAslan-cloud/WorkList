let person = {
    firstName:"Umut",
    lastName:"Aslan",
    age:35,
    address:"Suisse",

}


val=person.firstName;
val=person.lastName;

console.log(val);

let list=[
    {firstName:"Umut",lastName:"Yoruk",age:32},
    {firstName:"Ibrahim",lastName:"Yoruk",age:43},
    {firstName:"Numan",lastName:"Yoruk",age:18},
    {firstName:"Caner",lastName:"Yoruk",age:21}
]
for (let i = 0; i < list.length; i++) {
    console.log(list[i].firstName);
    
}