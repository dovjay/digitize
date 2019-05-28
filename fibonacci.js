var readline = require('readline')
var rl = readline.createInterface(process.stdin, process.stdout)
var memo = []
let result = 0
let string = ''

rl.question("Masukan batas : ", function (input) {
    fibonacci(input)
    for (let index = 0; index < memo.length; index++) {
        if (memo[index] === undefined) {
            continue
        }
        string += memo[index]
        if (index + 1 === memo.length) {
            continue
        } else {
            string += '  '
        }
    }
    rl.setPrompt(string)
    rl.prompt()
})

function fibonacci(input) {

    if (memo[input] !== undefined) {
        return memo[input]
    }
    if (input === 1 || input === 2) {

        result = 1
    } else {
        result = fibonacci(input - 1) + fibonacci(input - 2)

    }
    memo[input] = result
    return result
}