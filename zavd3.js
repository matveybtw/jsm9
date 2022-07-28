let student = {
    name: 'Ivan',
    surname: 'Petrov',
    age: 19,
    subjects: ["English", "History", "Marketing"],
    course: 3
}
function n1(student) {
    let { name, surname, age, subjects, course } = student;
    console.log(name);
    console.log(surname);
    console.log(age);
    subjects.forEach(element =>console.log(element));
    console.log(course);
}
function n2(student) {
    let { name, surname, subjects } = student;
    console.log(name);
    console.log(surname);
    subjects.forEach(element =>console.log(element));
}
function n3(student) {
    let { name, surname, age } = student;
    name = name || "-";
    surname = surname || "-";
    age = age || 0;
    console.log(name);
    console.log(surname);
    console.log(age);
}
n1(student);