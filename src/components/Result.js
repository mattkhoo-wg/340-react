import React from 'react';

export default function result(props){
    
    return (
    <div class="content">
        <div class="question-container">
            <h1>Your answer to the previous question:</h1>
            <h2>{props.surveyAnswer}</h2>
        </div>
    </div>
    )
}
