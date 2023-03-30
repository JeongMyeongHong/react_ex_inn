import React, {useState} from 'react';
import Layout from '../containers/Layout';
import {questionWrite} from '../api'

export function QuestionWrite() {
    const [result, setResult] = useState(``)

    const [inputs, setInputs] = useState({})
    const { question } = inputs

    const onChange = (e) => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({ ...inputs, [name]: value })
    }
    const onClick = async (e) => {
        e.preventDefault()
        alert(question)
        await questionWrite({question})
            .then(res => {
                setResult(res.data)
            })
            .catch(err => {
                console.log(`에러 발생 :  ${err}`)
            })
    }

    //return 이하 부분을 jsx라고 한다.
    return (<Layout>
        <form action="">
            <h1>QuestionWrite</h1>
            <div>
                <label htmlFor="">질문 : </label>
                <input type="text" name="question" onChange={onChange} />
                <input type="button" onClick={onClick} value="QuestionWrite Button"/><br/>
                <div>인풋1 : {inputs['question']}</div>
            </div>
        </form>
        <div> ID : {result.questionID}</div>
        <div> question : {result.question}</div>
        <div> writtenDate : {result.writtenDate}</div>
        <div> editedDate : {result.editedDate}</div>
    </Layout>)
}