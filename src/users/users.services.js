const userControllers = require('./users.controllers')
const getAllUsers = (req, res) => {
    const data = userControllers.findUsers()
    res.status(200).json(data)
}
const getUserById = (req, res) => {
    const data = userControllers.findUserById(req.params.id)
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(404).json({ message: 'Invalid ID' })
    }
}
const postNewUser = (req, res) => {

    const { first_name, last_name, email, password } = req.body
    if (first_name && last_name && email && password) {
        const data = userControllers.createNewUser({ first_name, last_name, email, password })
        res.status(201).json(data)
    } else {
        res.status(400).json({ message: 'Invalid DATA', fields: { fist_name: 'string*', last_name: 'string*', email: 'email*', password: 'password*' } })
    }
}
module.exports = {
    getAllUsers,
    getUserById,
    postNewUser
}