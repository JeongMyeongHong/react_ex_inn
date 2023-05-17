import React from "react"
import {useRoutes} from 'react-router-dom'
import Home from "./pages/Home";
import {BoardWrite, BoardList, BoardDetail, BoardEdit, Alarm, Fastapi} from "./components";


export default function App() {
    return useRoutes([
        {path: "/", element: <Home/>},
        {path: "board/write", element: <BoardWrite/>},
        {path: "board/list", element: <BoardList/>},
        {path: "board/:boardID", element: <BoardDetail/>},
        {path: "board/edit/:boardID", element: <BoardEdit/>},
        {path: "channelAi/alarm", element: <Alarm/>},
        {path: "fastapi-test", element: <Fastapi/>},
    ]);
}