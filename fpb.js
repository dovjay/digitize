var readline = require('readline')
var rl = readline.createInterface(process.stdin, process.stdout)
var hasil = 1
var last = 0
var first = 0
var memo = []
var string = ''

rl.question("Masukan batas : ", function (input) {
    string = fpb(input)
    rl.setPrompt(string)
    rl.prompt()
})

function fpb(input) {
    input = parseInt(input)
    for (let index = 1; index <= input; index++) {
        if (input % index == 0 && index !== 1) {
            input = input / index
            memo.push(index);
            index = 1
        }
    }

    for (let index = 0; index < memo.length; index++) {
        if (index + 1 === memo.length) {
            string += memo[index]
        } else {
            string += memo[index] + ' x '
        }
    }
    return string
}