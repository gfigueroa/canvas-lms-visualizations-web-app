/*jslint browser: true*/
/*global $, radios, stacked_div, discrete_div*/

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
