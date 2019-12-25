import { lightTheme } from './../Shared/Styles';

const blue = '#061a44';
const grey = '#A0A0A0';

export default {
  colors: [
    '#61d936',
    '#552ccb',
    '#1163c9',
    '#04a1ee',
    '#08c6e0',
    '#146b9e',
    '#f376c1',
    '#1b2839'
  ],
  chart: {
    backgroundColor: lightTheme ? 'white' : blue,
    borderColor: '#000000',
    borderWidth: 0,
    className: 'dark-container',
    plotBackgroundColor: lightTheme ? 'white' : blue,
    plotBorderWidth: 0
  },
  title: {
    style: {
      color: lightTheme ? blue : '#C0C0C0',
      font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
    }
  },
  subtitle: {
    style: {
      color: '#666666',
      font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
    }
  },
  xAxis: {
    gridLineColor: '#333333',
    gridLineWidth: 0,
    labels: {
      style: {
        color: lightTheme ? blue : grey
      }
    },
    lineColor: lightTheme ? blue : grey,
    tickColor: lightTheme ? blue : grey,
    title: {
      style: {
        color: lightTheme ? blue : '#CCC',
        fontWeight: 'bold',
        fontSize: '12px',
        fontFamily: 'Trebuchet MS, Verdana, sans-serif'
      }
    }
  },
  yAxis: {
    gridLineColor: '#333333',
    labels: {
      style: {
        color: lightTheme ? blue : grey
      }
    },
    lineColor: lightTheme ? blue : grey,
    minorTickInterval: null,
    tickColor: lightTheme ? blue : grey,
    tickWidth: 1,
    title: {
      style: {
        color: lightTheme ? blue : '#CCC',
        fontWeight: 'bold',
        fontSize: '12px',
        fontFamily: 'Trebuchet MS, Verdana, sans-serif'
      }
    }
  },
  tooltip: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    style: {
      color: '#F0F0F0'
    }
  },
  toolbar: {
    itemStyle: {
      color: 'silver'
    }
  },
  plotOptions: {
    line: {
      dataLabels: {
        color: lightTheme ? blue : '#CCC'
      },
      marker: {
        lineColor: '#333'
      }
    },
    spline: {
      marker: {
        lineColor: '#333'
      }
    },
    scatter: {
      marker: {
        lineColor: '#333'
      }
    },
    candlestick: {
      lineColor: 'white'
    }
  },
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false
  },
  labels: {
    style: {
      color: lightTheme ? blue : '#CCC'
    }
  },
  navigation: {
    buttonOptions: {
      symbolStroke: '#DDDDDD',
      theme: {
        fill: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0.4, '#606060'],
            [0.6, '#333333']
          ]
        },
        stroke: '#000000'
      }
    }
  },
  // scroll charts
  rangeSelector: {
    buttonTheme: {
      fill: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0.4, '#888'],
          [0.6, '#555']
        ]
      },
      stroke: '#000000',
      style: {
        color: lightTheme ? blue : '#CCC',
        fontWeight: 'bold'
      },
      states: {
        hover: {
          fill: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0.4, '#BBB'],
              [0.6, '#888']
            ]
          },
          stroke: '#000000',
          style: {
            color: 'white'
          }
        },
        select: {
          fill: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0.1, '#000'],
              [0.3, '#333']
            ]
          },
          stroke: '#000000',
          style: {
            color: 'yellow'
          }
        }
      }
    },
    inputStyle: {
      backgroundColor: '#333',
      color: 'silver'
    },
    labelStyle: {
      color: 'silver'
    }
  },
  navigator: {
    handles: {
      backgroundColor: '#666',
      borderColor: '#AAA'
    },
    outlineColor: lightTheme ? blue : '#CCC',
    maskFill: 'rgba(16, 16, 16, 0.5)',
    series: {
      color: '#7798BF',
      lineColor: '#A6C7ED'
    }
  },
  scrollbar: {
    barBackgroundColor: {
      linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
      stops: [
        [0.4, '#888'],
        [0.6, '#555']
      ]
    },
    barBorderColor: lightTheme ? blue : '#CCC',
    buttonArrowColor: lightTheme ? blue : '#CCC',
    buttonBackgroundColor: {
      linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
      stops: [
        [0.4, '#888'],
        [0.6, '#555']
      ]
    },
    buttonBorderColor: lightTheme ? blue : '#CCC',
    rifleColor: '#FFF',
    trackBackgroundColor: {
      linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
      stops: [
        [0, '#000'],
        [1, '#333']
      ]
    },
    trackBorderColor: '#666'
  }
};
