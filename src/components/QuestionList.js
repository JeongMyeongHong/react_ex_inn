import React, {useEffect, useState} from 'react';
import Layout from '../containers/Layout';
import {questionFindAll} from '../api'
import {Link} from 'react-router-dom'
import styled from "styled-components";

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

    const writeQuestion = async (e) => {
        e.preventDefault()
        window.location.href='/question/write'
    }

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleString("ko-KR", {
            timeZone: "Asia/Seoul",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    //return 이하 부분을 jsx라고 한다.
    return (<Layout>
        <table>
            <thead>
                <tr>
                    <th colSpan={3}><h1>QuestionList</h1></th>
                </tr>
            </thead>
            <tbody>
                <tr><button onClick={writeQuestion}>글쓰기</button></tr>
                {result.map((question, index) => (
                    <Li><Link to={`/question/${question.questionID}`}>
                        <tr key={index}>
                            <td>글번호: {question.questionID}</td>
                            <td>작성일: {formatDate(question.writtenDate)}</td>
                            <td>수정일: {formatDate(question.editedDate)}</td>
                            <td>내용: {question.question}</td>
                        </tr>
                    </Link>
                    </Li>
                ))}
            </tbody>
        </table>
    </Layout>)
}


const Li = styled.li`
  list-style-type: none;
  float: left;
  margin-left: 1em;
  font-size: 12px;
  text-align: center;
  display: inline-block;
`