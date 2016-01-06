'use strict';

function normalcdf(x) {
    var t = 1 / (1+.2316419 * Math.abs(x));
    var d = .3989423 * Math.exp(-x * x / 2);
    var prob = d * t *(.3193815 + t *(-.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    if (x > 0) {
        prob = 1 - prob;
    }

    return prob;

}

function normDist(x, mean, standardDeviation) {
    var prob;

    if (standardDeviation < 0) {
        throw new Error('The standard deviation must be nonnegative.');
    } else if (standardDeviation === 0) {
        if (x < mean) {
            prob = 0;
        } else {
            prob = 1;
        }
    } else {
        prob = normalcdf((x - mean) / standardDeviation);
        prob = Math.round(100000 * prob) / 100000;
    }

    return prob;
}


module.exports = normDist;
