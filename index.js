const boxen = require('boxen');
const figlet = require('figlet');
const chalk = require("chalk");

const LOGO_COLOR = "#00e640";
const BORDER_COLOR = "#00e640";
const TITLE_COLOR = "#00e640";
const PROMPT_COLOR = "#ecf0f1";
const WARNING_COLOR = "#cf000f";

var selectedFonts = [ 'Alpha', 'Big', 'DOS Rebel', 'Fender', 'Larry 3D', 'Larry 3D 2', 'Lean', '' ]

// figlet.fonts(function(err, fonts) {
//     if (err) {
//         console.log('something went wrong...');
//         console.dir(err);
//         return;
//     }
//     // console.dir(fonts, { 'maxArrayLength': null });

//     for (var i = 0; i < fonts.length; i++) {
//         var font = fonts[i];
//         var data = figlet.textSync('IID', { font: font }, function(err, data) {
//             if (err) {
//                 console.log('Something went wrong...');
//                 console.dir(err);
//                 return;
//             }
//         });
//         console.log(font);
//         console.log(data);
//     }
// });

const boxenOptions = {
    padding: 0,
    margin: 0,
    borderStyle: "round",
    borderColor: BORDER_COLOR,
    backgroundColor: "black"
};

// for (var i = 0; i < selectedFonts.length; i++) {
//     var font = selectedFonts[i];
//     var data = figlet.textSync('IID', { font: font }, function(err, data) {
//         if (err) {
//             console.log('Something went wrong...');
//             console.dir(err);
//             return;
//         }
//     });
//     console.log(font);
//     console.log(data);
// }

// For logo
var logo = figlet.textSync('IID', { font: 'Alpha' }, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
});
var maxLineWidth = 0;
var logoLines = logo.split("\n");
for (var i = 0; i < logoLines.length; i++) {
    var line = logoLines[i];
    if (maxLineWidth < line.length) {
        maxLineWidth = line.length;
    }
}
logo = chalk.hex(LOGO_COLOR)(logo);

// For title
var title = "Welcome to robert-server of the IID lab!";
title = wrapStrWithSpacesToWidth(title, maxLineWidth);
title = chalk.hex(TITLE_COLOR)(title);

// For prompt
var prompt = "This is a public server for everyone in our lab. Please try to do installations or modifications using your own account rather than the root account.";
promptLines = prompt.match(/.{1,47}/g);
var promptContent = "";
var numSpaces = Math.floor((maxLineWidth - promptLines[0].length) / 2);
for (var i = 0; i < promptLines.length - 1; i++) {
    var wrappedLine = wrapStrWithSpacesToWidth(promptLines[i], maxLineWidth);
    promptContent += wrappedLine + "\n";
}
promptContent += wrapStrWithSpaces(promptLines[promptLines.length-1], numSpaces);
promptContent = chalk.hex(PROMPT_COLOR)(promptContent);

// For warning
var warning = "If you don't know what you are doing with sudo, please stop it!";
var numSpaces = Math.floor((maxLineWidth - warning.length) / 2);
warning = chalk.bgHex(WARNING_COLOR).hex("#FFFFFF")(warning);
warning = wrapStrWithSpaces(warning, numSpaces);


boxContent = logo + "\n" + title + "\n" + promptContent + "\n" + warning;
console.log(boxen(boxContent, boxenOptions));

function wrapStrWithSpacesToWidth(str, width) {
    var numSpaces = Math.floor((width - str.length) / 2);
    return wrapStrWithSpaces(str, numSpaces);
}

function wrapStrWithSpaces(str, numSpaces) {
    return " ".repeat(numSpaces) + str + " ".repeat(numSpaces);
}
