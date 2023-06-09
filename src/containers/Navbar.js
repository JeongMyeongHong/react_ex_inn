import React from "react";
import {Link} from 'react-router-dom'
import styled from "styled-components";

export default function Navbar() {
    return <div>
        <nav>
            <Ul>
                <Li><Link to="/">Home</Link></Li>
                <Li><Link to="/board/list">샘플 게시판</Link></Li>
                <Li><Link to="/channelAi/alarm">CH-AI-Alarm</Link></Li>
                <Li><Link to="/fastapi-test">fastAPI-test</Link></Li>
            </Ul>
        </nav>
    </div>
}

const Ul = styled.ul`
  background-color: #FFDAB9;
  text-decoration: none;
  text-align: center;
`

const Li = styled.li`
  float: left;
  margin-left: 1em;
  font-size: 20px;
  text-align: center;
  display: inline-block
`
