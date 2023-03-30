import axios from 'axios';

const SERVER = `http://localhost:8080`

export const questionHome = questionParam => axios.post(`${SERVER}/question/`, questionParam)
export const questionWrite = questionParam => axios.post(`${SERVER}/question/write`, questionParam)
export const questionFindAll = () => axios.post(`${SERVER}/question/findAll`)
// export const memberCalc = calcRequest => axios.post(`${SERVER}/member/calc`, calcRequest)
// export const memberGrade = gradeRequest => axios.post(`${SERVER}/member/grade`, gradeRequest)
// export const memberLogin = loginRequest => axios.post(`${SERVER}/member/login`, loginRequest)
// export const memberSort = sortRequest => axios.post(`${SERVER}/member/sort`, sortRequest)