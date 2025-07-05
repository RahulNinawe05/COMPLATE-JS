let Myheros = ["thor", "spider"]

let heroPower = {
    thor: "hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
} 

Object.prototype.rahul = function(){
    console.log('rahul is present in all obeject');
}

Array.prototype.heyrahul = function (){
    console.log("rahul say hello");
}

String.prototype.heystring = function(){
    console.log("this is string");
}

heroPower.rahul()
Myheros.rahul()
Myheros.heyrahul()
// Myheros.heystring()
// // heroPower.heyrahul()