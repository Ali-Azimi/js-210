



const scores = [23, 45, 16, 54, 32, 60, 80, 80, 25, 50];


// reduce
const sum = scores.reduce((prev, curr)=> prev + curr); 
const avg = sum/scores.length;

// filter
const result = scores.filter(score => score > avg)

// some
const isFailedStudent = scores.some(score => score < 65)

// every
const isTopClass = scores.every(score => score > 80)

const treshholder = 100 - Math.max(...scores)
// map
const newScores = scores.map(score => score + treshholder)

// sort, reverse
const sortedList = scores.sort((a,b)=> {
    return b-a
})

console.log(sortedList)