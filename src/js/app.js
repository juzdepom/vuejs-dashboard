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
  // On click, remove class on active element, add it to the new one

  $('.panel-left a').click(function(e) {

    $('.panel-left a.selected').removeClass('selected');
    $(this).addClass('selected');

    var dashboard = $(this).data("dashboard");

    $(".dashboard").hide();

    $("#" + dashboard).show();

    var title = $(this).data('title');
    $("#title").text(title);

    // Scroll to anchor
    //$('html,body').animate({scrollTop: $($(this).attr('href')).offset().top - 70},'slow');

    e.preventDefault();
    return false;

  });

  // On scroll, remove class on active element and add it to the new one

  $(document).scroll(function() {
   
   var position = Math.floor($(this).scrollTop() / 800) + 1;

   $('.panel-left a.selected').removeClass('selected');
   $('.panel-left a.link-' + position).addClass('selected');
  });




});
