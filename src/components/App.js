import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import {Home} from './Home'
import { Data } from './Data'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Data" element={<Data/>}/>
            </Routes>
        </Router>
    )
}

export default App;
