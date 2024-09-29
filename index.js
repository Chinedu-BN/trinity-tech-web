const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.use('/',async (req, res, next) => {
res.sendFile(__path + '/trinity.html')
})

app.listen(port, () => {
    console.log(`Server is listening on the port ${port}.`)
})
