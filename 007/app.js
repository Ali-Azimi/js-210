

const STUDENTS = [
    {
        id: 1,
        name: 'sana samin',
        course: 'php',
        score: 80
    },
    {
        id: 2,
        name: 'arman habibi',
        course: 'php',
        score: 60
    },
    {
        id: 3,
        name: 'mousa rezayi',
        course: 'js',
        score: 60
    },
    {
        id: 4,
        name: 'sadra saheli',
        course: 'js',
        score: 95
    },
    {
        id: 5,
        name: 'sadra saheli',
        course: 'js',
        score: 70
    }
]



const phpStudents = STUDENTS.filter(student => student.course === 'php');
console.log(phpStudents)