import React from 'react';
import { NavBar } from './Navigation';


function Filter(props) {
    return (
        <div className="filter">
            <h2>Filter Category</h2>
            <div className="filterInner">
                <input type="checkbox" id="filter1" name="filter1" value="filter1"/>
                <label for="filter1"> filter 1</label>
                <input type="checkbox" id="filter2" name="filter2" value="filter2"/>
                <label for="filter2"> filter 2</label>
                <input type="checkbox" id="filter3" name="filter3" value="filter3"/>
                <label for="filter3"> filter 3</label>
            </div>
            <div className="filterInner">
                <input type="checkbox" id="filter1" name="filter1" value="filter1"/>
                <label for="filter1"> filter 1</label>
                <input type="checkbox" id="filter2" name="filter2" value="filter2"/>
                <label for="filter2"> filter 2</label>
                <input type="checkbox" id="filter3" name="filter3" value="filter3"/>
                <label for="filter3"> filter 3</label>
            </div>
        </div>
    )
}

export function Data() {
    return (
        <div>
            <NavBar/>
            <div className="container">
                {/* {filters} */}
                <div class="vis">
                    <img src="img/emissions2.png" alt="image of co2 emissions by country"/>
                </div>
            </div>
        </div>
    )
}