var readline = require('readline')
var rl = readline.createInterface(process.stdin, process.stdout)
var string = ''
var hasil = 0
var hasil2 = 0
var pattern = 3
var pattern2 = 5

rl.question("Masukan batas : ", function (input) {
    string = kelipatan(input)
    rl.setPrompt(string)
    rl.prompt()
})

function kelipatan(input) {
    hasil += pattern
    hasil2 += pattern2
    for (let index = 1; index <= input; index++) {
        if (index === hasil && index === hasil2) {
            string += ' FizzBuzz , '
            hasil += pattern
            hasil2 += pattern2
            continue
        } if (index === hasil) {
            hasil += pattern
            string += ' fizz , '
            continue
        } else if (index === hasil2) {
            hasil2 += pattern2
            string += ' Buzz , '
            continue
        } else {
            string += index + ' , '
        }
    }
    return string
}