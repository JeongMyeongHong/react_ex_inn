import React from "react"
import {useRoutes} from 'react-router-dom'
import Home from "./pages/Home";
import {QuestionWrite, QuestionList, QuestionDetail, QuestionEdit} from "./components";


export default function App() {
    return useRoutes([
        {path: "/", element: <Home/>},
        {path: "question/write", element: <QuestionWrite/>},
        {path: "question/list", element: <QuestionList/>},
        {path: "question/:questionID", element: <QuestionDetail/>},
        {path: "question/edit/:questionID", element: <QuestionEdit/>},
    ]);
}