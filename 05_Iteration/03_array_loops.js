// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps (only uniq vlaue)

const map = new Map()
map.set('USA', "United state of America")
map.set('IN', "India")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

// for (const key of map) {
//     console.log(key);
    
// }
for (const [key, vlaue] of map) {
    console.log(key, "=", vlaue);
}

const MyObj = {
    gmae1: 'NFS',
    game2 : 'Spiderman'
}
// for(const[key , vlaue] of MyObj) {
//     console.log(key, "=", vlaue);
// }

