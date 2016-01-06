'use strict';

var calculatePValue = require('./calculatePValue');


module.exports = function (control, variation) {
    var confidence = calculatePValue(control, variation);

    if (confidence < 0.5) {
        confidence = 1 - confidence;
    }

    return confidence;

}
