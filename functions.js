export function capitalize(word){
    return word[0].toUpperCase().concat(word.substring(1))
}
export function reverseString (word) {
    let newWord = ''
    for(let i = 1; i < word.length + 1; i++){
        newWord += word[word.length - i]
    }
    return newWord
}
export function calculator () {

}

export function analyseArray(array){
    let average = ''
    let sum = array.reduce((a, b) => a + b, 0 )
    average = sum / array.length
    let min = Math.min(...array)
    let max = Math.max(...array)
    let length = array.length

    return {
        average: average,
        min: min,
        max: max,
        length: length
    }
}
export function caesarCipher(word, offset) {
    let intermediateWord = ''
    let intermediatenumber = ''
    let cipher = ''
    for(let i =0; i < word.length; i++){
        if((/[a-zA-Z]/).test(word[i]) !== true){
            cipher += word[i]
        }else{
            intermediatenumber = (word.charCodeAt(i) - 97 + offset)%26 + 97
            intermediateWord = String.fromCharCode(intermediatenumber)
            cipher += intermediateWord
        }
    }
    return cipher
}