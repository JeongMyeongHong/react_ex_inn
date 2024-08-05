import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(
    // <React.StrictMode>
    <CookiesProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CookiesProvider>
    // </React.StrictMode>
);
//
// const SpringCloudConfig = require('spring-cloud-config');
//
// const configOptions = {
//     configPath: __dirname + '/config',
//     activeProfiles: ['dev1'],
//     level: 'debug'
// };
// let myConfig;
//
// SpringCloudConfig.load(configOptions).then(theConfig => {
//     myConfig = theConfig
//     // now run your application with the loaded config props.
//     // do this by saving the returned config object somewhere,
//     // or by using the SpringCloudConfig.instance() helper.
// })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();