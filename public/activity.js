/*jslint browser: true*/
/*global $, dow, views_by_day, participations_by_day*/

$(function () {
    "use strict";
    $('#views-by-day').highcharts({
        title: {
            text: 'Views & Participation by Day of Week',
            x: -20 //center
        },
        subtitle: {
            text: 'Aggregate Course Level Data',
            x: -20
        },
        xAxis: {
            categories: dow
        },
        yAxis: {
            title: {
                text: 'Views & Participation'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        // tooltip: {
        //     valueSuffix: '°C'
        // },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Views',
            data: views_by_day
        }, {
            name: 'Participations',
            data: participations_by_day
        }]
    });
});

var radios = document.getElementsByClassName('part_view'),
    stacked_div = document.getElementById('column-chart-stacked'),
    discrete_div = document.getElementById('column-chart-discrete');

function changeChart() {
    "use strict";
    if (radios[0].checked === true) {
        stacked_div.style.display = 'inline';
        discrete_div.style.display = 'none';
    } else if (radios[1].checked === true) {
        stacked_div.style.display = 'none';
        discrete_div.style.display = 'inline';
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
    stacked_div.style.display = 'none';
}

window.addEventListener('load', setTimeout(clickRegular, 1000));
