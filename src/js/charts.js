$(document).foundation()

//----------------------------COLORS----------------------------
window.chartColors = {
  navy: 'rgba(32, 32, 137, 100)',
  orange: 'rgba(230, 131, 67, 100)',
  grass: 'rgba(124, 194, 116, 100)',
  aqua: 'rgba(163, 232, 192, 100)',
  olive: 'rgba(188, 202, 92, 100)',
  pink: 'rgba(205, 103, 153, 100)',
  blue: 'rgba(90, 144, 207, 100)',
}

window.indexedChartColors = [
  window.chartColors.navy,
  window.chartColors.aqua,
  window.chartColors.blue,
  window.chartColors.olive,
  window.chartColors.grass,
  window.chartColors.orange,
  window.chartColors.pink,
];
//----------------------------DATASHEET----------------------------
$(document).ready(function() {
  var jqxhr = $.get( "http://data.mymilkcrate.com/tommy/report.json?" + Math.random(), function(data) {
    console.log(data);
    //$.each(data.eventsByDay, function(index, event) {
      event = data.eventsByDay[4]
      console.log(event);
      // if(index>0)
      //   return;
//----------------------------EVENTSBYDAY----------------------------
      datasets = []
      if (event.datasets.length > 0) {
        $.each(event.datasets, function(i, dataset) {
          datasets.push({
            label: dataset.name,
            data: dataset.values,
            backgroundColor: window.indexedChartColors[i],
            borderColor: window.indexedChartColors[i],
            fill: false,
          })
        });
      } else {
        datasets.push({
          label: "Events",
          backgroundColor: window.chartColors.red,
          borderColor: window.chartColors.red,
          data: event.values,
          fill: false,
        });
      }

      var config = {
        type: 'bar',
        data: {
          labels: event.dates,
          datasets: datasets
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          title:{
            display: false,
          },
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          hover: {
            mode: 'nearest',
            intersect: true
          },
          scales: {
            xAxes: [{
              display: true,
              stacked: event.datasets.length > 0,
              scaleLabel: {
                display: true,
                labelString: 'Day'
              }
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Occurences'
              }
            }]
          }
        }
      };

      console.log(event.chart);
      var ctx = document.getElementById('testChart').getContext("2d");
      window.pointsChart = new Chart(ctx, config);
    //});

  });
});
