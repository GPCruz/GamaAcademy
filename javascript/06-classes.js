/** /
class MyClass{
    constructor(){
        metodo01(){
            // code...
        }
        metodo02(){
            // code...
        }
    }
}

const myConst = class MyClass{}

// ou

const MyConst2 = class {}

// ou

function MakeClass(){
    return class{}
}

/** /


class Dog{
    constructor( name ){
        this._name = name
    }
}

const Pet = new Dog('Nina')

console.log(Pet)
/*
const Belinha = new Dog()

console.log(Belinha)

/**/

nomeDoMetodo(){
    // codigo
    return
}

get nomeDoMetodo( name ){
    return this.name
}

set nomeDoMetodo( name ){
    this.name
}
