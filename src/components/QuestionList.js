import React, {useEffect, useState} from 'react';
import Layout from '../containers/Layout';
import {questionFindAll} from '../api'

export function QuestionList() {
    const [result, setResult] = useState([])
    useEffect( () => {
        questionFindAll()
            .then(res => {
                console.log(res.data)
                setResult(res.data)
            })
            .catch(err => {
                console.log(`에러 발생 :  ${err}`)
            })
    },[])

    //return 이하 부분을 jsx라고 한다.
    return (<Layout>
        <table>
            <thead>
                <tr>
                    <th colSpan={3}><h1>QuestionList</h1></th>
                </tr>
            </thead>
            <tbody>
                {result.map((question, index) => (
                    <tr key={index}>
                        <td>글번호: {question.questionID}</td>
                        <td>작성일: {question.writtenDate}</td>
                        <td>수정일: {question.editedDate}</td>
                        <td>내용: {question.question}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Layout>)
}