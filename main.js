const fs = require('fs')
const filePath = './output.txt'
const data = 'Hello, World!'

fs.writeFile(filePath, data, 'utf-8', (err) => {
  if (err) {
    console.log(err.message)
  } else {
    console.log(`Data successfully written to ${filePath}`)
  }
})
