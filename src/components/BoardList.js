import React, {useEffect, useState} from 'react';
import Layout from '../containers/Layout';
import {boardFindAll} from '../api'
import {Link} from 'react-router-dom'
import styled from "styled-components";

export function BoardList() {
    const [result, setResult] = useState([])

    useEffect(() => {
        boardFindAll()
            .then(res => {
                setResult(res.data)
            })
            .catch(err => {
                console.log(`에러 발생 :  ${err}`)
            })
    }, [])

    const writeBoard = async (e) => {
        e.preventDefault()
        window.location.href = '/board/write'
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
                <th colSpan={3}><h1>게시글 목록</h1></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <button onClick={writeBoard}>글쓰기</button>
                </td>
            </tr>
            {result.map((board, index) => (
                <tr key={index}>
                    <td>
                        <Link to={`/board/${board.boardID}`}>
                            <Li>글번호: {board.boardID}</Li>
                            <Li>작성일: {formatDate(board.writtenDate)}</Li>
                            <Li>수정일: {formatDate(board.editedDate)}</Li>
                            <Li>내용: {board.board}</Li>
                        </Link>
                    </td>
                </tr>
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