import React, {useState} from 'react';
import Layout from '../containers/Layout';
import {login, logout, withdraw, getInfo, modifyInfo, testGrandmom} from '../api'
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export function Login() {
    //내용 및 제목 수정
    const {nickname, expirationTime} = useParams([])
    const [cookies, setCookie, removeCookie] = useCookies();

    const loginButton = async (e) => {
        // e.preventdefault()
        await login()
    }

    const logoutButton = async (e) => {
        // e.preventdefault()
        removeCookie('accessToken');
        window.location.href = `/login`
        const token = cookies.accessToken
        await logout(token).then(res => {
            console.log("ㅎㅇ")
        })
        .catch(err => {
            console.log(`에러 발생 :  ${err}`)
        })
        alert(cookies.accessToken)
    }

    const getInfoButton = async (e) => {
        // e.preventdefault()
        const token = cookies.accessToken
        await getInfo(token).then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(`에러 발생 :  ${err}`)
        })
    }

    const modifyInfoButton = async (e) => {
        // e.preventdefault()
        const token = cookies.accessToken
        await modifyInfo(token).then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(`에러 발생 :  ${err}`)
        })
    }

    const withdrawButton = async (e) => {
        // e.preventdefault()
        // window.location.href = `/login`
        const token = cookies.accessToken
        await withdraw(token).then(res => {
            removeCookie('accessToken');
            alert("탈퇴성공")
        })
        .catch(err => {
            alert(`에러 발생 :  ${err}`)
        })
        

    }

    const grandmom = async (e) => {
        // e.preventdefault()
        await testGrandmom().then(res => {
            console.log(res.data)
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
                <th colSpan={3}><h1>토큰:</h1></th>
                
            </tr>
            <tr><td colSpan={3}>{cookies.accessToken}</td></tr>
            <tr>
                <td>
                    <button onClick={loginButton}><h2>로그인</h2></button>
                    <br/>
                    <button onClick={getInfoButton}><h2>정보 가져오기</h2></button>
                    <br/>
                    <button onClick={modifyInfoButton}><h2>정보 수정하기</h2></button>
                    <br/>
                    <button onClick={logoutButton}><h2>로그아웃</h2></button>
                    <br/>
                    <button onClick={withdrawButton}><h2>탈퇴</h2></button>
                    <br/>
                    <button onClick={grandmom}><h2>그랜드맘</h2></button>
                </td>
            </tr>
            </thead>
           
        </table>
    </Layout>)
}