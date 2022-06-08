import { React, useState } from 'react';
import { NavBar } from './Navigation';
import '../css/dataVis.css';

import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJs } from 'chart.js/auto'

import { getDatabase, ref, onValue } from 'firebase/database'
//total_pop => all just do totals no need location

function YearFilters(props) {
    const filterArr = props.filterLabels.map((label, index) => {
        return <YearFilter key={label} filterLabel={label} checked={props.checked} handleYear={props.handleYear} index={index} />
    })
    return (
        <div className="filter">
            <h2>{props.category}</h2>
            <div className="filterInner">
                {filterArr}
            </div>
        </div>
    )
}

function YearFilter(props) {
    return (
        <div>
            <input type="checkbox" id={props.filterLabel} checked={props.checked[props.index]} onChange={() => {props.handleYear(props.index)}} />
            <label htmlFor={props.filterLabel}>{props.filterLabel}</label>
        </div>
    )
}

function DemFilters(props) {
    const filterArr = props.filterLabels.map((label, index) => {
        return <DemFilter key={label} filterLabel={label} checked={props.checked} handleDem={props.handleDem} index={index} />
    })
    return (
        <div className="filter">
            <h2>{props.category}</h2>
            <div className="filterInner">
                {filterArr}
            </div>
        </div>
    )
}

function DemFilter(props) {
    return (
        <div>
            <input type="checkbox" id={props.filterLabel} checked={props.checked[props.index]} onChange={() => {props.handleDem(props.index)}} />
            <label htmlFor={props.filterLabel}>{props.filterLabel}</label>
        </div>
    )
}

function FoodFilters(props) {
    const filterArr = props.filterLabels.map((label, index) => {
        return <FoodFilter key={label} filterLabel={label} checked={props.checked} handleFood={props.handleFood} index={index} />
    })
    return (
        <div className="filter">
            <h2>{props.category}</h2>
            <div className="filterInner">
                {filterArr}
            </div>
        </div>
    )
}

function FoodFilter(props) {
    return (
        <div>
            <input type="checkbox" id={props.filterLabel} checked={props.checked[props.index]} onChange={() => {props.handleFood(props.index)}} />
            <label htmlFor={props.filterLabel}>{props.filterLabel}</label>
        </div>
    )
}

function MakeChart(props) {
    const data = {
        labels: props.labels,
        datasets: props.datasets
    }
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                fontSize: 30,
                text: "Amount of Food Group Consumed (g)",
            }
        }
    }
    return (
        <div>
            <Bar data={data} options={options}/>
        </div>
    )
}


export function Data() {
    const yearLabel = ["2015-16", "2017-18"]
    const demLabel = ["All", "Children (2-19)", "Adults (20-64)", "Seniors (65+)"]
    const foodLabel = ["Added Sugar", "Fats", "Oils", "Dairy", "Fruit", "Vegetables", "Grains", "Protein"]
    const colours = ["rgba(24, 157, 201, 0.5)", "rgba(224, 204, 219, 0.5)", "rgba(219, 84, 97, 0.5)", "rgba(240, 157, 81, 0.5)"]
    const borderColours = ["#189DC9", "#E0CCDB", "#DB5461", "#F09D51"]

    const [years, setYears] = useState([true, false]);
    const [dems, setDems] = useState(new Array(demLabel.length).fill(true));
    const [foods, setFoods] = useState(new Array(foodLabel.length).fill(true));
    const [labels, setLabels] = useState([]);
    const [datasets, setDatasets] = useState([]);

    function FilterData() {
        const db = getDatabase();
        const demSelect = [];
        dems.forEach((bool, index) => {
            if (bool) {
                demSelect.push(demLabel[index])
            }
        })

        const yearSelect = [];
        years.forEach((bool, index) => {
            if (bool) {
                yearSelect.push(yearLabel[index])
            }
        })

        const foodSelect = [];
        foods.forEach((bool, index) => {
            if (bool) {
                foodSelect.push(foodLabel[index])
            }
        })
        setLabels(foodSelect)

        // filter data based on checkboxes
        const newDataset = []
        demSelect.forEach((demo, demoIndex) => {
            let datasetLabel = "";
            let datasetDatas = new Array(foodSelect.length);
            const path = demo.split(" ")[0].toLowerCase();
            const dbRef = ref(db, path + "/data");
            onValue(dbRef, (snapshot) => {
                snapshot.forEach((child) => {
                    let data = child.val();
                    yearSelect.forEach((year) => {
                        if (data.Year === year) {
                            foodSelect.forEach((food, index) => {
                                if (data["Food Group"] === food) {
                                    datasetLabel = demo + " in " + year;
                                    datasetDatas[index] = data.Amount      
                                }
                            })
                        }
                    })
                })
            })

            let toPush = {
                label: datasetLabel,
                data: datasetDatas,
                backgroundColor: colours[demoIndex],
                borderColor: borderColours[demoIndex],
                borderWidth: 1
            }
            newDataset.push(toPush);
        })
        setDatasets(newDataset);

    }

    function handleYear(position) {
        const newYears = years.map((item, index) => {
            if (position === index) {
               return item = !item
            } else {
                return !item
            }
        })
        setYears(newYears)
    }

    function handleDem(position) {
        const newDems = dems.map((item, index) => {
            if (position === index) {
               return item = !item
            } else {
                return item
            }
        })
        setDems(newDems)
    }

    function handleFood(position) {
        const newFoods = foods.map((item, index) => {
            if (position === index) {
               return item = !item
            } else {
                return item
            }
        })
        setFoods(newFoods)
    }
    return (
        <div className="container">
            <NavBar/>
            <div className="filters">
                <div className="filterContainer">
                    <YearFilters category="Year" filterLabels={yearLabel} checked={years} handleYear={handleYear}/>
                    <DemFilters category="Demographic" filterLabels={demLabel} checked={dems} handleDem={handleDem}/>
                    <FoodFilters category="Food Groups" filterLabels={foodLabel} checked={foods} handleFood={handleFood}/>
                    <button className="data-page" type="button" onClick={FilterData}>See Results</button>
                </div>
            </div>
            <div className="vis">
                <MakeChart labels={labels} datasets={datasets}/>
            </div>
        </div>
    )
}