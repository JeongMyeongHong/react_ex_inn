import React, {useState} from 'react';
import Layout from '../containers/Layout';
import {predictAlarm} from '../api'

export function Alarm() {
    //내용 및 제목 수정
    const [result, setResult] = useState([])
    const [waitPhrase, setWaitPhrase] = useState("No results")
    const predict = async (e) => {
        e.preventDefault()
        setResult([])
        setWaitPhrase("예측중입니다. 잠시만 기다려주세요.")
        await predictAlarm().then(res => {
            setResult(res.data)
        })
            .catch(err => {
                console.log(`에러 발생 :  ${err}`)
            })
    }

    //return 이하 부분을 jsx라고 한다.
    return (<Layout>
        <table>
            <thead>
            <tr>
                <th colSpan={3}><h1>CH-AI-ALARM</h1></th>
            </tr>
            <tr>
                <td>
                    <button onClick={predict}><h2>Predict</h2></button>
                </td>
            </tr>
            </thead>
            {result.length === 0 ?
                <tbody>
                <tr>
                    <td>{waitPhrase}</td>
                </tr>
                </tbody> :
                result.map((res, idx) => (
                        <tbody key={idx}>
                        <tr>
                            <td colSpan={2}><h3>시도코드: {res["sidoCode"]}</h3></td>
                        </tr>
                        <tr>
                            <td>timestamp</td>
                            <td>{res["timestamp"]}</td>
                        </tr>
                        <tr>
                            <td>aiType</td>
                            <td>{res["aiType"]}</td>
                        </tr>
                        <tr>
                            <td>threshold</td>
                            <td>{res["threshold"]}</td>
                        </tr>
                        <tr>
                            <td>anomalyYn</td>
                            <td>{res["anomalyYn"]}</td>
                        </tr>
                        <tr>
                            <td>maeLoss</td>
                            <td>{res["maeLoss"]}</td>
                        </tr>
                        <tr>
                            <td>times</td>
                            <td>{res["times"]}</td>
                        </tr>
                        </tbody>
                    )
                )}
        </table>
    </Layout>)
}