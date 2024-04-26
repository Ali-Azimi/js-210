


const STUDENTS = ["sana", "samin", "reza", "Arman", "aryan", "sara", "arash"];




// function filterStudents(studentList) {
//     const newList = [];
//     for (const student of studentList) {
//         if(student.startsWith("a")) {
//             newList.push(student)
//         }
//     }

//     return newList;

// }


// anonymous function
function filterStudents(studentList) {
    const filteredList = studentList.filter(function(student){
        return student.startsWith("a")
    })

    return filteredList;
}