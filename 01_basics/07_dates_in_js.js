// Dates

let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(typeof mydate); // object

let mycreateDate= new Date("04-09-2025")
// let mycreateDate= new Date(2025, 3, 7)
// let mycreateDate= new Date(2025, 3, 7,3, 4)
// let mycreateDate= new Date("2025-04-09")
// console.log(mycreateDate.toLocaleDateString());
// console.log(mycreateDate.toLocaleTimeString());
// console.log(mycreateDate.toLocaleString());
// console.log(mycreateDate.toDateString());


let mytimestamp = Date.now()
// console.log(mytimestamp);
// console.log(mycreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
let newDatex = new Date("04-09-2025")
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDatex.getDate());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());
// console.log(newDate.getMonth() + 1 );
// console.log(newDate.getFullYear());


// newDate.toLocaleString('defoult', {
//      weekday:"short",
//      timeZone: 'getTime'
// })
