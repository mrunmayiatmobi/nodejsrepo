const chalk = require('chalk')
const getNotes = require('./node.js')

const msg = getNotes()

console.log('ok '+msg);

const newmsg = chalk.bold.green('sucess!!!')
console.log(newmsg)
//console.log(chalk.bold.red(getNotes()))

// nodemon app.js
// is we make any changes it reeflected here
// fro quit ctr+c