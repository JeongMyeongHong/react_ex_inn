import React, {useEffect, useState} from 'react';
import Layout from '../containers/Layout';
import {questionFindOne, questionDelete} from '../api'
import {useParams} from "react-router-dom";

export function QuestionDetail() {
    //내용 및 제목 수정
    const {questionID} = useParams();
    const [qID] = useState(questionID)
    const [result, setResult] = useState([])

    useEffect(() => {
        questionFindOne(qID)
            .then(res => {
                setResult(res.data)
            })
            .catch(err => {
                console.log(`에러 발생 :  ${err}`)
            })

    }, [qID])

    const editQuestion = async (e) => {
        e.preventDefault()
        window.location.href=`/question/edit/${qID}`
    }
    const deleteQuestion = async (e) => {
        e.preventDefault()
        await questionDelete(qID)
            .then(res => {
                // eslint-disable-next-line no-restricted-globals
                window.location.href='/question/list'
            })
            .catch(err => {
                console.log(`에러 발생 :  ${err}`)
            })
    }

    const viewQuestion = async (e) => {
        e.preventDefault()
        window.location.href='/question/list'
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
                    <th colSpan={3}><h1>QuestionDetail</h1></th>
                </tr>
            </thead>
            <tbody>
                <tr><button onClick={viewQuestion}>목록보기</button></tr>
                <tr>
                    <td>글번호</td>
                    <td>{result["questionID"]}</td>
                </tr>
                <tr>
                    <td>작성일</td>
                    <td>{formatDate(result["writtenDate"])}</td>
                </tr>
                <tr>
                    <td>수정일</td>
                    <td>{formatDate(result["editedDate"])}</td>
                </tr>
                <tr>
                    <td>내용</td>
                    <td>{result["question"]}</td>
                </tr>
                <tr><button onClick={editQuestion}>수정</button><button onClick={deleteQuestion}>삭제</button></tr>
            </tbody>
        </table>
    </Layout>)
}