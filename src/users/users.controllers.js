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
module.exports = {
    findUsers,
    findUserById,
    createNewUser
}