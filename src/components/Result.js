import React from 'react';

export default function result(props){
    
    return (
    <div class="content">
        <div class="question-container">
            <h1>{"Your answer to the previous question: " + props.surveyAnswer}</h1>
        </div>
    </div>
    )
}
