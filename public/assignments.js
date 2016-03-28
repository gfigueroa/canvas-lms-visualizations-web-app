/*jslint browser: true*/
/*global $, Highcharts, cat_percent, values_percent, participations_by_day*/

$(function () {
    "use strict";
    $('#assignment-box-flipped').highcharts({
        chart: {
            type: 'boxplot',
            inverted: true
        },
        title: {
            text: 'Box plot for Assignment Scores % (Flipped)'
        },
        legend: {
            enabled: false
        },
        xAxis: {
            categories: cat_percent,
            title: {
                text: 'Assignments'
            }
        },
        yAxis: {
            min: -10,
            max: 110,
            title: {
                text: 'Percent Scores'
            }
        },
        series: [{
            name: 'Observations',
            data: values_percent,
            tooltip: {
                headerFormat: '<em>Assignment: {point.key}</em><br/>'
            }
        }, {
            name: 'Outlier',
            color: Highcharts.getOptions().colors[0],
            type: 'scatter',
            data: [],
            marker: {
                fillColor: 'white',
                lineWidth: 1,
                lineColor: Highcharts.getOptions().colors[0]
            },
            tooltip: {
                pointFormat: 'Observation: {point.y}'
            }
        }]
    });
    $('#assignment-box-percent').highcharts({
        chart: {
            type: 'boxplot'
        },
        title: {
            text: 'Box plot for Assignment Scores %'
        },
        legend: {
            enabled: false
        },
        xAxis: {
            categories: cat_percent,
            title: {
                text: 'Assignments'
            }
        },
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: 'Percent Scores'
            }
        },
        series: [{
            name: 'Observations',
            data: values_percent,
            tooltip: {
                headerFormat: '<em>Assignment: {point.key}</em><br/>'
            }
        }, {
            name: 'Outlier',
            color: Highcharts.getOptions().colors[0],
            type: 'scatter',
            data: [],
            marker: {
                fillColor: 'white',
                lineWidth: 1,
                lineColor: Highcharts.getOptions().colors[0]
            },
            tooltip: {
                pointFormat: 'Observation: {point.y}'
            }
        }]
    });
});

var radios = document.getElementsByClassName('assignment'),
    normal_div = document.getElementById('assignment-box-percent'),
    flipped_div = document.getElementById('assignment-box-flipped');

function changeChart() {
    "use strict";
    if (radios[0].checked === true) {
        normal_div.style.display = 'inline';
        flipped_div.style.display = 'none';
    } else if (radios[1].checked === true) {
        normal_div.style.display = 'none';
        flipped_div.style.display = 'inline';
    }
}

var radio,
    idx;

for (idx = 0; idx < radios.length; idx += 1) {
    radio = radios[idx];
    radio.onclick = changeChart;
}

function clickRegular() {
    "use strict";
    radios[1].checked = true;
    normal_div.style.display = 'none';
}

window.addEventListener('load', setTimeout(clickRegular, 1000));
