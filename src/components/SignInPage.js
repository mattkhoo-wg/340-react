import React, { useState } from 'react'; 
// import Dropdown from 'react-bootstrap/Dropdown'; 
import { NavLink, Link } from 'react-router-dom'; 

import { StyledFirebaseAuth } from 'react-firebaseui'
import { GoogleAuthProvider, EmailAuthProvider, getAuth } from 'firebase/auth'

const FIREBASEUI_CONFIG = {
    signInOptions : [
        {provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName: true},
        GoogleAuthProvider.PROVIDER_ID,
    ],
    signInFlow: 'popup',
    credentialHelper: 'none',
    callbacks: {
        signInSuccessWithAuthResults: () => false
    }
};

export default function SignInPage(props) {
    const auth = getAuth();

    return (
        <div className="card bg-light">
            <div className="container card-body">
                <p className="lead">pick a user:</p>

                <StyledFirebaseAuth uiConfig={FIREBASEUI_CONFIG} firebaseAuth={auth} />

            </div>
        </div>
    )
}