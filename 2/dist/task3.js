var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = (function () {
    function Car(brand, model, year, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    Car.prototype.getYear = function () {
        return this.year;
    };
    return Car;
}());
var BMW = (function (_super) {
    __extends(BMW, _super);
    function BMW(model, year, color, engineType) {
        var _this = _super.call(this, "BMW", model, year, color) || this;
        _this.engineType = engineType;
        return _this;
    }
    BMW.prototype.displayInfo = function () {
        console.log("Brand: ".concat(this.brand, ", Model: ").concat(this.model, ", Year: ").concat(this.getYear(), ", Color: ").concat(this.color, ", Engine Type: ").concat(this.engineType));
    };
    return BMW;
}(Car));
var Tesla = (function (_super) {
    __extends(Tesla, _super);
    function Tesla(model, year, color, batteryCapacity) {
        var _this = _super.call(this, "Tesla", model, year, color) || this;
        _this.batteryCapacity = batteryCapacity;
        return _this;
    }
    Tesla.prototype.displayInfo = function () {
        console.log("Brand: ".concat(this.brand, ", Model: ").concat(this.model, ", Year: ").concat(this.getYear(), ", Color: ").concat(this.color, ", Battery Capacity: ").concat(this.batteryCapacity, " kWh"));
    };
    return Tesla;
}(Car));
var Audi = (function (_super) {
    __extends(Audi, _super);
    function Audi(model, year, color, quattro) {
        var _this = _super.call(this, "Audi", model, year, color) || this;
        _this.quattro = quattro;
        return _this;
    }
    Audi.prototype.displayInfo = function () {
        console.log("Brand: ".concat(this.brand, ", Model: ").concat(this.model, ", Year: ").concat(this.getYear(), ", Color: ").concat(this.color, ", Quattro: ").concat(this.quattro));
    };
    return Audi;
}(Car));
var bmwX5 = new BMW("X5", 2020, "Black", "V6");
var bmwM3 = new BMW("M3", 2018, "Red", "V8");
var teslaModelS = new Tesla("Model S", 2021, "White", 100);
var teslaModel3 = new Tesla("Model 3", 2022, "Blue", 75);
var audiA4 = new Audi("A4", 2019, "Gray", true);
var audiQ7 = new Audi("Q7", 2020, "Black", true);
bmwX5.displayInfo();
bmwM3.displayInfo();
teslaModelS.displayInfo();
teslaModel3.displayInfo();
audiA4.displayInfo();
audiQ7.displayInfo();
//# sourceMappingURL=task3.js.map