# PDF-TextString

This is a nodejs modules that will extract the text from a pdf. If there is no text attached to the pdf, then you will get the ```null``` value back. 
To use this module, you **have** to install **pdftotext** and **pdffonts** from [Xpdf](http://www.foolabs.com/xpdf/about.html).

# Installation

## Linux
**pdftotext** and **pdffonts** are included in the **poppler-utils** library. To install **poppler-utils** execute
* ```apt-get install poppler-utils```

## Windows
For Windows you can simply download the executables from [Xpdf](http://www.foolabs.com/xpdf/download.html)

# Usage

the path to the pdf must be the **absolute path**

## Windows

first add : 
```javascript
var pdftext = require('pdf-textstring'); 
```

And then just do the following :
```javascript
pdftext.pdftotext(pdf_path, function (err, data) {
  if(err){
    console.log(err);
  }else{
    console.log(data)
  }
}
```
if **pdftotext** and/or **pdffonts** aren't in the PATH of **Windows**
Then you can simply tell the module where the executables are located.
```javascript
pdftext.setBinaryPath_PdfToText("AbsolutePath/To/Binary");
pdftext.setBinaryPath_PdfFont("AbsolutePath/To/Binary");
pdftext.pdftotext(pdf_path, function (err, data) {
  if(err){
    console.log(err);
  }else{
    console.log(data)
  }
}
```
i recommed the usage of the path module to get the absolute path :
```javascript
var path = require('path');
var AbsolutePathToApp = path.dirname(process.mainModule.filename);
var pathToPdftotext = AbsolutePathToApp + "/binaries/pdftotext.exe";
var pathToPdffonts = AbsolutePathToApp + "/binaries/pdffonts.exe";
```

## Linux

first add : 
```javascript 
var pdftext = require('pdf-textstring'); 
```

And then just do the following :
```javascript
pdftext.pdftotext(pdf_path, function (err, data) {
  if(err){
    console.log(err);
  }else{
    console.log(data)
  }
}
```
