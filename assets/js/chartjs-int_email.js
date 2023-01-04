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

  // Dynamic Chart
  var ctxDynamicChart1 = document.getElementById('cjs-dyanamic-chart1').getContext('2d');

  var optsDynamicChart1 = $.extend({}, defaultOptions);
  optsDynamicChart1.tooltips = {
    mode: 'index',
    axis: 'y'
  };

  optsDynamicChart1.legend = {
    display: false
  };

  optsDynamicChart1.scales = {
    xAxes: [{
      display: true,
    }],
    yAxes: [{
      display: true,
      ticks: {
        suggestedMin: 2000,
        suggestedMax: 11000,
        stepSize: 2000
      }
    }]
  };

  var cogsDynamicChart1 = {
    type: 'line',
    data: {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [
        {
          data: [199, 5611, 3949, 4298, 1294, 4394, 576],
          label: 'Series A',
          borderWidth: 4,
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, .5)',
          borderColor: '#3367d6'
        },
        {
          data: [1811, 9856, 5322, 2895, 9013, 3611, 9717],
          label: 'Series B',
          borderWidth: 5,
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, .5)',
          borderColor: '#59AA2B'
        },
        {
          data: [6101, 5009, 1319, 8911, 4346, 8036, 6757],
          label: 'Series C',
          borderWidth: 3,
          fill: true,
          backgroundColor: 'rgba(255, 205, 86, .5)',
          borderColor: '#ffc658'
        }
      ]
    },
    options: optsDynamicChart1
  };
  var dynamicChart1 = new Chart(ctxDynamicChart1, cogsDynamicChart1);

  var ctxDynamicChart2 = document.getElementById('cjs-dyanamic-chart2').getContext('2d');
  var optsDynamicChart2 = $.extend({}, defaultOptions);
  optsDynamicChart2.scales = {
    xAxes: [{
      display: false,
    }],
    yAxes: [{
      display: false
    }]
  };

  var cogsDynamicChart2 = {
    type: 'doughnut',
    design: 'pattern',
    data: {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [
        {
          data: [65, 59, 90, 81, 56, 55, 40],
          backgroundColor: [
            pattern.draw('square', '#ff6384'),
            pattern.draw('circle', '#3367d6'),
            pattern.draw('dot', '#FF901F'),
            pattern.draw('diamond', '#cc65fe'),
            pattern.draw('zigzag-horizontal', '#17becf'),
            pattern.draw('line-vertical', '#ffc658'),
            pattern.draw('triangle', '#59AA2B')
          ]
        }
      ]
    },
    options: optsDynamicChart2
  };

  var dynamicChart2 = new Chart(ctxDynamicChart2, cogsDynamicChart2);

  $('#toggle-view').on('click', function () {
    var chartColors = ['rgba(255, 99, 132, .5)', 'rgba(54, 162, 235, .5)', 'rgba(255, 205, 86, .5)'];

    if (cogsDynamicChart1.type == 'bar') {
      cogsDynamicChart1.type = 'line';

      cogsDynamicChart1.data.datasets.forEach(function (piece, i) {
        cogsDynamicChart1.data.datasets[i].backgroundColor = pattern.draw('line-vertical', chartColors[i]);
      });
    } else {
      cogsDynamicChart1.type = 'bar';

      cogsDynamicChart1.data.datasets.forEach(function (piece, i) {
        cogsDynamicChart1.data.datasets[i].backgroundColor = pattern.draw('line', chartColors[i]);
      });
    }

    if (cogsDynamicChart2.design == 'default') {
      cogsDynamicChart2.data.datasets[0].data = [65, 59, 90, 81, 56, 55, 40];
      cogsDynamicChart2.data.datasets[0].backgroundColor = [
        pattern.draw('square', '#ff6384'),
        pattern.draw('circle', '#3367d6'),
        pattern.draw('dot', '#FF901F'),
        pattern.draw('diamond', '#cc65fe'),
        pattern.draw('zigzag-horizontal', '#17becf'),
        pattern.draw('line-vertical', '#ffc658'),
        pattern.draw('triangle', '#59AA2B')
      ];

      cogsDynamicChart2.design = 'pattern';
      cogsDynamicChart2.options.cutoutPercentage = 50;
      cogsDynamicChart2.type = 'doughnut';
    } else {
      cogsDynamicChart2.data.datasets[0].data = [32, 69, 65, 36, 76, 33, 77];
      cogsDynamicChart2.data.datasets[0].backgroundColor = [
        'rgba(255, 99, 132, .5)',
        'rgba(255, 159, 64, .5)',
        'rgba(255, 205, 86, .5)',
        'rgba(75, 192, 192, .5)',
        'rgba(54, 162, 235, .5)',
        'rgba(153, 102, 255, .5)',
        'rgba(201, 203, 207, .6)'
      ];
      cogsDynamicChart2.design = 'default';
      cogsDynamicChart2.options.cutoutPercentage = 0;
      cogsDynamicChart2.type = 'pie';
    }

    dynamicChart1.update();
    dynamicChart2.update();
  });
})(jQuery);