const users = []

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
    // clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validate the room
    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    // Check for existing user
    const existingUser = users.filter((user) => {
        return user.room === room && user.username === username
    })

    // Validate the user
    if(existingUser.length > 0) {
        return {
            error: 'Username is in use!'
        }
    }

    // Store the user
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id )
}

const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}

// addUser({
//     id: 22,
//     username: 'Nandita',
//     room: 'two'
// })

// addUser({
//     id: 32,
//     username: 'Like',
//     room: 'one'
// })

// addUser({
//     id: 42,
//     username: 'Andrew',
//     room: 'one'
// })

// const user = getUser(32)
// console.log(user)
// console.log(users)
// const userList = getUsersInRoom('one')
// console.log(userList)