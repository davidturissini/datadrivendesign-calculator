'use strict';

module.exports = function calculateSampleVariance (percent) {
    return percent * (1 - percent);
}