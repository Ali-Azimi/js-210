

// literal
// const arr = []

const arr = new Array(10);
const str = new String();
// console.log(str)
// console.log(arr)



const student = {
    name: 'sana',
    family: 'samin',
    age: 30,
    course: 'Node JS',
    isCertificated: false,
    greeting: () => {
        return  `Welcome Dear ${this.name}  ${this.family}`
    }
}

console.log(student.greeting())


// in js object in two way


class Person {
    
}


// es6 class native
class Student extends Person  {
    constructor(name, family, age, course) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.course = course;
    }
}

// es5 constuructor function
function Student(name, family, age, course) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.course = course
}





console.log(Student);


const student1 = new Student("sana", "samain", 30, "Node JS");
console.log(student1);