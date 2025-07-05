// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    // break
    if (element == 5) {
        console.log("5 is best number");
    }
    // console.log(element);
}

// console.log(element); // does'nt work becouse this is out of the scope

for (let i = 1; i < 10; i++) {
    // console.log(`Outer loop value ${i}`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i + "*" + j + " = " + i * j);
        // console.log(i + "*" + j + "=" + i * j);      //jo dhakhavacha ahe to "" madhi lihate

    }

}
let myArray = ["flach", "batman", "superman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);

}

//  break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log("detecected 5");
        // break
        continue  // this is use in skip for this entire scope
    }
    // console.log(`value of i is ${index}`);
}

