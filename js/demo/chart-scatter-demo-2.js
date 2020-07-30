// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("scatterSpeed");
var scatterSpeed = new Chart(ctx, {
  type: 'scatter',
  data: {
            datasets: [{
                label: 'Scatter Dataset',
                pointBackgroundColor: ['yellow', 'blue', 'red', 'green', 'orange', 'indigo'],
                data: [
                  { x: 10, y: 0 }, 
                    { x: 0, y: 10 }, 
                    { x: 3, y: 8 }, 
                    { x: 1, y: 5 }, 
                    { x: 4, y: 5 },
                    { x: 9, y: 1 }, 
                    { x: 8, y: 3 }, 
                    { x: 5, y: 6 }, 
                    { x: 1, y: 6 }
                ]
            }]
        },
        options: {
          legend: {
            display: false
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