// used in Object

const MyObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"

}

for (const key in MyObject) {
    // console.log(`${key} shorcut is for ${MyObject[key]}`);

}

// Used in arrey

const Programming = ["js", "rb", "py", "java", "cpp"]

for (const key of Programming) {
    console.log(key);
    
}