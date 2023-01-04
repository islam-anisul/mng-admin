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

// Bar Chart3
  var ctxBarChart3 = document.getElementById('cjs-barchart3').getContext('2d');
  var optsBarChart3 = $.extend({}, defaultOptions);
  optsBarChart3.tooltips = {
    mode: 'index',
    axis: 'y'
  };
  optsBarChart.legend = {
    display: true
  };
  optsBarChart3.scales = {
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

  new Chart(ctxBarChart3, {
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
    options: optsBarChart3
  });
  
// Bar Chart4
  var ctxBarChart4 = document.getElementById('cjs-barchart4').getContext('2d');
  var optsBarChart4 = $.extend({}, defaultOptions);
  optsBarChart4.tooltips = {
    mode: 'index',
    axis: 'y'
  };
  optsBarChart.legend = {
    display: true
  };
  optsBarChart4.scales = {
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

  new Chart(ctxBarChart4, {
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
    options: optsBarChart4
  });
  // Bar Chart4
  var ctxBarChart5 = document.getElementById('cjs-barchart5').getContext('2d');
  var optsBarChart5 = $.extend({}, defaultOptions);
  optsBarChart5.tooltips = {
    mode: 'index',
    axis: 'y'
  };
  optsBarChart.legend = {
    display: true
  };
  optsBarChart5.scales = {
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

  new Chart(ctxBarChart5, {
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
    options: optsBarChart5
  });
    
    // Bar Chart6
  var ctxBarChart6 = document.getElementById('cjs-barchart6').getContext('2d');
  var optsBarChart6 = $.extend({}, defaultOptions);
  optsBarChart6.tooltips = {
    mode: 'index',
    axis: 'y'
  };
  optsBarChart.legend = {
    display: true
  };
  optsBarChart6.scales = {
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

  new Chart(ctxBarChart6, {
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
    options: optsBarChart6
  });
     // Bar Chart
  var ctxBarChart7 = document.getElementById('cjs-barchart7').getContext('2d');
  var optsBarChart7 = $.extend({}, defaultOptions);
  optsBarChart7.tooltips = {
    mode: 'index',
    axis: 'y'
  };
  optsBarChart.legend = {
    display: true
  };
  optsBarChart7.scales = {
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

  new Chart(ctxBarChart7, {
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
    options: optsBarChart7
  });
    // Bar Chart
  var ctxBarChart8 = document.getElementById('cjs-barchart8').getContext('2d');
  var optsBarChart8 = $.extend({}, defaultOptions);
  optsBarChart8.tooltips = {
    mode: 'index',
    axis: 'y'
  };
  optsBarChart.legend = {
    display: true
  };
  optsBarChart8.scales = {
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

  new Chart(ctxBarChart8, {
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
    options: optsBarChart8
  });
    
    // Bar Chart
  var ctxBarChart9 = document.getElementById('cjs-barchart9').getContext('2d');
  var optsBarChart9 = $.extend({}, defaultOptions);
  optsBarChart9.tooltips = {
    mode: 'index',
    axis: 'y'
  };
  optsBarChart.legend = {
    display: true
  };
  optsBarChart9.scales = {
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

  new Chart(ctxBarChart9, {
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
    options: optsBarChart9
  });
     // Bar Chart
  var ctxBarChart10 = document.getElementById('cjs-barchart10').getContext('2d');
  var optsBarChart10 = $.extend({}, defaultOptions);
  optsBarChart10.tooltips = {
    mode: 'index',
    axis: 'y'
  };
  optsBarChart.legend = {
    display: true
  };
  optsBarChart10.scales = {
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

  new Chart(ctxBarChart10, {
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
    options: optsBarChart10
  });
    
})(jQuery);




























