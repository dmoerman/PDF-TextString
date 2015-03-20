var spawn = require('child_process').spawn;

module.exports.hasText = function(pdf_path, options, callback, binaryPath){
    var args = [];
    if (typeof options !== 'function') {
        if (options && options.from && !isNaN(options.from)) {
            args.push('-f');
            args.push(options.from)
        };
        if (options && options.to && !isNaN(options.to)) {
            args.push('-l');
            args.push(options.to)
        };
    } else {
        callback = options;
    }

    var child = (typeof binaryPath == 'undefined') ? spawn('pdffonts', args) : spawn(binaryPath, args)
};
