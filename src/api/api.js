import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": '1d2450bf-cc12-47c6-a828-8bdd69ea5641'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getProfile(userId = 2) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    unfollowRequest(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    followRequest(userId) {
        return instance.post(`follow/${userId}`, {}).then(response => response.data)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data);
    }
}
