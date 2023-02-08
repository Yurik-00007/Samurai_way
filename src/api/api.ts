import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:
        {'API-KEY': '3aa87812-3ffb-4599-85a2-8f21fa7c8a5a'},
    withCredentials: true
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    followUser(userId: number) {
        //debugger
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    unFollowUser(userId: number) {
        //debugger
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },

}




