interface Course {
    name: string;
    duration: number; 
    students: string[]; 
}

class OnlineCourse implements Course {
    name: string;
    duration: number;
    students: string[];

    constructor(name: string, duration: number) {
        this.name = name;
        this.duration = duration;
        this.students = [];
    }

    registerStudent(student: string): void {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log(`${student} зареєстрований на курс ${this.name}.`);
        } else {
            console.log(`${student} вже зареєстрований на курс ${this.name}.`);
        }
    }

    isStudentRegistered(student: string): boolean {
        let res:boolean=false;
        for (const st in this.students)
        {
            if(st==student) {res=true;break;}
        }
        return res;
    }
}

class CourseManager {
    private courses: Course[];

    constructor() {
        this.courses = [];
    }

    addCourse(course: Course): void {
        this.courses.push(course);
        console.log(`Курс ${course.name} додано.`);
    }

    removeCourse(courseName: string): void {
        this.courses = this.courses.filter(course => course.name !== courseName);
        console.log(`Курс ${courseName} видалено.`);
    }

    findCourse(courseName: string): Course | undefined {
        for (let i=0;i<this.courses.length;i++)
            {
                if(courseName==this.courses[i].name) return this.courses[i];
            }
            console.log("Немає курсу "+courseName);
        return null;
    }

    listCourses(): void {
        if (this.courses.length === 0) {
            console.log("Немає доступних курсів.");
        } else {
            this.courses.forEach(course => {
                console.log(`Курс: ${course.name}, Тривалість: ${course.duration} годин`);
                console.log("Зареєстровані студенти:", course.students.join(", ") || "Немає студентів");
            });
        }
    }
}

const course1 = new OnlineCourse("TypeScript Basics", 10);
const course2 = new OnlineCourse("Advanced JavaScript", 15);
const course3 = new OnlineCourse("Web Development", 20);

const courseManager = new CourseManager();

courseManager.addCourse(course1);
courseManager.addCourse(course2);
courseManager.addCourse(course3);

course1.registerStudent("Alice");
course1.registerStudent("Bob");
course2.registerStudent("Charlie");
course3.registerStudent("Alice");
course3.registerStudent("Eve");

console.log(course1.isStudentRegistered("Alice")); 
console.log(course2.isStudentRegistered("Eve"));   

courseManager.listCourses();

courseManager.removeCourse("Advanced JavaScript");

courseManager.listCourses();