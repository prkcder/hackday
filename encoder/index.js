const dictionary = require("./config");

/**
 * Adds zero to the left to complete 8 bits
 * 
 * @param {String} inputString 
 */
function _getEightCharacterString(inputString) {
    var zeroes = "";
    while (inputString.length + zeroes.length < 8) {
        zeroes += "0";
    }
    zeroes += inputString
    return zeroes
}

/**
 * Checks if the string is a valid RNA or DNA encoded string.
 * 
 * @param {String} str 
 * @param {String} type 
 */
function _isValidEncoding(str, type) {
    const valid = dictionary[type].letters;

    return str.split("").every(char => valid.hasOwnProperty(char));
}

/**
 * Encode an "English" string to DNA
 * 
 * @param {String} str 
 * @param {String} type 
 */
function _encondeAs(str, type) {
    const chars = str.split("");
    const bins = chars.map(char => _getEightCharacterString(char.charCodeAt(0).toString(2)));

    return bins.map(
        word => {
            const pairs = word.match(/.{1,2}/g);

            return pairs.map(
                pair => {
                    return dictionary[type].binary[pair];
                }
            ).join("")
        }
    ).join("");
}

/**
 * Decode an DNA string as to English
 * 
 * @param {String} str 
 * @param {String} type 
 */
function _decodeAs(str, type, isComplementary) {
    if (!_isValidEncoding(str, 'dna')) return "";

    const fours = str.match(/.{1,4}/g);

    return fours.map(four => {
        const word = four.split("").map(char => {

            if (isComplementary) return dictionary[type].complementary.letters[char];

            return dictionary[type].letters[char];
        }).join("");
        return String.fromCharCode(parseInt(word, 2));
    });
}

function Dna() {}

Dna.prototype.encode = function(str) {
    return _encondeAs(str, 'dna');
};

Dna.prototype.isDna = function(str) {
    return _isValidEncoding(str, 'dna');
};

Dna.prototype.decode = function(str) {
    return _decodeAs(str, 'dna');
};

Dna.prototype.decodeComplementary = function(str) {
    return _decodeAs(str, 'dna', true);
};

function Rna() {}

Rna.prototype.encode = function(str) {
    return _encondeAs(str, 'rna');
};

module.exports = { Dna, Rna };