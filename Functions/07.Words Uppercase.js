function solve(input){
    input = input.toUpperCase()
    let regex = /[^,.?\s\!\:\;]+/g
    let words = []
    while ((m = regex.exec(input)) !== null) {
        words.push(m)
    }
    console.log(words.join(', '))
}
solve('Hi, how are you?')