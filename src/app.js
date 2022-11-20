const express = require('express')
const port = 3000
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ message: 'okkkkk' })
})
app.listen(port, () => {
    console.log(`Server started at por ${port}`)
})