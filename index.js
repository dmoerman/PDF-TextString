var text = require('./PDF-text.js'),
    fonts= require('./PDF-fonts.js'),
    fs = require('fs');

function PDF() {
    if (false === (this instanceof PDF)) {
        return new PDF();
    }
}

PDF.prototype.setBinaryPath_PdfToText = function(binary_path){
    PDF.binaryPaths_PdfToText = binary_path;
};

PDF.prototype.setBinaryPath_PdfFont = function(binary_path){
    PDF.binaryPath_PdfFont = binary_path;
};

PDF.prototype.hasText = function (pdf_path, cb){
    fs.exists(pdf_path, function (exist) {
        if (!exist) return cb('no file exists at the path you specified');
    })
};

PDF.prototype.pdftotext = function (pdf_path, options, cb) {

    fs.exists(pdf_path, function (exist) {
        if (!exist) return cb('no file exists at the path you specified');
        this.prototype.hasText(pdf_path, function(bool){
            (bool) ? text.extract(pdf_path, options, cb , PDF.binaryPaths_PdfToText): cb(null,null);
        });

    });
};

module.exports = new PDF();