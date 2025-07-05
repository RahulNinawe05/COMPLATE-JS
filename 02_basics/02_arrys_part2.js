const marvels_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flesh", "batman"]

marvels_heros.push = (dc_heros)

// console.log(marvels_heros);

const allheros = marvels_heros.concat(dc_heros) //   combine karate or merge karate
// console.log(allheros);

const all_new_heros = [...marvels_heros, ...dc_heros]; // ha spread karate 
// console.log(all_new_heros);

const anather_arr = [1, 2, 3, [5, 6, 7], 435, [4, 5, 66, 6, [8, 98, 8, 90, 4, 4,]]]

const real_anther_arr = anather_arr.flat(Infinity) // sarva eatra yete
// console.log(real_anther_arr); 

// console.log(Array.isArray("Rahul"));
// console.log(Array.from("1234567890"));
// console.log(Array.from({name:"Rahul"})); // interesting
// console.log(Array.from({})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));
console.log(Array.of({score1,score2,score3}));


const fruits = []

fruits.push("banana", "Apple", "Mongo", "Apple")
// console.log(fruits);

fruits.length = 10
// console.log(fruits); //[ 'banana', 'Apple', 'Mongo', 'Apple', <6 empty items> ]

