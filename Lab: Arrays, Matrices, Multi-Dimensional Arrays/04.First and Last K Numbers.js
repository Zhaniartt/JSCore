function solve(input){
    let a = +input.shift()
        let firstLine = input.slice(0,a)
        let secLine = input.slice(input.length-a,input.length)
        console.log(firstLine.join(' '))
        console.log(secLine.join(' '))
    }
    solve([2,
        7, 8, 9])