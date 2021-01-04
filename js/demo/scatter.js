// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("scatter");
var scatter = new Chart(ctx, {
  type: 'scatter',
  data: {
            datasets: [{
                label: 'Comparison (population in billions, age in years)',
                fill: false,
                showLine: false,
                backgroundColor: "red",
                borderColor: "transparent",
                pointBackgroundColor: ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'],
                data: [
                  { x: 7.71, y: 72.58 }, 
                    { x: 7.13, y: 70.69 }, 
                    { x: 6.54, y: 67.94 }, 
                    { x: 5.50, y: 64.51 },
                    { x: 4.96, y: 63.27 }, 
                    { x: 3.41, y: 54.08 }, 
                    { x: 2.98, y: 49.76 }, 
                    { x: 1.78, y: 34.10 }, 
                ]
            }]
        },
        options: {
          legend: {
            display: true
          },
            scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom',
                    ticks: {
                    beginAtZero: true
                    }
                }]
            }
        }
    });