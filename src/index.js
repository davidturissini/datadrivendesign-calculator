'use strict';

var calculateSampleSize = require('./calculateSampleSize');
var calculateSampleVariance = require('./calculateSampleVariance');
var calculateSampleSizeFromBaselineConversionRate = require('./calculateSampleSizeFromBaselineConversionRate');

module.exports = {
    calculateSampleSize: calculateSampleSize,
    calculateSampleVariance: calculateSampleVariance,
    calculateSampleSizeFromBaselineConversionRate: calculateSampleSizeFromBaselineConversionRate
}