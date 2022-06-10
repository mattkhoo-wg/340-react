import React, { useEffect } from 'react';
import '../css/resultPage.css'
import { getDatabase, ref, set as firebaseSet, onValue, push } from 'firebase/database';
import { useState} from 'react';
import { NavBar } from './Navigation';


export default function Result(props){
    
    
    let userId = window.localStorage.getItem("userId");
    const dbRef = "user/" + userId;
    const db = getDatabase();
    const userRef = ref(db, dbRef);
    const [userList, setuserList] = useState([]);
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        // 👇️ toggle shown state
        setIsShown(current => !current);
      };
    
    function updateUserList(){
        onValue(userRef, (snapshot) => {
            let itemList = [];
            let userData = snapshot.val();
            for (let key in userData){
                itemList.push(userData[key])
            setuserList(itemList)
            }
        })
    }

    function clickUpdate(){
        updateUserList();
        handleClick();
    }
    
    console.log(userList);

    return (
        <div>
            <NavBar />
            <div className="content">
                <button className="back" onClick={clickUpdate}>See Result!</button>
                <ol>
                    {userList.map(item =>{
                        return <li key={item}>{item}</li>;
                    })}
                </ol>
            </div>
        </div>
    )
}
