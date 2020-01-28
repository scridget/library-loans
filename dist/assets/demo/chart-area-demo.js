// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar 13"],
    datasets: [{
      label: "Received",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [1, 0, 2, 3, 1, 4, 2, 2, 3, 1, 0, 0, 3],
    },{
      label: "Shipped",
      lineTension: 0.3,
      backgroundColor: "rgba(40, 167, 69, 0.2)",
      borderColor: "rgba(40, 167, 69, 1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(40, 167, 69, 1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(40, 167, 69, 1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,// 20 - 30/month
      data: [3, 5, 3, 4, 6, 10, 5, 7, 5, 3, 0, 0, 7],
    },{
      label: "Rejected",
      lineTension: 0.3,
      backgroundColor: "rgba(255, 193, 7,0.2)",
      borderColor: "rgba(255, 193, 7,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(255, 193, 7,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(255, 193, 7,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [4, 2, 1, 0, 0, 5, 10, 6, 3, 2, 0, 0, 5],
    }],
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
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15,
          maxTicksLimit: 5
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
