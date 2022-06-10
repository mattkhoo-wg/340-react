import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "../css/usernamePage.css"
import AppSurvey from './AppSurvey';
import {useNavigate} from 'react-router-dom';

export function Username(props){
    //username needs to be passed down to AppSurvey
    // const [userId, setuserId] = React.useState("")

    function setUserId(event){
        window.localStorage.setItem("userId", event.target.value);
    }

    const navigate = useNavigate();

    const navigateToResults = () => {
        navigate('/AppSurvey')
    }

    return (
        <div className="content">
            <h1 className="username-heading">Hello! Before we start the survey, please input your name below:</h1>
            <div className="form-group">
                <input className="form-field" type="text" onChange = {setUserId} placeholder="name goes here"/>
            </div>
            <button className="landing-page" type="button" onClick={navigateToResults}>Start Survey</button>
            <div className="hidden">
                <AppSurvey/>
            </div>
        </div>
    )
}
