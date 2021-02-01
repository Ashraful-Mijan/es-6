class Perant{
    constructor(){
        this.fatherName = "kamil Uddin";
    }
}

class Child extends Perant{
    constructor(name){
        super()
        this.name = name;
    }
    // getFullName(){
    //    return this.name + " " + this.fatherName;
    // }
}

const Name = new Child('sumaiya');
const Name1 = new Child('Muzahid');
console.log(Name);
console.log(Name1);
