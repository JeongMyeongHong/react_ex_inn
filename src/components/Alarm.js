import React, {useState} from 'react';
import Layout from '../containers/Layout';
import {predictAlarm} from '../api'
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export function Alarm() {
    //내용 및 제목 수정
    const [result, setResult] = useState([])
    const [waitPhrase, setWaitPhrase] = useState("No results")
    const [columns] = useState(["시도코드", "조회시간", "AI 타입", "Threshold"])
    const [columns2] = useState(["Index", "anomalyYN", "MAE Loss", "Times"])
    const predict = async (e) => {
        // e.preventdefault()
        setResult([])
        setWaitPhrase("예측중입니다. 잠시만 기다려주세요.")
        await predictAlarm().then(res => {
            setResult(res.data)
        })
            .catch(err => {
                console.log(`에러 발생 :  ${err}`)
            })
    }

    //return 이하 부분을 jsx라고 한다.
    return (<Layout>
        <table>
            <thead>
            <tr>
                <th colSpan={3}><h1>CH-AI-ALARM</h1></th>
            </tr>
            <tr>
                <td>
                    <button onClick={predict}><h2>Predict</h2></button>
                </td>
            </tr>
            </thead>
            {result.length === 0 ?
                <tbody>
                <tr>
                    <td>{waitPhrase}</td>
                </tr>
                </tbody> :
                result.map((res, idx) => (
                    <Paper sx={{width: '100%', overflow: 'hidden'}}>
                        <TableContainer sx={{maxHeight: 440}}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column, index) => (
                                            <TableCell key={index} style={{minWidth: 170, color: "red"}}>
                                                {column}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{res["sidoCode"]}</TableCell>
                                        <TableCell>{res["timestamp"]}</TableCell>
                                        <TableCell>{res["aiType"]}</TableCell>
                                        <TableCell>{res["threshold"]}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        {columns2.map((column, index) => (
                                            <TableCell key={index} style={{minWidth: 170, color: "red"}}>
                                                {column}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {res["anomalyYn"].map((anomalyYn, index) => (
                                        <TableRow hover role="checkbox" key={idx}>
                                            <TableCell>{index}</TableCell>
                                            <TableCell>{anomalyYn=== true ? "이상":"정상"}</TableCell>
                                            <TableCell>{res["maeLoss"][index].toFixed((5))}</TableCell>
                                            <TableCell>{res["times"][index]}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                    )
                )}
        </table>
    </Layout>)
}