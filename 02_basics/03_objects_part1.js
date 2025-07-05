// singleton 
// Object.create

// object literals
const musym = Symbol("key1")

const JsUser = {
    name: "Rahul",
    "full name": "Rahul Ninawe",
    [musym]: "mykey1",
    age: 20,
    location: "Nagpur",
    email: "rahulninawe@gmail.com",
    lastLoginDays: ["mon", "sat", "tue"],
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[musym]);
// console.log(typeof JsUser[musym]);

JsUser.email = "ninawerahul123@gmil.com"
// Object.freeze(JsUser) // stop houn jate
JsUser.email = "Rahulmicrosoft.com"
// console.log(JsUser);

JsUser.greeting = function () {
    // console.log("hellw js user");
}
// console.log(JsUser.greeting());
JsUser.location
// console.log(JsUser.location, JsUser.name, JsUser.email);



JsUser.greetingTwo = function () {
    // console.log("hellw js user", `${this.name}`);
}
// console.log(JsUser.greetingTwo());


// This is Possible
const rahul = {
    "id": "694038",
    "gen": "Troglodytes",
    "sp": "troglodytes",
    "ssp": "",
    "grp": "birds",
    "en": "Eurasian Wren",
    "rec": "Jacobo Ramil MIllarengo",
    "cnt": "Spain",
    "loc": "Sisalde, Ames, A Coru a, Galicia",
    "lat": "42.8373",
    "lon": "-8.652"
}
// console.log(rahul.rec);
// console.log(rahul.sp);
// console.log(rahul.cnt);
// const go = rahul.lon
// console.log(go);
// // this is possible
// console.log(rahul.lon);

// rahul.loc = "ninawerahul234@gmail.ocm"
// console.log(rahul);
// rahul.sp = "passwore: 3923700"
// console.log(rahul);
// rahul.ssp = "this is ssp ";
// console.log(rahul.ssp = "this is  not ssp ");

// rahul.rajiv = function(){
//     console.log("hellw js user");
// }

// console.log(rajiv);

