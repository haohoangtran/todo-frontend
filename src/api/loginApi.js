import axios from "../axios"

function login(username, password) {
    return axios.post("user/login", {username, password}, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
const loginApi={
    login
}
export default loginApi