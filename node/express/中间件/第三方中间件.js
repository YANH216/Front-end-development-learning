// body-parser
const express = require('express')
const parser = require('body-parser');

const app = express()
const port = 80

app.use(parser.urlencoded({ extended: false }))

app.post('/user', function (req, res) {

  console.log(req.body)
  res.send('POST request to the userpage')
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))