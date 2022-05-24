import React from 'react';
import { NavBar } from './Navigation';
import '../css/dataVis.css';

function Filter(props) {
    return (
        <div className="filter">
            <h2>Filter Category</h2>
            <div className="filterInner">
                <div>
                    <input type="checkbox" id="filter1" name="filter1" value="filter1"/>
                    <label for="filter1">Household Size</label>
                </div>
                <div>
                    <input type="checkbox" id="filter2" name="filter2" value="filter2"/>
                    <label for="filter2">Travel</label>
                </div>
                <div>
                    <input type="checkbox" id="filter3" name="filter3" value="filter3"/>
                    <label for="filter3">Diet</label>
                </div>
            </div>
        </div>
    )
}

export function Data() {
    return (

        <div class="container">
            <NavBar/>
            <div class="filters">
                <div className="container">
                    <Filter/>
                </div>
            </div>
            <div class="vis">
                <img src="img/emissions2.png" alt="image of co2 emissions by country"/>
            </div>
        </div>
    )
}