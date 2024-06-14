

function reverseString(str) {
    return str.split("").reverse().join("")
}



function reverseSentence(sentence) {
    return sentence.split(" ").map(word => reverseString(word)).join(" ")
}


function checkCapitalCase(str) {
    return str === str.toLowerCase()
}