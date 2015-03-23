var spawn = require('child_process').spawn;

module.exports.extract =  function(pdf_path, callback, binaryPath){
    var args = [];

    args.push('-layout');
    args.push('-enc');
    args.push('UTF-8');
    args.push(pdf_path);
    args.push('-');

    var child = (typeof binaryPath == 'undefined') ? spawn('pdftotext', args) : spawn(binaryPath, args);

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
            callback('pdftotext end with code ' + code, null);
        }
        callback(null, output);
    });
};