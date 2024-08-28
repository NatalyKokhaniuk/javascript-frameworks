var OnlineCourse = (function () {
    function OnlineCourse(name, duration) {
        this.name = name;
        this.duration = duration;
        this.students = [];
    }
    OnlineCourse.prototype.registerStudent = function (student) {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log("".concat(student, " \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0438\u0439 \u043D\u0430 \u043A\u0443\u0440\u0441 ").concat(this.name, "."));
        }
        else {
            console.log("".concat(student, " \u0432\u0436\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0438\u0439 \u043D\u0430 \u043A\u0443\u0440\u0441 ").concat(this.name, "."));
        }
    };
    OnlineCourse.prototype.isStudentRegistered = function (student) {
        var res = false;
        for (var st in this.students) {
            if (st == student) {
                res = true;
                break;
            }
        }
        return res;
    };
    return OnlineCourse;
}());
var CourseManager = (function () {
    function CourseManager() {
        this.courses = [];
    }
    CourseManager.prototype.addCourse = function (course) {
        this.courses.push(course);
        console.log("\u041A\u0443\u0440\u0441 ".concat(course.name, " \u0434\u043E\u0434\u0430\u043D\u043E."));
    };
    CourseManager.prototype.removeCourse = function (courseName) {
        this.courses = this.courses.filter(function (course) { return course.name !== courseName; });
        console.log("\u041A\u0443\u0440\u0441 ".concat(courseName, " \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E."));
    };
    CourseManager.prototype.findCourse = function (courseName) {
        for (var i = 0; i < this.courses.length; i++) {
            if (courseName == this.courses[i].name)
                return this.courses[i];
        }
        console.log("Немає курсу " + courseName);
        return null;
    };
    CourseManager.prototype.listCourses = function () {
        if (this.courses.length === 0) {
            console.log("Немає доступних курсів.");
        }
        else {
            this.courses.forEach(function (course) {
                console.log("\u041A\u0443\u0440\u0441: ".concat(course.name, ", \u0422\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C: ").concat(course.duration, " \u0433\u043E\u0434\u0438\u043D"));
                console.log("Зареєстровані студенти:", course.students.join(", ") || "Немає студентів");
            });
        }
    };
    return CourseManager;
}());
var course1 = new OnlineCourse("TypeScript Basics", 10);
var course2 = new OnlineCourse("Advanced JavaScript", 15);
var course3 = new OnlineCourse("Web Development", 20);
var courseManager = new CourseManager();
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
//# sourceMappingURL=task5.js.map