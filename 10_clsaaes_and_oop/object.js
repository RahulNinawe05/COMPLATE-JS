function multilyby5(num) {
    return num + 5
}

multilyby5.power = 2
console.log(multilyby5(5));
console.log(multilyby5.power);
console.log(multilyby5.prototype);

function creatuser(userName, score) {
    this.userName = userName
    this.score = score
}

creatuser.prototype.increment = function () {
    console.log(this.score+1);
}
creatuser.prototype.printme = function () {
    console.log(`price is ${this.score}`);
}
const chai = new creatuser("chai", 25)
const tea = new creatuser("tea", 259)

chai.printme()
tea.increment()