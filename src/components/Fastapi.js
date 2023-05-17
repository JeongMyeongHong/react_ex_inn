import React, {useState} from 'react';
import Layout from '../containers/Layout';
import axios from "axios";

export function Fastapi() {
    const [result, setResult] = useState("empty")
    const [result2, setResult2] = useState("empty")
    const [result3, setResult3] = useState("")
    const but0 = async () => {
        setResult("empty")
        setResult2("empty")
        setResult3("")
    }
    const but = async () => {
        await axios.get(`http://localhost:9230/`)
            .then(res => {
                setResult(res.data)
            })
            .catch(err => {
                console.log(`에러 발생 :  ${err}`)
            })
    }
    const but2 = async () => {
        await axios.get(`http://localhost:8080/ChannelAi/`)
            .then(res => {
                setResult2(res.data)
            })
            .catch(err => {
                console.log(`에러 발생 :  ${err}`)
            })
    }
    const but3 = async () => {
        await axios.get(`http://localhost:8080/ChannelAi/rabbit`)
            .then(res => {
                setResult3(res.data)
            })
            .catch(err => {
                console.log(`에러 발생 :  ${err}`)
            })
    }
    return (<Layout>
        <div>Fastapi Page</div><br/>
        <div><button onClick={but0}> 리셋 버튼</button></div><br/>
        <div><button onClick={but}> 스트링 전송 버튼</button></div>
        <div>스트링 결과 : {result} </div><br/>
        <div><button onClick={but2}> CH-AI 버튼</button></div>
        <div>CH-AI 결과 : {result2} </div><br/>
        <div><button onClick={but3}> CH-AI 버튼</button></div>
        <div>CH-AI 결과 : {result3.length} </div><br/>
    </Layout>)
}
