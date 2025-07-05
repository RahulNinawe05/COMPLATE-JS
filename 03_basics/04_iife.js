// Immediately Invoked Function Expression (IIFE)

(function chai() {
    // name IIFE
    console.log(`DB CONNECTED`);
})();   // DETA BASE CONNECTE KARANE KE LIYE ";" USE KIYA HII
// chai() //This is not use to function becousse this is not function this is object.

((name) => {
    // unname IIFE
    console.log(`DB CONNECTED to ${name}`);
})("Rahul")
