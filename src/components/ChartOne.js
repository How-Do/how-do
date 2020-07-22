import React, { useState, useEffect } from "react";
import {Bar} from "react-chartjs-2";
import axios from 'axios';
import { useSelector } from 'react-redux'

function ChartOne(props){
    const [postCount, setPostCount] = useState(0)
    const [commentCount, setCommentCount] = useState(0)
    const [state, setState] = useState({})
    
    const userId = useSelector(
      (reduxState) => reduxState.reducer.user ? reduxState.reducer.user.user_id : null
    )

    useEffect(() => {
      axios
        .get(`/howdo/chartpost/${userId}`)
        .then((res) => 
        // console.log(res.data))
        setPostCount(+res.data.count))
        .catch((error) => console.log(error))
      axios
        .get(`/howdo/chartcomment/${userId}`)
        .then((res) => setCommentCount(+res.data.count))
        .catch((error) => console.log(error))
    }, [])

    useEffect(() => {
      setState({
        chartData:
          {
            // labels: ["Casual Learner", "Regular Scholar", "Devoted Savant"],
            labels: ["Total Questions Asked", "Total Answers Given"],
            datasets: [
              {
                label: "User Info",
                data: [
                  postCount,
                  commentCount
                ],
                backgroundColor: [
                  // "#637462",
                  // "#6D835C",
                  // "#4E763B",
                  // "#729C65",
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
    }, [postCount, commentCount])
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
                text: "Lifetime Questions and Answers",
                fontSize: 28,
                position: "top",
                fontFamily: 'Helvetica',
                marginBottom: 10,
                fontColor: '#ffffff',
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

export default ChartOne;