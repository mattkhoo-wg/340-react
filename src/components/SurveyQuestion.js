import React from 'react';

function SurveyQuestion(props) {
    
    function onChangeValue(event) {
        let selection = props.selection
        selection[props.curSurveyNum] = event.target.value
        props.setSelection(selection)
        console.log(props.selection)
    }


    return (
    <div class="content">
            <div class="question-container">
                <h1>{props.surveyTitle}</h1>
            </div>

            <div class="option" onChange={onChangeValue}> 
                {props.surveyOptions.map((option, idx) => {
                    return <>
                        <input type="radio" value = {option} class="radio" name={props.surveyTitle} />
                        <label>{option}</label><br/>
                    </>
                })}
            
            </div>
    </div>
    )
}

export default SurveyQuestion;
