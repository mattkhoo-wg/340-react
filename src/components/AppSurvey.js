import React from 'react';
import SurveyQuestion from './SurveyQuestion'
import Result from './Result'
import { NavBar } from './Navigation';
import '../css/questionPage.css'
import {useNavigate} from 'react-router-dom';
import { getDatabase, ref, set as firebaseSet, onValue } from 'firebase/database';

export function AppSurvey(props) {
    // Selection is the array of responses the user picked: ['response 1', 'response 2', ...]
    // Instead of having: let selection = [] and updating selection as so: selection[idx] = 'updated value'
    // We use setSelection(['new response 1', 'response 2', ...])
    let userId = window.localStorage.getItem("userId");
    const [selection, setSelection] = React.useState({})
    const [curSurveyNum, setCurSurveyNum] = React.useState(0)
    const titles = ['How often do you eat animal-based products times per week?', 'How many people live in your household?', 'What is your main method of transportation?', 'How many hours do you fly each year?']
    const ops = [['Zero (I am a vegan or Vegeterian!)', 'once', 'twice', 'Three times', 'Four times', 'Five times', 'Six times', 'Seven times'], ['Just me!', 'Two', 'Three', 'Four', 'Five', 'Six', 'More than Six'], ['Car - gas', 'Car - Electric', 'Public Transportation', 'Bike or Walk'], ['0 hours', '1~10 hours', '10~20 hours', '20~30 hours', '30~40 hours', '40~50 hours', '50~60 hours', '60+ hours']]
    const [userList, setuserList] = React.useState([]);

    // add the userId to the object
    function addUserId(){
        selection['userId'] = userId;
        setSelection(selection);
    }

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

    const navigate = useNavigate();

    const navigateToResults = () => {
        navigate('/Result')
    }

    //firebase databse
    const db = getDatabase();
    const dbRef = "user/" + userId;
    const userRef = ref(db, dbRef);

    function pushToDatabase(){
        firebaseSet(userRef, selection)
    }

    function updateUserList(){
        onValue(userRef, (snapshot) => {
            let itemList = [];
            let userData = snapshot.val();
            for (let key in userData){
                itemList.push(<list>{userData[key]}</list>)
            setuserList(itemList)
            }
        })
    }

    function submitButtonFunction(){
        addUserId();
        navigateToResults();
        pushToDatabase();
        updateUserList();
    }

    function Button(){
        if (curSurveyNum == titles.length - 1){
            return (
                <div className="button-submit">
                    <button className="back" onClick={prevPage}>back</button>
                    <button className="submit" onClick={submitButtonFunction}>submit</button>
                </div>
            )
        }
        else {
            return(
                <div className="button">
                    <button className="back" onClick={prevPage}>back</button>
                    <button className="next" onClick={nextPage}>next</button>
                </div>
            )
        }
    }

    return (
        <>
            <NavBar />
            <SurveyQuestion surveyTitle={titles[curSurveyNum]} surveyOptions={ops[curSurveyNum]} curSurveyNum={curSurveyNum} selection={selection} setSelection={setSelection}/>
            <Button />
            <div className="hidden">
                <Result selection={selection} userList={userList}/>
            </div>
        </>
        )
}



export default AppSurvey;