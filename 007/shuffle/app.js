


const numbers = ["student 1", "student 2", "student 3"]



function shuffle(arr) {

    arr.forEach((element, index) => {
        const randomIndex = Math.floor(Math.random()*arr.length);
        const temp = arr[randomIndex];
        arr[randomIndex] = element;
        arr[index] = temp;
    });
    return arr
}