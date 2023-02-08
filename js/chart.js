var dom = document.getElementById('chart1');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
// var app = {};

var option;

setTimeout(function () {
  option = {
    legend: {},
    tooltip: {
      trigger: 'axis',
      showContent: false
    },
    dataset: {
      source: [
        ['month', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        ['oj-1', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        ['oj-2', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
        ['oj-3', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
        ['oj-4', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: { gridIndex: 0 },
    grid: { top: '55%' },
    series: [
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'pie',
        id: 'pie',
        radius: '30%',
        center: ['50%', '25%'],
        emphasis: {
          focus: 'self'
        },
        label: {
          formatter: '{b}: {@1} ({d}%)'
        },
        encode: {
          itemName: 'month',
          value: '1',
          tooltip: '1'
        }
      }
    ]
  };
  myChart.on('updateAxisPointer', function (event) {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      const dimension = xAxisInfo.value + 1;
      myChart.setOption({
        series: {
          id: 'pie',
          label: {
            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
          },
          encode: {
            value: dimension,
            tooltip: dimension
          }
        }
      });
    }
  });
  myChart.setOption(option);
});

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);

var dom = document.getElementById('chart2');
    var myChart_2 = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    // var app = {};
    
    var option;

    setTimeout(function () {
  option = {
    legend: {},
    tooltip: {
      trigger: 'axis',
      showContent: false
    },
    dataset: {
      source: [
        ['month', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        ['oj-1', 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        ['oj-2', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
        ['oj-3', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
        ['oj-4', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: { gridIndex: 0 },
    grid: { top: '55%' },
    series: [
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'pie',
        id: 'pie',
        radius: '30%',
        center: ['50%', '25%'],
        emphasis: {
          focus: 'self'
        },
        label: {
          formatter: '{b}: {@1} ({d}%)'
        },
        encode: {
          itemName: 'month',
          value: '1',
          tooltip: '1'
        }
      }
    ]
  };
  myChart_2.on('updateAxisPointer', function (event) {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      const dimension = xAxisInfo.value + 1;
      myChart_2.setOption({
        series: {
          id: 'pie',
          label: {
            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
          },
          encode: {
            value: dimension,
            tooltip: dimension
          }
        }
      });
    }
  });
  myChart_2.setOption(option);
});

    if (option && typeof option === 'object') {
      myChart_2.setOption(option);
    }

window.addEventListener('resize', myChart_2.resize);

var dom = document.getElementById('chart3');
    var myChart_3 = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    // vr app = {};a
    
    var option;

    setTimeout(function () {
  option = {
    legend: {},
    tooltip: {
      trigger: 'axis',
      showContent: false
    },
    dataset: {
      source: [
        ['month', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        ['oj-1', 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        ['oj-2', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
        ['oj-3', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
        ['oj-4', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: { gridIndex: 0 },
    grid: { top: '55%' },
    series: [
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'pie',
        id: 'pie',
        radius: '30%',
        center: ['50%', '25%'],
        emphasis: {
          focus: 'self'
        },
        label: {
          formatter: '{b}: {@1} ({d}%)'
        },
        encode: {
          itemName: 'month',
          value: '1',
          tooltip: '1'
        }
      }
    ]
  };
  myChart_3.on('updateAxisPointer', function (event) {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      const dimension = xAxisInfo.value + 1;
      myChart_3.setOption({
        series: {
          id: 'pie',
          label: {
            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
          },
          encode: {
            value: dimension,
            tooltip: dimension
          }
        }
      });
    }
  });
  myChart_3.setOption(option);
});

    if (option && typeof option === 'object') {
      myChart_3.setOption(option);
    }

window.addEventListener('resize', myChart_3.resize);

var dom = document.getElementById('chart4');
    var myChart_4 = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    // var app = {};
    
    var option;

    setTimeout(function () {
  option = {
    legend: {},
    tooltip: {
      trigger: 'axis',
      showContent: false
    },
    dataset: {
      source: [
        ['month', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        ['oj-1', 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        ['oj-2', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
        ['oj-3', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
        ['oj-4', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: { gridIndex: 0 },
    grid: { top: '55%' },
    series: [
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'pie',
        id: 'pie',
        radius: '30%',
        center: ['50%', '25%'],
        emphasis: {
          focus: 'self'
        },
        label: {
          formatter: '{b}: {@1} ({d}%)'
        },
        encode: {
          itemName: 'month',
          value: '1',
          tooltip: '1'
        }
      }
    ]
  };
  myChart_4.on('updateAxisPointer', function (event) {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      const dimension = xAxisInfo.value + 1;
      myChart_4.setOption({
        series: {
          id: 'pie',
          label: {
            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
          },
          encode: {
            value: dimension,
            tooltip: dimension
          }
        }
      });
    }
  });
  myChart_4.setOption(option);
});

    if (option && typeof option === 'object') {
      myChart_4.setOption(option);
    }

window.addEventListener('resize', myChart_4.resize);

var dom = document.getElementById('chart5');
    var myChart_5 = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    // var app = {};
    
    var option;

    setTimeout(function () {
  option = {
    legend: {},
    tooltip: {
      trigger: 'axis',
      showContent: false
    },
    dataset: {
      source: [
        ['month', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        ['oj-1', 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        ['oj-2', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
        ['oj-3', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
        ['oj-4', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: { gridIndex: 0 },
    grid: { top: '55%' },
    series: [
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'pie',
        id: 'pie',
        radius: '30%',
        center: ['50%', '25%'],
        emphasis: {
          focus: 'self'
        },
        label: {
          formatter: '{b}: {@1} ({d}%)'
        },
        encode: {
          itemName: 'month',
          value: '1',
          tooltip: '1'
        }
      }
    ]
  };
  myChart_5.on('updateAxisPointer', function (event) {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      const dimension = xAxisInfo.value + 1;
      myChart_5.setOption({
        series: {
          id: 'pie',
          label: {
            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
          },
          encode: {
            value: dimension,
            tooltip: dimension
          }
        }
      });
    }
  });
  myChart_5.setOption(option);
});

    if (option && typeof option === 'object') {
      myChart_5.setOption(option);
    }

window.addEventListener('resize', myChart_5.resize);