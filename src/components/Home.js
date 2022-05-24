import React from 'react';
import { NavBar } from './Navigation';
import { useNavigate } from 'react-router-dom'
import AppSurvey from './AppSurvey'

import '../css/landingPage.css';

export function Home() {
    
    let navigate = useNavigate(); 
    
    const routeChange = () =>{ 
        let path = `/AppSurvey`; 
        navigate(path);
    }

    return (
        <div>
            <NavBar/>
            <div className="intro">
                <div>
                    <img src="img/trash_collector.jpg" alt="image of woman picking up garbage in a garbage dump." />
                </div>

                <div className="titles">
                    <div className="cent">
                        <h1>
                            How much waste are you generating?
                        </h1>
                        <h2 class="clean">
                            An insight into your carbon footprint.
                        </h2>
                        <a href="questionnaire.html"><button type="button">Start Survey</button></a>

                        <div id="about">
                            <h2>
                                About Us
                            </h2>
                            <p>
                                Climate Change is a defining issue of the current time and we are at the defining moment. 
                                If we don’t take immediate action by 2050, humanity will be facing catastrophic climate events such as mass flooding, 
                                and a significant rise in sea levels which will threaten food and land security.
                            </p>
                            <p>
                                Currently, there are numerous reports and applications to combat climate change and we noticed the reports and applications such as 
                                <a href="https://watershed.com/jobs" target="_blank"> watershed</a> are mainly centralized around the major roles of climate change such as big corporates and 
                                countries. While it is undoubtedly important to focus on factors that are most responsible for climate change, 
                                we thought it would be equally important to address the individual responsibility. As small actions can add up, 
                                we hope our application will help users to become more conscious about the actions they make in the daily lives
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <AppSurvey/>
            </div>
        </div>
    )
}