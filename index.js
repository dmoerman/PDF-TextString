var text = require('./PDF-text.js'),
    fs = require('fs');

function PDF() {
    if (false === (this instanceof PDF)) {
        binaryPaths = [];
        return new PDF();
    }
}

PDF.prototype.setBinaryPath_PdfToText = function(binary_path){
    PDF.binaryPaths.push({"pdftotext" : binary_path});
};

PDF.prototype.setBinaryPath_PdfFont = function(binary_path){
    PDF.binaryPaths.push({"pdffont" : binary_path});
};

PDF.prototype.pdftotext = function (pdf_path, options, cb) {

    fs.exists(pdf_path, function (exist) {
        if (!exist) return cb('no file exists at the path you specified');
        text.extract(pdf_path, options, cb, binaryPaths)
    });
};

module.exports = new PDF();