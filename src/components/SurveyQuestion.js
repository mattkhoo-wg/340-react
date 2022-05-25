import React from 'react';
import '../css/questionPage.css'

function SurveyQuestion(props) {
    
    function onChangeValue(event) {
        let selection = props.selection
        selection[props.curSurveyNum] = event.target.value
        props.setSelection(selection)
        console.log(props.selection)
    }


    return (
    <html>   
        <div className="content">
                <div className="question-title">
                    <h1>{props.surveyTitle}</h1>
                </div>

                <div className="option" onChange={onChangeValue}> 
                    {props.surveyOptions.map((option, idx) => {
                        return <>
                            <input type="radio" value = {option} class="radio" name={props.surveyTitle} />
                            <label>{option}</label><br/>
                        </>
                    })}
                
                </div>
        </div>
    </html> 
    )
}

export default SurveyQuestion;
