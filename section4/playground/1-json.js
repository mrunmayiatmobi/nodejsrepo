const fs = require('fs')
const book = {
    title : 'ego is the enemy',
    author : 'ryan holidays'
}

const bookJson = JSON.stringify(book)
// console.log(bookJson)

// const parsedData = JSON.parse(bookJson)
// console.log(parsedData.author)

//just to print data

fs.writeFileSync('1-json.json',bookJson)
// this statement store data of bookJSON into 1-json.json file

const dataBuffered = fs.readFileSync('1-json.json')
console.log(dataBuffered.toString())
const dataJSON = dataBuffered.toString()
const data = JSON.parse(dataJSON)// parse data into object

console.log(data)

console.log(data.title)
