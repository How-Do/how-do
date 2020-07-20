import React, { useState, useEffect } from "react";
import {Bar} from "react-chartjs-2";
import axios from 'axios';

function BarChart(props){
    const [postCount, setPostCount] = useState(0)
    const [commentCount, setCommentCount] = useState(0)
    const [state, setState] = useState({})
    
    useEffect(() => {
      axios
        .get(`/howdo/chartpost/${1}`)
        .then((res) => 
        // console.log(res.data))
        setPostCount(+res.data.count))
        .catch((error) => console.log(error))
      axios
        .get(`/howdo/chartcomment/${1}`)
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
                  "#617872",
                  "#9eb29a",
                  "#b3cfcc",
                  "#a0cfa5",
                  "#6a7086",
                  "#a8a8ad",
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
                text: "Plants per Room",
                fontSize: 28,
                position: "top",
                fontFamily: 'arvo',
                marginBottom: 10,
                color: 'black',
              },
              legend: {
                display: true,
                position: 'bottom',
              },
              scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                        autoSkip: true,
                        display: true,
                        },
                    gridLines: {
                        display: false,
                        }
                    }],
                xAxes: [{
                    ticks: {
                        display:true,
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

export default BarChart