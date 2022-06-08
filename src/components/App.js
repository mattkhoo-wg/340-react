import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, Navigate } from 'react-router-dom';
import {Home} from './Home';
import { Data } from './Data';
import { AppSurvey } from './AppSurvey';
import SignInPage from './SignInPage';

import { getAuth, onAuthStateChanged } from 'firebase/auth'

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Data" element={<Data/>}/>
                <Route path="/AppSurvey" element={<AppSurvey/>}/>
            </Routes>
        </Router>
    )
}

export default App;
