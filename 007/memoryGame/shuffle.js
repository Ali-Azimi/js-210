function shuffle(arr) {

    arr.forEach((element, index) => {
        const randomIndex = Math.floor(Math.random()*arr.length);
        const temp = arr[randomIndex];
        arr[randomIndex] = element;
        arr[index] = temp;
    });
    return arr
}