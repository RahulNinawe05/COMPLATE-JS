const discripter = Object.getOwnPropertyDescriptors(Math, "pi")

// console.log(discripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const Chai = {
    name: "ginger",
    price: 250,
    inAvailabel: true,

    orderChai : function(){
        console.log("Chai nahi bani");
        
    }
    
}

console.log(Object.getOwnPropertyDescriptor(Chai, "name"));

// Object.defineProperty(Chai, 'name', {
//     writable: false,
//     enumerable : false,
//     configurable: true
// })
// console.log(Object.getOwnPropertyDescriptor(Chai, "name"));

for (let [key, valus] of Object.entries(Chai)) {

    if (typeof valus !== 'function') {
        console.log(`${key}: ${valus}`);
    }
}