// /////////fetch('https://something.com').then().catch().finally()
// // ////// resolve is directily connected is .then
// ///////// and reject is directly connected is . catch
// // Do an async task
// // DB calls cryptogtraphy networsetk
// // resolve() // this is import line to connect this .then
// // paramiters me data pass karana hii in line no.33 this is object "{}"
// // user me store karana hii

const promiseOne = new Promise(function (resolve, reject) {
    // Do an asyne Task
    // DB (data base) calls, creptography , network 
    setTimeout(function () {
        console.log("Asyne Task is Complate");
        resolve()
    }, 1000)    // this is depend upon timer 
})
promiseOne.then(function () {
    console.log("promise Consume");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Asyne Task 2 is complte ");
        resolve()
    }, 5000) // this is depend upon timer 
}).then(function () {
    console.log("pomise 2 is Consume");
})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ StudentID: 101, Name: "Frhan Qureshi", Age: 20, Course: "B.tech", Email: " somthingxyz.com" })
    }, 1000)
})
promiseThree.then(function (user) {
    console.log(user);
})


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ Name: "Raju Rastogi", StudentID: 249 })
        } else (
            reject("somthing went wrong")
        )
    }, 1000)
})

// // promiseFour.then(function(){
// //     console.log("resolve");
// // }).catch(function(){
// //     console.log("reject");
// // })

// // chaining 
promiseFour.then((user) => {
    console.log(user);
    return user.Name
}).then(function (username) { // this is connect to upper .then
    console.log(`This is name is : ${username}`);
}).catch(function (error) {
    console.log(error); // error handal it 
})
.finally(() => console.log("Finaly, resolve OR rejected can you explane me "))


const promisefive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ Name: "Ranchoddas Chaachad", StudentID: 248 })
        } else (
            reject(`ERROR: Js went wrong`)
        )
    }, 1000)
})

async function Consumepromisefive() {
    try {
        const responce = await promisefive
        console.log(responce);
    } catch (error) {
        console.log(error); // error handal it 
    }
}
Consumepromisefive()


// this is pending seutuiation
// async function getAllUsers() {
//     const responce = await fetch(' https://emojihub.yurace.pro/api/random')
//     const data = responce.json()
//     console.log(data);  
// }
// getAllUsers()

// async function getAllUsers() {
//     try {
//         const responce = await fetch(' https://emojihub.yurace.pro/api/random')       
//         const data = responce.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }
// getAllUsers()


fetch('https://emojihub.yurace.pro/api/random')
    .then((Response) => {
        return Response.json()
    }).then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })