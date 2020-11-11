const boxen = require('boxen');
const figlet = require('figlet');
const chalk = require("chalk");

const LOGO_COLOR = "#125593";
const BORDER_COLOR = "#125593";
const TITLE_COLOR = "#00e640";
const PROMPT_COLOR = "#ecf0f1";
const WARNING_COLOR = "#cf000f";

const boxenOptions = {
    padding: 0,
    margin: 0,
    borderStyle: "round",
    borderColor: BORDER_COLOR,
    backgroundColor: "black"
};

// For logo
var logo = figlet.textSync('IID', { font: 'DOS Rebel' }, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
});
// Remove all the new lines at the begin and end of the logo
logo = logo.replace(/^\s+|\s+$/g, '');
var maxLineWidth = 76;
var logoLines = logo.split("\n");
var logoContent = "";
for (var i = 0; i < logoLines.length - 1; i++) {
    var wrappedLine = wrapStrWithSpacesToWidth(logoLines[i], maxLineWidth);
    logoContent += wrappedLine + "\n";
}
logoContent = "\n\n" + logoContent + "\n";
logoContent = chalk.hex(LOGO_COLOR)(logoContent);

// For title
var title = "Welcome to iid-server-1 of the IID lab!";
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

// For docs
var docs = "IID Docs: https://derekdick.github.io/iid-docs/";
var numSpaces = Math.floor((maxLineWidth - docs.length) / 2);
docs = chalk.hex(TITLE_COLOR)(docs);
docs = wrapStrWithSpaces(docs, numSpaces);


boxContent = logoContent + "\n" + title + "\n" + promptContent + "\n" + warning + "\n" + docs;
console.log(boxen(boxContent, boxenOptions));

function wrapStrWithSpacesToWidth(str, width) {
    var numSpaces = Math.floor((width - str.length) / 2);
    return wrapStrWithSpaces(str, numSpaces);
}

function wrapStrWithSpaces(str, numSpaces) {
    return " ".repeat(numSpaces) + str + " ".repeat(numSpaces);
}
