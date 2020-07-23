import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { useSelector } from "react-redux";

function ChartThree() {
  const [upvoteCount, setUpvoteCount] = useState(0);
  const [downvoteCount, setDownvoteCount] = useState(0);
  const [state, setState] = useState({});

  const userId = useSelector((reduxState) =>
    reduxState.reducer.user ? reduxState.reducer.user.user_id : null
  );

  useEffect(() => {
    axios
      .get(`/howdo/chartupvote/${userId}`)
      .then((res) =>
        // console.log(res.data))
        setUpvoteCount(+res.data.count)
      )
      .catch((error) => console.log(error));
    axios
      .get(`/howdo/chartdownvote/${userId}`)
      .then((res) => setDownvoteCount(+res.data.count))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setState({
      chartData: {
        labels: ["Upvotes", "Downvotes"],
        datasets: [
          {
            label: "User Info",
            data: [upvoteCount, downvoteCount],
            backgroundColor: ["#351c75", "#8e7cc3"],
            borderWidth: 0,
            borderColor: "#ffffff",
            hoverBorderWidth: 1,
            hoverBorderColor: "#ffffff",
          },
        ],
      },
      count: 0,
    });
  }, [upvoteCount, downvoteCount]);
  return (
    <div className="chart-container">
      <div
        className="chart"
        style={{
          height: "350px",
          width: "350px",
          padding: "10px",
          position: "center",
        }}
      >
        <Doughnut
          data={state.chartData}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            title: {
              display: true,
              text: "Lifetime Upvotes & Downvotes",
              fontSize: 16,
              position: "top",
              fontFamily: "Helvetica",
              marginBottom: 10,
              fontColor: "#ffffff",
            },
            legend: {
              display: true,
              position: "bottom",
              textColor: "#ffffff",
              borderWidth: 0,
              labels: {
                fontColor:'#ffff',
              }
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    autoSkip: true,
                    display: false,
                    fontColor: "white",
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  ticks: {
                    display: false,
                    fontColor: "white",
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
}

export default ChartThree;
