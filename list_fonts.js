const boxen = require('boxen');
const figlet = require('figlet');
const chalk = require("chalk");

const LOGO_COLOR = "#125593";
const BORDER_COLOR = "#00e640";
const TITLE_COLOR = "#00e640";
const PROMPT_COLOR = "#ecf0f1";
const WARNING_COLOR = "#cf000f";

var selectedFonts = [ 'Alpha', 'Big', 'DOS Rebel', 'Fender', 'Larry 3D', 'Larry 3D 2', 'Lean' ]

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

var logo = figlet.textSync('IID', { font: 'DOS Rebel' }, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
});
console.log(logo)
