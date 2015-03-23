var spawn = require('child_process').spawn;

module.exports.hasText = function(pdf_path, callback, binaryPath){
    var args = [];
    args.push(pdf_path);

    var child = (typeof binaryPath == 'undefined') ? spawn('pdffonts', args) : spawn(binaryPath, args);

    var stdout = child.stdout;
    var stderr = child.stderr;
    var output = '';

    stdout.setEncoding('utf8');
    stderr.setEncoding('utf8');

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
        (lines[0]  != '') ? callback(true) : callback(false);
    });
};
