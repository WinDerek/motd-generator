const boxen = require('boxen');
const figlet = require('figlet');
const color = require("chalk");

// console.log(boxen('unicorn', {padding: 1}));

// console.log(boxen('unicorn', {padding: 1, margin: 1, borderStyle: 'double'}));

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
    borderColor: "white",
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
    // console.log(line);
    var line = logoLines[i];
    if (maxLineWidth < line.length) {
        maxLineWidth = line.length;
    }
}
prompt = "This is a public server for everyone in our lab. Please try to do installations or modifications using your own account rather than the root account. If you don't know what you are doing using sudo, please stop it.";
promptLines = prompt.match(/.{1,50}/g);
var promptContent = "";
var numSpaces = Math.floor((maxLineWidth - promptLines[0].length) / 2);
for (var i = 0; i < promptLines.length - 1; i++) {
    var wrappedLine = wrapStrWithSpacesToWidth(promptLines[i], maxLineWidth);
    promptContent += wrappedLine + "\n";
}
promptContent += wrapStrWithSpaces(promptLines[promptLines.length-1], numSpaces);
boxContent = logo + "\n" + promptContent;
console.log(boxen(color.hex("#2D90D8")(boxContent), boxenOptions));


function wrapStrWithSpacesToWidth(str, width) {
    var numSpaces = Math.floor((width - str.length) / 2);
    return wrapStrWithSpaces(str, numSpaces);
}

function wrapStrWithSpaces(str, numSpaces) {
    return " ".repeat(numSpaces) + str + " ".repeat(numSpaces);
}
