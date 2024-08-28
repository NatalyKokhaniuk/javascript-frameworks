abstract class Car {
    protected brand: string;
    protected model: string;
    private year: number;
    public color: string;

    constructor(brand: string, model: string, year: number, color: string) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    
    abstract displayInfo(): void;

    
    protected getYear(): number {
        return this.year;
    }
}
class BMW extends Car {
    private engineType: string; 

    constructor(model: string, year: number, color: string, engineType: string) {
        super("BMW", model, year, color); 
        this.engineType = engineType;
    }

    displayInfo(): void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.getYear()}, Color: ${this.color}, Engine Type: ${this.engineType}`);
    }
}
class Tesla extends Car {
    private batteryCapacity: number; 

    constructor(model: string, year: number, color: string, batteryCapacity: number) {
        super("Tesla", model, year, color); 
        this.batteryCapacity = batteryCapacity;
    }

    displayInfo(): void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.getYear()}, Color: ${this.color}, Battery Capacity: ${this.batteryCapacity} kWh`);
    }
}
class Audi extends Car {
    private quattro: boolean; 

    constructor(model: string, year: number, color: string, quattro: boolean) {
        super("Audi", model, year, color); 
        this.quattro = quattro;
    }

    displayInfo(): void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.getYear()}, Color: ${this.color}, Quattro: ${this.quattro}`);
    }
}


const bmwX5 = new BMW("X5", 2020, "Black", "V6");
const bmwM3 = new BMW("M3", 2018, "Red", "V8");


const teslaModelS = new Tesla("Model S", 2021, "White", 100);
const teslaModel3 = new Tesla("Model 3", 2022, "Blue", 75);


const audiA4 = new Audi("A4", 2019, "Gray", true);
const audiQ7 = new Audi("Q7", 2020, "Black", true);


bmwX5.displayInfo();
bmwM3.displayInfo();

teslaModelS.displayInfo();
teslaModel3.displayInfo();

audiA4.displayInfo();
audiQ7.displayInfo();
