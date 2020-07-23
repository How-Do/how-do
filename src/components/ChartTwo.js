import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import { useSelector } from "react-redux";

function ChartTwo(props) {
  const [resData, setResData] = useState([]);
  const [homeImprovement, setHomeImprovement] = useState(0);
  const [hobbies, setHobbies] = useState(0);
  const [lifeHacks, setLifeHacks] = useState(0);
  const [foodAndDrink, setFoodAndDrink] = useState(0);
  const [outdoors, setOutdoors] = useState(0);

  const userId = useSelector((reduxState) =>
    reduxState.reducer.user ? reduxState.reducer.user.user_id : null
  );

  const [state, setState] = useState({
    chartData: {
      labels: [
        "Home Improvement",
        "Hobbies",
        "Life Hacks",
        "Food & Drink",
        "Outdoors",
      ],
      datasets: [
        {
          label: [
            "Home Improvement",
            "Hobbies",
            "Life Hacks",
            "Food & Drink",
            "Outdoors",
          ],
          data: [homeImprovement, hobbies, lifeHacks, foodAndDrink, outdoors],
          backgroundColor: [
            "#03254c",
            "#1167b1",
            "#2a9df4",
            "#59bfff",
            "#d0efff",
          ],
          boarderWidth: 1,
          borderColor: "#ffffff",
          hoverBorderWidth: 1,
          hoverBorderColor: "#ffffff",
        },
      ],
    },
    count: 0,
  });

  useEffect(() => {
    const array = resData;
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
    );
    setState({
      chartData: {
        labels:
          ['Home Improvement',
          'Hobbies',
          'Life Hacks',
          'Food & Drink',
          'Outdoors'],

          // newArray[0],
        datasets: [
          {
            label: "",
            data: newArray[1],
            backgroundColor: [
              "#03254c",
              "#1167b1",
              "#2a9df4",
              "#59bfff",
              "#d0efff",
            ],
            borderWidth: 0,
            borderColor: false,
            hoverBorderWidth: 1,
            hoverBorderColor: "#ffffff",
          },
        ],
      },
    });
  }, [resData]);

  useEffect(() => {
    axios
      .get(`/howdo/chartdata/${userId}`)
      .then((res) =>
        //   console.log(res.data))
        setResData(res.data)
      )

      .catch((error) => console.log(error));
  }, []);
  console.log(resData);

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
        <Pie
          data={state.chartData}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            title: {
              display: true,
              text: "Posts per Category",
              fontSize: 16,
              position: "top",
              fontFamily: "Helvetica",
              marginBottom: 10,
              fontColor: "white",
            },
            legend: {
              display: true,
              position: "bottom",
              fontColor: "white",
              borderWidth: 0,
              borderColor: false,
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

export default ChartTwo;
