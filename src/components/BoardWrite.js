import React, {useState} from 'react';
import Layout from '../containers/Layout';
import {boardWrite} from '../api'
import styled from "styled-components";

export function BoardWrite() {
    // const [result, setResult] = useState(``)

    const [inputs, setInputs] = useState({})
    const { board } = inputs

    const onChange = (e) => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({ ...inputs, [name]: value })
    }
    const onClick = async (e) => {
        e.preventDefault()
        await boardWrite({board})
            .then(res => {
                window.location.href=`/board/${res.data.boardID}`
            })
            .catch(err => {
                console.log(`에러 발생 :  ${err}`)
            })
        
    }

    return (<Layout>
        <form action="">
            <h1>boardWrite</h1>
            <div>
                <div>내용</div>
                <Textarea placeholder="내용을 입력해 주세요." type="text" name="board" onChange={onChange} /><br/>
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