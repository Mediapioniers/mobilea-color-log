var colors = require('colors');

var log = function(type, color) {
    return function() {
        arguments[0] = color(require('path').basename(module.parent.filename) + ': ') + arguments[0];
        type.apply(console, arguments);
    }
};

module.exports = {
    log: log(console.log, colors.green),
    error: log(console.error, colors.red),
    warn: log(console.warn, colors.magenta)
};
