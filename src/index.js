'use strict';

const calculateSampleSize = require('./calculateSampleSize');
const calculateSampleVariance = require('./calculateSampleVariance');
const calculateSampleSizeFromBaselineConversionRate = require('./calculateSampleSizeFromBaselineConversionRate');

module.exports = {
    calculateSampleSize: calculateSampleSize,
    calculateSampleVariance: calculateSampleVariance,
    calculateSampleSizeFromBaselineConversionRate: calculateSampleSizeFromBaselineConversionRate
}