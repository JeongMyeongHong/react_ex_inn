import React from "react"
import {useRoutes} from 'react-router-dom'
import Home from "./pages/Home";
import {QuestionWrite, QuestionList} from "./components";


export default function App() {
    return useRoutes([
        {path: "/", element: < Home/>},
        {path: "question", element: < QuestionWrite/>},
        {path: "question/list", element: < QuestionList/>},
    ]);
}