module.exports = 
function toReadable (number) {
    const arrayNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];

    let string = String(number);

    if (string.slice(1) === '00' ) {
        return arrayNumber[string[0]] + ' hundred';
    } else if (string.length === 3) {
        return arrayNumber[string[0]] + ' hundred ' + readUpToHundred(Number(string.slice(1)));
    } else if (string.length < 3){
        return(readUpToHundred(number));
    }
}


function readUpToHundred (number) {

    const arrayNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
    
    let string = String(number);

    if (string.length === 1) {
        return arrayNumber[number];
    } else if (number === 10) {
        return arrayNumber[number];
    } else if (number === 11) {
        return arrayNumber[number];
    } else if (number === 12) {
        return arrayNumber[number];
    } else if (number === 13) {
        return 'thirteen';
    } else if (number === 15) {
        return 'fifteen';
    } else if (number === 18) {
        return 'eighteen';
    } else if (string.length === 2 & string[0] === '1' & string[1] > 3) {
        return arrayNumber[string[1]]+'teen';
    } else if (number === 20) {
        return 'twenty';
    } else if (string.length === 2 & string[0] === '2' & string[1] > 0) {
        return  'twenty ' + arrayNumber[string[1]];
    } else if (number === 30) {
        return 'thirty';
    } else if (string.length === 2 & string[0] === '3' & string[1] > 0) {
        return  'thirty ' + arrayNumber[string[1]];
    } else if (number === 40) {
        return 'forty';
    } else if (string.length === 2 & string[0] === '4' & string[1] > 0) {
        return  'forty ' + arrayNumber[string[1]];
    } else if (number === 50) {
        return 'fifty';
    } else if (string.length === 2 & string[0] === '5' & string[1] > 0) {
        return  'fifty ' + arrayNumber[string[1]];
    } else if (number === 60) {
        return 'sixty';
    } else if (string.length === 2 & string[0] === '6' & string[1] > 0) {
        return  'sixty ' + arrayNumber[string[1]];
    } else if (number === 70) {
        return 'seventy';
    } else if (string.length === 2 & string[0] === '7' & string[1] > 0) {
        return  'seventy ' + arrayNumber[string[1]];
    } else if (number === 80) {
        return 'eighty';
    } else if (string.length === 2 & string[0] === '8' & string[1] > 0) {
        return  'eighty ' + arrayNumber[string[1]];
    } else if (number === 90) {
        return 'ninety';
    } else if (string.length === 2 & string[0] === '9' & string[1] > 0) {
        return  'ninety ' + arrayNumber[string[1]];
    }
    
}