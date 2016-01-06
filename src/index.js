'use strict';

var calculateSampleSize = require('./calculateSampleSize');
var calculateSampleVariance = require('./calculateSampleVariance');
var calculateSampleSizeFromBaselineConversionRate = require('./calculateSampleSizeFromBaselineConversionRate');
var calculateConfidence = require('./calculateConfidence');
var calculatePValue = require('./calculatePValue');
var calculateWinner = require('./calculateWinner');

module.exports = {
    calculateSampleSize: calculateSampleSize,
    calculateSampleVariance: calculateSampleVariance,
    calculateSampleSizeFromBaselineConversionRate: calculateSampleSizeFromBaselineConversionRate,
    calculateConfidence: calculateConfidence,
    calculatePValue: calculatePValue,
    calculateWinner: calculateWinner
};
