import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": '1d2450bf-cc12-47c6-a828-8bdd69ea5641'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersApi = {
    getUsersRequest(currentPage = 1, pageSize = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
    },
    unfollowRequest(userId) {
        return instance.delete(`follow/${userId}`)
    },
    followRequest(userId) {
        return instance.post(`follow/${userId}`, {})
    },
    getProfile(userId = 2) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId = 2) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`)
    }

}
