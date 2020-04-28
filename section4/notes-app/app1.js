//19 video add note

const chalk = require('chalk')
const validator = require('validator')
const yargs = require('yargs')
const notes = require('./notes.js')

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
        notes.addnote(argv.title,argv.body)
    }
})