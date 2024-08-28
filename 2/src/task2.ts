interface Shape {
    getArea(): number;
    getPerimeter(): number;
    scale(factor: number): void;
}
class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
        console.log("Круг радіусом "+this.radius);
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    scale(factor: number): void {
        this.radius *= factor;
    }
}
class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        console.log("Прямокутник висотою "+this.height+" і шириною "+this.width);
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }

    scale(factor: number): void {
        this.width *= factor;
        this.height *= factor;
    }
}
class Triangle implements Shape {
    sideA: number;
    sideB: number;
    sideC: number;
    constructor(sideA: number, sideB: number, sideC: number) {
        if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
            this.sideA = sideA;
            this.sideB = sideB;
            this.sideC = sideC;
            console.log("Трикутник зі сторонами "+this.sideA +", "+this.sideB+" i "+this.sideC+".");
        } else {
            console.error("Ці сторони не можуть утворити трикутник");
            throw new Error("Ці сторони не можуть утворити трикутник");
        }
    }

    getArea(): number {
        const s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }

    getPerimeter(): number {
        return this.sideA + this.sideB + this.sideC;
    }

    scale(factor: number): void {
        this.sideA *= factor;
        this.sideB *= factor;
        this.sideC *= factor;
    }
}

const circle = new Circle(5);
const circle1 = new Circle(1);
const circle2 = new Circle(4);
const rectangle = new Rectangle(4, 6);
const rectangle1 = new Rectangle(1, 3);
const rectangle2 = new Rectangle(3, 2);
const triangle = new Triangle(3, 4, 5);
const triangle1 = new Triangle(7, 6, 7);
const triangle2 = new Triangle(6, 8, 10);


const shapes: Shape[] = [circle, rectangle, triangle, circle1, rectangle1, triangle1, circle2, rectangle2, triangle2];


let totalArea = 0;
let totalPerimeter = 0;

for (const shape of shapes) {
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
}

console.log(`Загальна площа всіх фігур: ${totalArea}`);
console.log(`Загальний периметр всіх фігур: ${totalPerimeter}`);
console.log(`Початкова площа кола: ${circle.getArea()}`);
circle.scale(2);
console.log(`Площа кола після масштабування: ${circle.getArea()}`);
console.log(`Початковий периметр прямокутника: ${rectangle1.getPerimeter()}`);
rectangle1.scale(0.25);
console.log(`Периметр прямокутника після масштабування: ${rectangle1.getPerimeter()}`);
console.log(`Початкова площа трикутника: ${triangle2.getArea()}`);
triangle2.scale(3);
console.log(`Площа трикутника після масштабування: ${triangle2.getArea()}`);
console.log(`Загальна площа всіх фігур: ${totalArea}`);
console.log(`Загальний периметр всіх фігур: ${totalPerimeter}`);
