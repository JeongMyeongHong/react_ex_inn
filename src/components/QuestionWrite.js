import React, {useState} from 'react';
import Layout from '../containers/Layout';
import {questionWrite} from '../api'
import styled from "styled-components";

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
        await questionWrite({question})
            .then(res => {
                setResult(res.data)
                window.location.href=`question/${res.data.questionID}`
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
                <div>내용</div>
                <Textarea placeholder="내용을 입력해 주세요." type="text" name="question" onChange={onChange} /><br/>
                <input type="button" onClick={onClick} value="글쓰기"/><br/>
            </div>
        </form>
    </Layout>)
}

const Textarea = styled.textarea`
  width: 90%;
  height: 6.25em;
  resize: none;
`