(function ($) {
  "use strict";

  var color = Chart.helpers.color;

  // creating chart shadow
  var draw = Chart.controllers.line.prototype.draw;
  Chart.controllers.line = Chart.controllers.line.extend({
    draw: function () {
      draw.apply(this, arguments);
      var ctx = this.chart.chart.ctx;

      var showShadow = ($(ctx.canvas).data('shadow')) ? $(ctx.canvas).data('shadow') : 'no';
      var chartType = ($(ctx.canvas).data('type')) ? $(ctx.canvas).data('type') : 'area';

      if (showShadow == 'yes' && chartType == 'area') {
        var _fill = ctx.fill;
        ctx.fill = function () {
          ctx.save();
          ctx.shadowColor = color('#5c5c5c').alpha(0.5).rgbString();
          ctx.shadowBlur = 16;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
          _fill.apply(this, arguments);
          ctx.restore();
        }
      } else if (showShadow == 'yes' && chartType == 'line') {
        var _stroke = ctx.stroke;
        ctx.stroke = function () {
          ctx.save();
          ctx.shadowColor = '#07C';
          ctx.shadowBlur = 10;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 4;
          _stroke.apply(this, arguments);
          ctx.restore();
        }
      }
    }
  });

  var defaultOptions = {
    responsive: true,
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        padding: 20
      }
    },
    onResize: function (chart, size) {
      if (chart.config.type == 'pie' || chart.config.type == 'doughnut' || chart.config.type == 'radar' || chart.config.type == 'polarArea') {

        if (size.height < 190) {
          chart.config.options.legend.display = false;
        } else {
          chart.config.options.legend.display = true;
        }

        chart.update();
      }
    },
    layout: {
      padding: 0
    }
  };

  
  

  // Bar Chart
  var ctxBarChart = document.getElementById('cjs-barchart').getContext('2d');
  var optsBarChart = $.extend({}, defaultOptions);
  optsBarChart.tooltips = {
    mode: 'index',
    axis: 'y'
  };
  optsBarChart.legend = {
    display: true
  };
  optsBarChart.scales = {
    xAxes: [{
      display: true,
      categoryPercentage: 1.0,
      barPercentage: 0.6
    }],
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left'
      }
    ]
  };

  new Chart(ctxBarChart, {
    type: 'bar',
    data: {
      labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
      datasets: [
        {
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Series A',
          backgroundColor: 'rgb(54, 162, 235)'
        },
        {
          data: [28, 48, 40, 19, 86, 27, 70],
          label: 'Series B',
          backgroundColor: 'rgb(255, 205, 86)'
        }
      ]
    },
    options: optsBarChart
  });

 // Bar Chart
  var ctxBarChart2 = document.getElementById('cjs-barchart2').getContext('2d');
  var optsBarChart2 = $.extend({}, defaultOptions);
  optsBarChart2.tooltips = {
    mode: 'index',
    axis: 'y'
  };
  optsBarChart2.legend = {
    display: true
  };
  optsBarChart2.scales = {
    xAxes: [{
      display: true,
      categoryPercentage: 1.0,
      barPercentage: 0.6
    }],
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left'
      }
    ]
  };

  new Chart(ctxBarChart2, {
    type: 'bar',
    data: {
      labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
      datasets: [
        {
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Series A',
          backgroundColor: 'rgb(54, 162, 235)'
        },
        {
          data: [28, 48, 40, 19, 86, 27, 70],
          label: 'Series B',
          backgroundColor: 'rgb(255, 205, 86)'
        }
      ]
    },
    options: optsBarChart2
  });

 
})(jQuery);