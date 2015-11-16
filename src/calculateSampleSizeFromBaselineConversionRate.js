'use strict';

var calculateSampleSize = require('./calculateSampleSize');
var calculateSampleVariance = require('./calculateSampleVariance');



/*
    baseLineConversionRate === current conversion rate (usually a percentage)
    minimumDetectableEffect === amount plus/minus from the conversion rate

    If you want to see how many users it would take to detect += 1% from 20% baseline:
    calculateSampleSizeFromBaselineConversionRate(0.2, 0.01);

*/
module.exports = function calculateSampleSizeFromBaselineConversionRate (baseLineConversionRate, minimumDetectableEffect) {
    var sampleVariance = calculateSampleVariance(baseLineConversionRate);

    return calculateSampleSize(sampleVariance, minimumDetectableEffect);
    
}