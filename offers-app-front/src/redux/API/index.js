import Axios from "axios"

export function getAllPostsAPI(){
    return Axios.get("http://localhost:5000/posts").then(res => res.data)
}

export function getUserAPI(){
    return Axios.get("http://localhost:5000/users").then(res => res.data)
}