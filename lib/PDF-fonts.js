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

    args.push(pdf_path);

    var child = (typeof binaryPath == 'undefined') ? spawn('pdffonts', args) : spawn(binaryPath, args)

    var stdout = child.stdout;
    var stderr = child.stderr;
    var output = '';

    stdout.setEncoding('utf8');
    stderr.setEncoding('utf8');

    stderr.on('data', function (data) {
        return callback(data, null);
    });

    // buffer the stdout output
    stdout.on('data', function (data) {
        output += data;
    });

    stdout.on('close', function (code) {
        if (code) {
            callback('pdffonts end with code ' + code, null);
        }
        var lines = output.split("\n");
        lines.splice(0,2);
        (lines.length > 0) ? callback(true) : callback(false);
    });
};
