import axios from 'axios'

const baseURL = "http://localhost:5000"

const API = axios.create({ baseURL: baseURL});

export const logIn = (data) => API.post('/user/login', data);
export const signUp = (data) => API.post('/user/signUP', data);
export const addNote = (id,data) => API.patch(`/user/addnote/${id}`, data);
export const dragNotes = (id,data) => API.patch(`/user/dragnotes/${id}`, data);
export const changeCheck = (id,index) => API.patch(`/user/dragnotes/${id}/${index}`);