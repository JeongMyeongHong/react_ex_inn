import axios from 'axios';

const SERVER = `http://localhost:`
const PORT = `8080`

export const boardWrite = boardParam => axios.post(`${SERVER+PORT}/board/write`, boardParam)
export const boardFindAll = () => axios.post(`${SERVER+PORT}/board/findAll`)
export const boardFindOne = boardParam => axios.get(`${SERVER+PORT}/board/findOne/${boardParam}`)
export const boardDelete = boardParam => axios.delete(`${SERVER+PORT}/board/delete/${boardParam}`)
export const boardEdit = boardParam => axios.post(`${SERVER+PORT}/board/edit`, boardParam)
export const predictAlarm = () => axios.get(`${SERVER+PORT}/ChannelAi/rabbit`)
