import React, {useEffect, useState} from 'react';
import Layout from '../containers/Layout';
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {questionEdit, questionFindOne} from "../api";

export function QuestionEdit() {

    const {questionID} = useParams();
    const [result, setResult] = useState(``)
    const [inputs, setInputs] = useState({})
    const {question} = inputs


    useEffect(() => {
        questionFindOne(questionID)
            .then(res => {
                setResult(res.data)
            })
            .catch(err => {
                console.log(`에러 발생 :  ${err}`)
            })

    }, [questionID])
    const onChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target
        setInputs({...inputs, [name]: value})
    }

    const editQuestion = async (e) => {
        e.preventDefault()
        await questionEdit({question:question, questionID:questionID, writtenDate:result['writtenDate']})
            .then(() => {
                window.location.href=`/question/${questionID}`
            })
            .catch(err => {
                console.log(`에러 발생 :  ${err}`)
            })
    }

    const cancel = async (e) => {
        e.preventDefault()
        alert("수정 취소")
        window.location.href=`/question/${questionID}`
    }

    //return 이하 부분을 jsx라고 한다.
    return (<Layout>
        <form action="">
            <h1>QuestionWrite</h1>
            <div>
                <div>내용</div>
                <Textarea placeholder="내용을 입력해 주세요." type="text" name="question" onChange={onChange} defaultValue={result["question"]}/><br/>
                <input type="button" onClick={editQuestion} value="수정하기"/>
                <input type="button" onClick={cancel} value="수정취소"/><br/>
            </div>
        </form>
    </Layout>)
}

const Textarea = styled.textarea`
  width: 90%;
  height: 6.25em;
  resize: none;
`