// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("line");
var line = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["1965", "1970", "1975", "1980", "1985", "1990", "1995", "2000", "2005", "2010", "2015", "2020"],
    datasets: [{
      label: "Growth rate (%)",
      lineTension: false,
      fill: false,
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 10,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 10,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [2.005, 2.090, 1.865, 1.749, 1.749, 1.736, 1.510, 1.323, 1.247, 1.203, 1.168, 1.075],
    },
    // {
    //   label: "Another Dataset",
    //   lineTension: false,
    //   fill: false,
    //   backgroundColor: "rgba(204,102,0,0.2)",
    //   borderColor: "rgba(204,102,0,1)",
    //   pointRadius: 10,
    //   pointBackgroundColor: "rgba(204,102,0,1)",
    //   pointBorderColor: "rgba(255,255,255,0.8)",
    //   pointHoverRadius: 10,
    //   pointHoverBackgroundColor: "rgba(204,102,0,1)",
    //   pointHitRadius: 50,
    //   pointBorderWidth: 2,
    //   data: [3.005, 3.090, 2.865, 2.749, 2.749, 2.736, 2.510, 2.323, 2.247, 2.203, 2.168, 2.075],
    // }
    ],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
      }],
      yAxes: [{
        ticks: {
          min: 0,
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: true
    }
  }
});
