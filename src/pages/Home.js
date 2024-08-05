import React, {useEffect} from "react";
import Layout from "../containers/Layout";
import { useNavigate, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export default function Home() {

    const {token, expirationTime, nickname } = useParams([])
    const [cookie, setCookie] = useCookies();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token || ! expirationTime || !nickname) return;
            console.log(nickname)
            const now = new Date().getTime();
            const expires = new Date(now + parseInt(expirationTime) * 1000);
            console.log(expires)

            setCookie('accessToken', token, {expires, path: '/'});
            navigate('/');
        }, [token]);


    return (<Layout>
        <h1>Luckyday Home</h1>
    </Layout>)
}