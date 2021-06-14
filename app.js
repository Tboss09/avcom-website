const fs = require('fs')
const logo = [

 "HikVision",
 "Mecerdes",
 "PetroChina",
 "Siemens",
 "Sinopec",
]
logo.map(logo => {
 const createStream = fs.createWriteStream(`${logo}.svg`)
})
createStream.end()
