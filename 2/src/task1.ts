interface Animal {
    name: string;              
    habitat: string;  
    sound: string;         
    canFly?: boolean;           
    legs: number;  
    voice(): void;            
    move(): void;              
}

class Cat implements Animal {
    name: string;
    habitat: string;
    sound: string;    
    legs: number;

    constructor(name: string, habitat: string) {
        this.name = name;
        this.habitat = habitat;
        this.legs = 4;
        this.sound="MEOW";
    }

    move() {
        console.log(`${this.name} from ${this.habitat} is running on ${this.legs} legs.`);
    }

    voice(): void {
        console.log(`${this.name} is saying "${this.sound}!"`);
    }
}

class Bird implements Animal {
    name: string;
    habitat: string;
    canFly: boolean;
    legs: number;
    sound: string;  

    constructor(name: string, habitat: string, sound:string, canFly: boolean = true) {
        this.name = name;
        this.habitat = habitat;
        this.canFly = canFly;
        this.legs = 2;
        this.sound=sound;
    }

    move() {
        if (this.canFly) {
            console.log(`${this.name} from ${this.habitat} is flying.`);
        } else {
            console.log(`${this.name} is walking on ${this.legs} legs.`);
        }
    }

    voice(): void {
        if (this.canFly){
            console.log(`${this.name} from ${this.habitat} flies and says "${this.sound}!".`);
        }
        else console.log(`${this.name} from ${this.habitat} is saying "${this.sound}!"`);
    }
}

class Fish implements Animal {
    name: string;
    habitat: string;
    legs: number;
    sound: string;  

    constructor(name: string, habitat: string) {
        this.name = name;
        this.habitat = habitat;
        this.legs = 0;
    }

    move() {
        console.log(`${this.name} from ${this.habitat} is swimming.`);
    }
    voice(): void {
        console.log(`${this.name} is silent`);
    }
}

const myCat = new Cat("Barsik", "House");
myCat.move(); 
myCat.voice();
const myCat2 = new Cat("Murka", "Street");
myCat2.move(); 
myCat2.voice();

const myBird = new Bird("Parrot", "Rainforest", "Eeeeee");
myBird.move(); 
myBird.voice();
const myBird2 = new Bird("Penguin", "Antarctica", "Eeeeek",  false);
myBird2.move(); 
myBird2.voice();

const myFish = new Fish("Goldfish", "Aquarium");
myFish.move(); 
myFish.voice();
const myFish2 = new Fish("Fish", "Aquarium");
myFish2.move(); 
myFish2.voice();
