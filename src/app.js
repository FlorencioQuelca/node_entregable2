const express = require('express')
const port = 3000
const app = express()
const userRouter = require('./users/users.router')

app.use(express.json())


// API  routes
app.use('/api/v1', userRouter)



app.get('/', (req, res) => {
    res.status(200).json({ message: 'okkkkk' })
})



app.listen(port, () => {
    console.log(`Server started at por ${port}`)
})