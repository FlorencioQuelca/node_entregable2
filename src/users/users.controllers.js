const usersDB = []
let id = 1
    /*
    {
    	id: 1,
    	first_name: 'string',
    	last_name: 'string',
    	email: 'string',
    	password: 'string',
    	birthday: 'YYYY/MM/DD'
    }
    */

const findUsers = () => {
    return usersDB;
}
const findUserById = (id) => {
    const user = usersDB.find(user => user.id == id)
    return user
}
const createNewUser = (obj) => {
        const newUser = {
            id: id++,
            first_name: obj.first_name,
            last_name: obj.last_name,
            email: obj.email,
            password: obj.password,
            birthday: obj.birthday || 'secret'
        }
        usersDB.push(newUser)
        return newUser
    }
    // Reto opcional
const deleteUserById = (id) => {
    let id_of = -1
    for (let i = 0; i < usersDB.length; i++) {
        if (usersDB[i].id == id) {
            id_of = i
            break
        }
    }
    if (id_of > -1) {
        const user = usersDB.splice(id_of, 1)
        return user
    }
}
const editUserById = (id, obj) => {
    const user = {}
    for (let i = 0; i < usersDB.length; i++) {
        if (usersDB[i].id == id) {
            usersDB[i].first_name = obj.first_name
            usersDB[i].last_name = obj.last_name
            usersDB[i].email = obj.email
            usersDB[i].password = obj.password
            usersDB[i].birthday = obj.birthday
            user = usersDB[i]
            break
        }
    }
    return user
}
module.exports = {
    findUsers,
    findUserById,
    createNewUser,
    deleteUserById,
    editUserById
}