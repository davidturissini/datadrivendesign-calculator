'use strict';

var calculatePValue = require('./calculatePValue');
var calculateConfidence = require('./calculateConfidence');

var tests = [{
    visitors: 1400,
    conversions: 950,
    control: true
}, {
    visitors: 990,
    conversions: 678,
    variation: true
}];

function calculateWinner (control, variation) {
    var pValue = calculatePValue(control, variation);

    var winner = (pValue >= 0.5) ? control : variation;

    return winner;

}

module.exports = calculateWinner;
