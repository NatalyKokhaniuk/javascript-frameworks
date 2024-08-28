var Cat = (function () {
    function Cat(name, habitat) {
        this.name = name;
        this.habitat = habitat;
        this.legs = 4;
        this.sound = "MEOW";
    }
    Cat.prototype.move = function () {
        console.log("".concat(this.name, " from ").concat(this.habitat, " is running on ").concat(this.legs, " legs."));
    };
    Cat.prototype.voice = function () {
        console.log("".concat(this.name, " is saying \"").concat(this.sound, "!\""));
    };
    return Cat;
}());
var Bird = (function () {
    function Bird(name, habitat, sound, canFly) {
        if (canFly === void 0) { canFly = true; }
        this.name = name;
        this.habitat = habitat;
        this.canFly = canFly;
        this.legs = 2;
        this.sound = sound;
    }
    Bird.prototype.move = function () {
        if (this.canFly) {
            console.log("".concat(this.name, " from ").concat(this.habitat, " is flying."));
        }
        else {
            console.log("".concat(this.name, " is walking on ").concat(this.legs, " legs."));
        }
    };
    Bird.prototype.voice = function () {
        if (this.canFly) {
            console.log("".concat(this.name, " from ").concat(this.habitat, " flies and says \"").concat(this.sound, "!\"."));
        }
        else
            console.log("".concat(this.name, " from ").concat(this.habitat, " is saying \"").concat(this.sound, "!\""));
    };
    return Bird;
}());
var Fish = (function () {
    function Fish(name, habitat) {
        this.name = name;
        this.habitat = habitat;
        this.legs = 0;
    }
    Fish.prototype.move = function () {
        console.log("".concat(this.name, " from ").concat(this.habitat, " is swimming."));
    };
    Fish.prototype.voice = function () {
        console.log("".concat(this.name, " is silent"));
    };
    return Fish;
}());
var myCat = new Cat("Barsik", "House");
myCat.move();
myCat.voice();
var myCat2 = new Cat("Murka", "Street");
myCat2.move();
myCat2.voice();
var myBird = new Bird("Parrot", "Rainforest", "Eeeeee");
myBird.move();
myBird.voice();
var myBird2 = new Bird("Penguin", "Antarctica", "Eeeeek", false);
myBird2.move();
myBird2.voice();
var myFish = new Fish("Goldfish", "Aquarium");
myFish.move();
myFish.voice();
var myFish2 = new Fish("Fish", "Aquarium");
myFish2.move();
myFish2.voice();
//# sourceMappingURL=task1.js.map