'use strict';

module.exports = function calculateSampleSize (sampleVariance, minEffect) {
    return 16 * (sampleVariance / (minEffect * minEffect));
};