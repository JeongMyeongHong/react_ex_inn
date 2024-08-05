import axios from 'axios';

const SERVER = `http://localhost:`
const PORT = `8080/lucky`
// const PORT = `8080/grandmom`
// const SERVER = `https://223.130.131.239.nip.io/lucky`
// const SERVER = `http://223.130.131.239:28081/lucky`
// const PORT = ``

export const boardWrite = boardParam => axios.post(`${SERVER+PORT}/board/write`, boardParam)
export const boardFindAll = () => axios.post(`${SERVER+PORT}/board/findAll`)
export const boardFindOne = boardParam => axios.get(`${SERVER+PORT}/board/findOne/${boardParam}`)
export const boardDelete = boardParam => axios.delete(`${SERVER+PORT}/board/delete/${boardParam}`)
export const boardEdit = boardParam => axios.post(`${SERVER+PORT}/board/edit`, boardParam)

export const login = () => {window.location.href = `${SERVER+PORT}/users/sign-in`}
export const logout = () => {window.location.href = `${SERVER+PORT}/users/sign-out`}

export const sessionTest = (accessToken) => axios.get(`${SERVER+PORT}/users/test`, {headers: {'Authorization': `Bearer ${accessToken}`}})
export const getInfo = (accessToken) => axios.get(`${SERVER+PORT}/users`, {headers: {'Authorization': `Bearer ${accessToken}`}})
export const modifyInfo = (accessToken) => axios.put(`${SERVER+PORT}/users`, {"nickname": "HJM", "email": "a@b.com"}, {headers: {'Authorization': `Bearer ${accessToken}`}})
export const withdraw = (accessToken) => axios.delete(`${SERVER+PORT}/users`, {headers: {'Authorization': `Bearer ${accessToken}`}})
export const testGrandmom = () => axios.get(`${SERVER+PORT}/diary/diary?diaryID="sampleID1234"`)
