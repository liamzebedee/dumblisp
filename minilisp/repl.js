const dumblisp = require('./index')

// 
// REPL.
// 

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    crlfDelay: Infinity
})



async function run() {
    while(1) {
        // READ.
        const line = await new Promise((res,rej) => {
            rl.question('dumblisp> ', res)
        })
        // EVAL.
        with(dumblisp) {
            console.log(line)
            const res = eval_(line)
            // PRINT
            console.log(res)
        }
    } // LOOP
}

run()

process.on('SIGINT', function() {
    rl.close()
    process.exit(0)
})
