var express = require('express')
var app = express()


app.get('/', (req, res) => {
  res.send('hello world')
})

console.log("runing...")


app.listen(4000, () =>{
    console.log('server running on http://localhost:4000/')
})
