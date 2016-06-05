$(function () {

  'use strict';

  /* ChartJS
   * -------
   * Here we will create a few charts using ChartJS
   */

  //-----------------------
  //- MONTHLY SALES CHART -
  //-----------------------

  // Get context with jQuery - using jQuery's .get() method.
  var salesChartCanvas = $("#salesChart").get(0).getContext("2d");
  // This will get the first returned node in the jQuery collection.
  var salesChart = new Chart(salesChartCanvas);

  var salesChartData = {
    labels: ["janvier","fevrier","mars","avril","mai","juin"],
    datasets: [
    {
        label: "Moyenne",
        lineColor: "rgba(102,102,102, 1)",
        fillColor: "rgba(102,102,102, 1)",
        strokeColor: "rgba(102,102,102, 1)",
        pointColor: "#555",
        pointStrokeColor: "rgba(102,102,102,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,200,1)",
        data: [60,70,80,85,80,95]
      },
      {
        label: "Malcolm",
        lineColor: "rgb(240,35,17)",
        fillColor: "rgb(240,35,17)",
        strokeColor: "rgb(240,35,17)",
        pointColor: "rgb(240,35,17)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgb(220,220,220)",
        data: [40,60,50,70,70,90]
      }
      
    ]
  };

  var salesChartOptions = {
    //Boolean - If we should show the scale at all
    showScale: true,
    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: false,
    //String - Colour of the grid lines
    scaleGridLineColor: "rgba(0,0,0,.05)",
    //Number - Width of the grid lines
    scaleGridLineWidth: 1,
    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,
    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,
    //Boolean - Whether the line is curved between points
    bezierCurve: true,
    //Number - Tension of the bezier curve between points
    bezierCurveTension: 0.3,
    //Boolean - Whether to show a dot for each point
    pointDot: false,
    //Number - Radius of each point dot in pixels
    pointDotRadius: 4,
    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth: 1,
    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius: 20,
    //Boolean - Whether to show a stroke for datasets
    datasetStroke: true,
    //Number - Pixel width of dataset stroke
    datasetStrokeWidth: 2,
    //Boolean - Whether to fill the dataset with a color
    datasetFill: true,
    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%=datasets[i].label%></li><%}%></ul>",
    //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: true,
    //Boolean - whether to make the chart responsive to window resizing
    responsive: true,
  };

  //Create the line chart
  salesChart.Line(salesChartData, salesChartOptions);

  legend(document.getElementById("js-legend"), salesChartData);


  //---------------------------
  //- END MONTHLY SALES CHART -
  //---------------------------

// CALENDAR

//The Calender
  $("#calendar").datepicker({
    "multidate": true,
    "defaultViewDate": {
      "year": 2016,
      "month": 6,
      "day": 5
    }
  });

});