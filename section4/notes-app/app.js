
const chalk = require('chalk')
const validator = require('validator')
const yargs = require('yargs')
const getmsg = require('./notes.js')

// const msg = getmsg ()
// console.log(chalk.green(msg))

// const arg = process.argv[2]

// if(arg === 'add'){
//     console.log('adding note')
// } else if(arg === 'remove'){
//     console.log('removing')
// }

//console.log(process.argv[2])


//console.log(yargs.argv) // node app.js --title="game of life"

//______________________________________________________________
//for checkign new version
// yargs.version('1.1.1')
// console.log(yargs.argv)

//______________________________________________________________
// create add cmd
// yargs.command({
//     command: 'add',
//     description: 'Add a new notes',
//     handler: function(){// that code run when someone run cmd
//         console.log('Adding new user')
//     }
// })
// console.log(yargs.argv)

yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder: {
        title: {
            description: 'note title',
            demandOption: true,// when we use this it say that required argument 
            type: 'string'// always want that in string format

        },
        // AS SAME LIKE TITLE WE HAVE TO ADD BODY ALSO 
        body:{
            description: 'note for body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title: '+argv.title)// title name should same as above title
        //console.log('adding a new note',argv)
        console.log('Body: '+argv.body)
    }
})
yargs.parse()// to printed single time it parse the data
//console.log(yargs.argv)
//______________________________________________________________

//Assignment:
yargs.command({
    command : 'list',
    description: 'List your notes',
    handler: function(){
        console.log('Listing out all notes')
    }
})

yargs.command({
    command: 'read',
    description: 'reading the notes',
    handler: function(){
        console.log('reading the note')
    }
})
//console.log(yargs.argv)