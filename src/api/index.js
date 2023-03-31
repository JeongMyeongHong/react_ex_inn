import axios from 'axios';

const SERVER = `http://localhost:8080`

export const questionHome = questionParam => axios.post(`${SERVER}/question/`, questionParam)
export const questionWrite = questionParam => axios.post(`${SERVER}/question/write`, questionParam)
export const questionFindAll = () => axios.post(`${SERVER}/question/findAll`)
export const questionFindOne = questionParam => axios.get(`${SERVER}/question/findOne/${questionParam}`)
export const questionDelete = questionParam => axios.delete(`${SERVER}/question/delete/${questionParam}`)
