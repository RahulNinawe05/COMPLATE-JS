// singleton 

// const tinderUser = new Object()  // this is singleton
const tinderUser = {}  // this is NON-singleton

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedin = false

// console.log(tinderUser);

// practice

const usernamee = {}
usernamee.name = "Rahul"
usernamee.preparation = "12th preparation"
usernamee.branch = "Ece"

console.log(usernamee);
usernamee.name = "ninwarahul"
// console.log(usernamee);

// ******
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        Username: {
            firstname: "Rahul",
            lastname: "Ninawe",
        }
    }
}

// console.log(regularUser.fullname.Username.firstname.lastname); // undefined
// console.log(regularUser.fullname.Username.firstname);  // Rahul
// console.log(regularUser.fullname.Username.lastname);  // Ninawe


const obj1 = { 1: "a", 2: "B" }
const obj2 = { 3: "a", 4: "B" }
const obj4 = { 5: "a", 6: "B" }

/*
const obj3 = obj1.flat(Infinity)  // doen't Apply flat in object 
*/
// const obj3 = {obj1 , obj2}   //{ obj1: { '1': 'a', '2': 'B' }, obj2: { '3': 'a', '4': 'B' } }
// const obj3 = Object.assign({},obj1, obj2,obj4)  //{ '1': 'a', '2': 'B', '3': 'a', '4': 'B', '5': 'a', '6': 'B' }

const obj3 = { ...obj1, ...obj2, ...obj4 }        //{ '1': 'a', '2': 'B', '3': 'a', '4': 'B', '5': 'a', '6': 'B' }

// console.log(obj3);


const Users = [
    {
        id: 1,
        email: "Ra@123.gmail.com"
    },
    {
        id: 2,
        email: "Ra@153282323.google.com"
    },
    {
        id: 3,
        email: "Raa@123.facebook.com"
    }
]

const yo = Users[1].email
const ho = Users[2].id
// console.log(`this is email:= ${yo}`);
// console.log(`this is id := ${ho}`);
// console.log(Users[2]);

// practice

const notion = [
    {
        name: "Rahul",
        preparation: "11th",
    },
    {
        name: "rajiv",
        preparation: "Jee"
    },
    {
        name: "rakish",
        preparation: "Jee-Adavance"
    },
    {
        name: "damu",
        preparation: "Neet"
    }
]
const no = notion[2].preparation. name
// console.log(no);

// ******

// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // arrys ke arrys

// console.log(tinderUser.hasOwnproperty('isLoggedin'));        //hasOwnproperty  // ❌ incorrect (lowercase 'p')

// console.log(tinderUser.constructor('isLoggedin'));  //[String: 'isLoggedin']
// console.log(tinderUser.isPrototypeOf('isLoggedin'));  //false
// console.log(tinderUser.propertyIsEnumerable('isLoggedin'));  //True
// console.log(tinderUser.toLocaleString('isLoggedin'));  //[object Object]

/*

Line	                                    Meaning	                                      Useful?
hasOwnProperty()	            Checks if a key exists directly	                        ✅ Yes
constructor()	                Returns constructor (used wrongly here)                 ❌ Not useful
isPrototypeOf()	                Checks prototype chain (used wrongly here)	            ❌ Not useful
propertyIsEnumerable()	        Checks if property can be looped	                    ✅ Yes
toLocaleString()	            Gives string version (not useful here)	                ❌ Not useful

*/

/**************************************new********************************************************/

const course = {
    coursename: "js in Hindi",
    price: "999",
    courseInstrusture: "Rahul"
}

// course.courseInstrusture // old 

const { courseInstrusture: instructore, coursename, price } = course
// console.log(instructore,coursename, price);

// {
//     "name": "rahul",
//     "coursename" : "js in HIndi",
//     "price" : "free"
// }

// [
//     {},
//     {},
//     {},
// ]