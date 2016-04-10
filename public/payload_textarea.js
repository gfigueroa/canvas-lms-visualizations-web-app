/*jslint browser: true*/
/*global $*/


function toggler(count) {
    "use strict";
    var text_area = document.getElementById('text-area-'.concat(count));
    if (text_area.style.display === 'none') {
        text_area.style.display = 'block';
    } else {
        text_area.style.display = 'none';
    }
}
