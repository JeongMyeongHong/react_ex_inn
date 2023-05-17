import React, {useEffect, useState} from 'react';
import Layout from '../containers/Layout';
import {boardFindOne, boardDelete} from '../api'
import {useParams} from "react-router-dom";

export function BoardDetail() {
    //내용 및 제목 수정
    const {boardID} = useParams();
    const [bId] = useState(boardID)
    const [result, setResult] = useState([])

    useEffect(() => {
        boardFindOne(bId)
            .then(res => {
                setResult(res.data)
            })
            .catch(err => {
                console.log(`에러 발생 :  ${err}`)
            })

    }, [bId])

    const editBoard = async (e) => {
        e.preventDefault()
        window.location.href=`/board/edit/${bId}`
    }
    const deleteBoard = async (e) => {
        e.preventDefault()
        await boardDelete(bId)
            .then(res => {
                // eslint-disable-next-line no-restricted-globals
                window.location.href='/board/list'
            })
            .catch(err => {
                console.log(`에러 발생 :  ${err}`)
            })
    }

    const viewBoard = async (e) => {
        e.preventDefault()
        window.location.href='/board/list'
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

    return (<Layout>
        <table>
            <thead>
                <tr>
                    <th colSpan={3}><h1>게시글 보기</h1></th>
                </tr>
            </thead>
            <tbody>
                <tr><td><button onClick={viewBoard}>목록보기</button></td></tr>
                <tr>
                    <td>글번호</td>
                    <td>{result["boardID"]}</td>
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
                    <td>{result["board"]}</td>
                </tr>
                <tr><td><button onClick={editBoard}>수정</button><button onClick={deleteBoard}>삭제</button></td></tr>
            </tbody>
        </table>
    </Layout>)
}
