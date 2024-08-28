abstract class Employee {
    protected name: string;
    protected age: number;
    protected salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    abstract getAnnualBonus(): number;
}

interface Payable {
    pay(): void;
}

class Developer extends Employee implements Payable {
    getAnnualBonus(): number {
        return this.salary * 0.1; 
    }

    pay(): void {
        console.log(`${this.name} отримує зарплату ${this.salary} і бонус ${this.getAnnualBonus()}`);
    }
}

class Manager extends Employee implements Payable {
    getAnnualBonus(): number {
        return this.salary * 0.2;
    }

    pay(): void {
        console.log(`${this.name} отримує зарплату ${this.salary} і бонус ${this.getAnnualBonus()}`);
    }
}

const employees: (Employee & Payable)[] = [
    new Developer("Аліса", 30, 50000),
    new Developer("Богдан", 25, 45000),
    new Manager("Борис", 40, 60000),
    new Manager("Діана", 35, 55000),
];

let totalAnnualBonus = 0;
for (const employee of employees) {
    totalAnnualBonus += employee.getAnnualBonus();
}

console.log(`Загальна річна сума бонусів для всіх співробітників: ${totalAnnualBonus}`);

for (const employee of employees) {
    employee.pay();
}
