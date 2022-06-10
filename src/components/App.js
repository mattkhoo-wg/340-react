import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, Navigate } from 'react-router-dom';
import {Home} from './Home';
import { Data } from './Data';
import { AppSurvey } from './AppSurvey';
import { Username } from './Username';
import Result from './Result';

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Data" element={<Data/>}/>
                <Route path="/Username" element={<Username/>}/>
                <Route path="/AppSurvey" element={<AppSurvey/>}/>
                <Route path="/Result" element={<Result/>}/>
            </Routes>
        </Router>
    )
}

export default App;
