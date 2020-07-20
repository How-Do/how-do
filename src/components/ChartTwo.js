import React, { useState, useEffect } from "react";
import {Bar} from "react-chartjs-2";
import axios from 'axios';

function ChartTwo(props){
    const [resData, setResData] = useState([])
    const [homeImprovement, setHomeImprovement] = useState(0)
    const [hobbies, setHobbies] = useState(0)
    const [lifeHacks, setLifeHacks] = useState(0)
    const [foodAndDrink, setFoodAndDrink] = useState(0)
    const [outdoors, setOutdoors] = useState(0)
    const [state, setState] = useState({
        chartData:
          {
            labels: ['Home Improvement',
                     'Hobbies',
                     'Life Hacks',
                     'Food & Drink',
                     'Outdoors'],
            datasets: [
              {
                label: ['Home Improvement',
                'Hobbies',
                'Life Hacks',
                'Food & Drink',
                'Outdoors'],
                data: [
                    homeImprovement,
                     hobbies,
                     lifeHacks,
                     foodAndDrink,
                     outdoors
                ],
                backgroundColor: [
                  "#637462",
                  "#6D835C",
                  "#4E763B",
                  "#729C65",
                  "#193C0D",
                  "#4CBB17",
                ],
                boarderWidth: 1,
                borderColor: "#ffffff",
                hoverBorderWidth: 3,
                hoverBorderColor: "#000",
              },
            ],
          },
        count: 0,
      }) 
      
      useEffect(() => {
        const array = resData
        const newArray = array.reduce(
            (acc, e) => {
              if (acc[0].includes(e.category)) {
                acc[1][acc[0].indexOf(e.category)]++;
              } else {
                acc[0].push(e.category);
                acc[1].push(1);
              }
              return acc;
            },
            [[], []]
          )
          setState({
            chartData:
              {
                labels: 
                //['Home Improvement',
                // 'Hobbies',
                // 'Life Hacks',
                // 'Food & Drink',
                // 'Outdoors'],
                
                 newArray[0],
                datasets: [
                  {
                    label: '',
                    data: newArray[1],
                    backgroundColor: [
                        "#637462",
                        "#6D835C",
                        "#4E763B",
                        "#729C65",
                        "#193C0D",
                        "#4CBB17",
                    ],
                    boarderWidth: 1,
                    borderColor: "#ffffff",
                    hoverBorderWidth: 3,
                    hoverBorderColor: "#000",
                  },
                ],
              }
          })
      },[resData])
      
      useEffect(() => {
        axios
          .get(`/howdo/chartdata/${2}`)
          .then((res) => 
        //   console.log(res.data))
           setResData(res.data))
    
          .catch((error) => console.log(error))
      },[])
      console.log(resData)

    return(
        <div className="chart-container">
        <div className="chart" 
        style={{
            height:'350px', 
            width:'350px',
            padding: '10px',
            position: 'center',
        }}
        >
        <Bar
            data={state.chartData}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              title: {
                display: true,
                text: "Posts per Category",
                fontSize: 28,
                position: "top",
                fontFamily: 'Helvetica',
                marginBottom: 10,
                fontColor: 'white',
              },
              legend: {
                display: false,
                position: 'bottom',
              },
              scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                        autoSkip: true,
                        display: true,
                        fontColor: 'white',
                        },
                    gridLines: {
                        display: false,
                        }
                    }],
                xAxes: [{
                    ticks: {
                        display:true,
                        fontColor: 'white',
                    },
                    gridLines: {
                        display: false,
                    }
                }],
                }
            }}
          />
        </div>
        
      </div>
    )
}

export default ChartTwo;