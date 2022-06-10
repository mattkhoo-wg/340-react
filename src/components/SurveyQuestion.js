import React from 'react';
import '../css/questionPage.css'

function SurveyQuestion(props) {
    let userId = window.localStorage.getItem("userId");

    let nameHeading = "Welcome " + userId + "!"

    function onChangeValue(event) {
        let selection = props.selection
        selection[props.curSurveyNum] = event.target.value
        props.setSelection(selection)
        console.log(props.selection)
    }

    return ( 
        <div className="content">
                <div className="question-title">
                    <h1>{nameHeading}</h1>
                    <h1>{props.surveyTitle}</h1>
                </div>

                <div className="option" onChange={onChangeValue}> 
                    {props.surveyOptions.map((option, idx) => {
                        return <>
                            <input type="radio" value = {option} className="radio" name={props.surveyTitle} />
                            <label>{option}</label><br/>
                        </>
                    })}
                
                </div>
        </div>
    )
}



export default SurveyQuestion;
