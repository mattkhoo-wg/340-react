import React from 'react';
import SurveyQuestion from './SurveyQuestion'
import Result from './Result'

export function AppSurvey() {
    // Selection is the array of responses the user picked: ['response 1', 'response 2', ...]
    // Instead of having: let selection = [] and updating selection as so: selection[idx] = 'updated value'
    // We use setSelection(['new response 1', 'response 2', ...])
    const [selection, setSelection] = React.useState([])
    const [curSurveyNum, setCurSurveyNum] = React.useState(0)
    const titles = ['How often do you eat animal-based products times per week?', 'How many people live in your household?', 'What is your main method of transportation?', 'How many hours do you fly each year?']
    const ops = [['Zero (I am a vegan or Vegeterian!)', 'once', 'twice', 'Three times', 'Four times', 'Five times', 'Six times', 'Seven times'], ['Just me!', 'Two', 'Three', 'Four', 'Five', 'Six', 'More than Six'], ['Car - gas', 'Car - Electric', 'Public Transportation', 'Bike or Walk'], ['0 hours', '1~10 hours', '10~20 hours', '20~30 hours', '30~40 hours', '40~50 hours', '50~60 hours', '60+ hours']]

    const nextPage = () => {
        let titlesLen = titles.length;
        if (curSurveyNum < titlesLen-1){
            setCurSurveyNum(curSurveyNum + 1)
        }
    }

    const prevPage = () => {
        let titlesLen = titles.length;
        if (curSurveyNum != 0){
            setCurSurveyNum(curSurveyNum - 1)
        }
    }

    return (
        <>
            <SurveyQuestion surveyTitle={titles[curSurveyNum]} surveyOptions={ops[curSurveyNum]} curSurveyNum={curSurveyNum} selection={selection} setSelection={setSelection}/>
            <button onClick={prevPage}>back</button>
            <button onClick={nextPage}>next</button>
            <Result surveyAnswer={selection[curSurveyNum-1]} surveyTitle={titles[curSurveyNum]}/>
        </>
        )
}

export default AppSurvey;