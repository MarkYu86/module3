const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
res.send('Hello World2!')
})

app.get('/test', (req, res) => {
    res.send('This is a test2')
    })

app.listen(port, () => {
console.log(`Example app listening
at http://localhost:${port}`)
})
