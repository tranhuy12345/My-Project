// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
//Ham check Card 
function validateCred(array){
    let sum = 0;
    for (let i = array.length-1;i>=0;i--) {
        let digit = array[i];
        if ((array.length-1-i) % 2 === 1 ) {
            digit *= 2;
            if (digit > 9) {
                digit-=9; 
            }    
        }
        sum +=digit;
    }
    if (sum % 10 === 0) {
        return true;
    }
    else{
        return false;
    }
    
}
const check = batch.map(validateCred);
console.log(check);
//Ham tra ve mang dung sai
function findInvalidCards(array) {
    let newArray=[];
    for (let i = 0;i<array.length;i++) {
        if (!validateCred(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(findInvalidCards(batch));
// Ham tim id Company
function idInvalidCardCompanies(array) {
    let newCompany = [];
    let invalidCards = findInvalidCards(array);
    for (let i = 0;i<invalidCards.length; i++) {
        switch(invalidCards[i][0]) {
            case 3:
                if (newCompany.indexOf('Amex (American Express)') === -1) {
                    newCompany.push('Amex (American Express)');
                }
                break;
            case 4:
                if (newCompany.indexOf('Visa') === -1) {
                    newCompany.push('Visa');
                }
                break;
            case 5:
                if (newCompany.indexOf('Mastercard') === -1) {
                    newCompany.push('Mastercard');
                }
                break;
            case 6:
                if (newCompany.indexOf('Discover') === -1) {
                    newCompany.push('Discover');
                }
                break;
            default:
                newCompany.push('Company not found');
                break;
        }
    }
    return newCompany;
    
}
console.log(idInvalidCardCompanies(batch));
//Function String ->Array
function stringToArray(string){
    return string.split('');
}
//Ham char -> number
function charToNumber(string) {
    let newCard=[];
    let array = stringToArray(string);
    for (let i = 0;i<array.length;i++){
        newCard.push(parseInt(array[i]));
    }
    return newCard;
}
const visa = '0604812257010742';

console.log(findInvalidCards([charToNumber(visa)])); //check 1 visa




