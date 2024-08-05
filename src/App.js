import React from "react"
import {useRoutes} from 'react-router-dom'
import Home from "./pages/Home";
import {BoardList, BoardEdit, Login, LuckyBoard} from "./components";


export default function App() {
    return useRoutes([
        {path: "/", element: <Home/>},
        {path: "oauth2/kakao/callback", element: <LuckyBoard/>},
        {path: "board/list", element: <BoardList/>},
        {path: "login", element: <Login/>},
    ]);
}