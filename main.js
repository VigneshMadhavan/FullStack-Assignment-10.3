
class Dog{

   
    /*
    Constructor
    Description: To constructor a Dog of having name
    Arguments: $name
    Argument Type: $name is string
    */
    constructor(name){ 

        this._name=name;      
        
    }

    /*
    Method Name:speak
    Description: To print WOOF
    Arguments: Null
    Argument Type: NA 
    Return: NA
    Return Type:NA
    */
   
    speak(){

        console.log(`WOOF..WOOF..my name is ${this._name}`);

    }
    

}

class Labrador extends Dog{
    constructor(name,color,breedWeight){ 

        super(name);

        this._color=color;
        this._breedWeight=breedWeight;
    }

    speak(){

        console.log(`WOOF..WOOF...I am ${this._color} color Labrador, breed weight is ${this._breedWeight} Kg and my name is ${this._name}`);

    }
}

let streetDog=new Dog("streetDog");
let petDog=new Labrador("puppy","brown",10);

//call speak method
streetDog.speak();
petDog.speak();

