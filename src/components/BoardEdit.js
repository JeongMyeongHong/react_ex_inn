import React, {useEffect, useState} from 'react';
import Layout from '../containers/Layout';
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {boardEdit, boardFindOne} from "../api";

export function BoardEdit() {

    const {boardID} = useParams();
    const [result, setResult] = useState(``)
    const [inputs, setInputs] = useState({})
    const {board} = inputs


    useEffect(() => {
        boardFindOne(boardID)
            .then(res => {
                setResult(res.data)
            })
            .catch(err => {
                console.log(`에러 발생 :  ${err}`)
            })

    }, [boardID])
    const onChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target
        setInputs({...inputs, [name]: value})
    }

    const editBoard = async (e) => {
        e.preventDefault()
        await boardEdit({board:board, boardID:boardID, writtenDate:result['writtenDate']})
            .then(() => {
                window.location.href=`/board/${boardID}`
            })
            .catch(err => {
                console.log(`에러 발생 :  ${err}`)
            })
    }

    const cancel = async (e) => {
        e.preventDefault()
        alert("수정 취소")
        window.location.href=`/board/${boardID}`
    }

    return (<Layout>
        <form action="">
            <h1>boardWrite</h1>
            <div>
                <div>내용</div>
                <Textarea placeholder="내용을 입력해 주세요." type="text" name="board" onChange={onChange} defaultValue={result["board"]}/><br/>
                <input type="button" onClick={editBoard} value="수정하기"/>
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