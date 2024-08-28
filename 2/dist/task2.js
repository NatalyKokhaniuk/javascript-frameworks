var Circle = (function () {
    function Circle(radius) {
        this.radius = radius;
        console.log("Круг радіусом " + this.radius);
    }
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    Circle.prototype.scale = function (factor) {
        this.radius *= factor;
    };
    return Circle;
}());
var Rectangle = (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        console.log("Прямокутник висотою " + this.height + " і шириною " + this.width);
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    Rectangle.prototype.scale = function (factor) {
        this.width *= factor;
        this.height *= factor;
    };
    return Rectangle;
}());
var Triangle = (function () {
    function Triangle(sideA, sideB, sideC) {
        if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
            this.sideA = sideA;
            this.sideB = sideB;
            this.sideC = sideC;
            console.log("Трикутник зі сторонами " + this.sideA + ", " + this.sideB + " i " + this.sideC + ".");
        }
        else {
            console.error("Ці сторони не можуть утворити трикутник");
            throw new Error("Ці сторони не можуть утворити трикутник");
        }
    }
    Triangle.prototype.getArea = function () {
        var s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    };
    Triangle.prototype.getPerimeter = function () {
        return this.sideA + this.sideB + this.sideC;
    };
    Triangle.prototype.scale = function (factor) {
        this.sideA *= factor;
        this.sideB *= factor;
        this.sideC *= factor;
    };
    return Triangle;
}());
var circle = new Circle(5);
var circle1 = new Circle(1);
var circle2 = new Circle(4);
var rectangle = new Rectangle(4, 6);
var rectangle1 = new Rectangle(1, 3);
var rectangle2 = new Rectangle(3, 2);
var triangle = new Triangle(3, 4, 5);
var triangle1 = new Triangle(7, 6, 7);
var triangle2 = new Triangle(6, 8, 10);
var shapes = [circle, rectangle, triangle, circle1, rectangle1, triangle1, circle2, rectangle2, triangle2];
var totalArea = 0;
var totalPerimeter = 0;
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
}
console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u043F\u043B\u043E\u0449\u0430 \u0432\u0441\u0456\u0445 \u0444\u0456\u0433\u0443\u0440: ".concat(totalArea));
console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u0432\u0441\u0456\u0445 \u0444\u0456\u0433\u0443\u0440: ".concat(totalPerimeter));
console.log("\u041F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0430 \u043F\u043B\u043E\u0449\u0430 \u043A\u043E\u043B\u0430: ".concat(circle.getArea()));
circle.scale(2);
console.log("\u041F\u043B\u043E\u0449\u0430 \u043A\u043E\u043B\u0430 \u043F\u0456\u0441\u043B\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0443\u0432\u0430\u043D\u043D\u044F: ".concat(circle.getArea()));
console.log("\u041F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0438\u0439 \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043F\u0440\u044F\u043C\u043E\u043A\u0443\u0442\u043D\u0438\u043A\u0430: ".concat(rectangle1.getPerimeter()));
rectangle1.scale(0.25);
console.log("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043F\u0440\u044F\u043C\u043E\u043A\u0443\u0442\u043D\u0438\u043A\u0430 \u043F\u0456\u0441\u043B\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0443\u0432\u0430\u043D\u043D\u044F: ".concat(rectangle1.getPerimeter()));
console.log("\u041F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0430 \u043F\u043B\u043E\u0449\u0430 \u0442\u0440\u0438\u043A\u0443\u0442\u043D\u0438\u043A\u0430: ".concat(triangle2.getArea()));
triangle2.scale(3);
console.log("\u041F\u043B\u043E\u0449\u0430 \u0442\u0440\u0438\u043A\u0443\u0442\u043D\u0438\u043A\u0430 \u043F\u0456\u0441\u043B\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0443\u0432\u0430\u043D\u043D\u044F: ".concat(triangle2.getArea()));
console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u043F\u043B\u043E\u0449\u0430 \u0432\u0441\u0456\u0445 \u0444\u0456\u0433\u0443\u0440: ".concat(totalArea));
console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u0432\u0441\u0456\u0445 \u0444\u0456\u0433\u0443\u0440: ".concat(totalPerimeter));
//# sourceMappingURL=task2.js.map