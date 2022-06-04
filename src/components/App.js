import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, Navigate } from 'react-router-dom';
import {Home} from './Home';
import { Data } from './Data';
import { AppSurvey } from './AppSurvey';
import SignInPage from './SignInPage';

function App() {
    const initialUser = {userId:null, userName:null}
    const [currentUser, setCurrentUser] = useState(initialUser);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Data" element={<Data/>}/>
                <Route path="/AppSurvey" element={<AppSurvey/>}/>
                <Route path="/SignIn" element={<SignInPage currentUSer={currentUser} loginFunction={loginUser} />} />
            </Routes>
        </Router>
    )
}

function ProtectedPage(props) {
    if(!props.currentUSer.userId) {
        return <Navigate to="/SignIn" />
    } else {
        return <Outlet />
    }
}

export default App;
