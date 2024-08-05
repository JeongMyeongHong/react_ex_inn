import React, { useEffect } from "react";
import Layout from "../containers/Layout";
import { useLocation, useSearchParams  } from 'react-router-dom'; // useParams 대신 useLocation 사용
import { useCookies } from 'react-cookie';

export function LuckyBoard() {

    // const location = useLocation(); // 위치 정보를 가져오기
    // const [searchParams] = useSearchParams();
  
    // const queryParams = new URLSearchParams(location.search);
    // const token = queryParams.get('token');
    // const expirationTime = queryParams.get('expirationTime');
    // const nickname = queryParams.get('nickname');
    // const email = queryParams.get('email');

    // // const token = searchParams.get("token")!;
    // // const email = searchParams.get("email")!;
    // // const nickname = searchParams.get("nickname")!;
  
    // useEffect(() => {
    //   sessionStorage.setItem("accessToken", token);
    //   sessionStorage.setItem("email", email);
    //   sessionStorage.setItem("nickname", nickname);
    // }, [email, nickname, token]);
  
    // return (
    //   <div>
    //     {token ? (
    //       <div>로그인 진행 중입니다.</div>
    //     ) : (
    //       <div>로그인이 필요합니다.</div>
    //     )}
    //   </div>
    // );


    const location = useLocation(); // 위치 정보를 가져오기
    const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);

    // URLSearchParams를 사용하여 쿼리 파라미터 추출
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    const expirationTime = queryParams.get('expirationTime');
    const nickname = queryParams.get('nickname');
    const email = queryParams.get('email');
    const isExistLcDay = queryParams.get('isExistLcDay');
    const isExp = queryParams.get('isExp');
    const prfNo = queryParams.get('prfNo');

    useEffect(() => {
        if (!token || !expirationTime || !nickname || !email) return;
        const now = new Date().getTime();
        const expires = new Date(now + parseInt(expirationTime) * 1000);

        setCookie('accessToken', token, {expires, path: '/'});
        // window.location.href = `/login`
    }, [token, expirationTime, nickname, email]); // 의존성 배열 업데이트

    return (
        <Layout>
            <h1>{nickname ? `${nickname} 하이 ${email}` : '환영합니다!'}</h1>
        </Layout>
    );
}

export default LuckyBoard;
