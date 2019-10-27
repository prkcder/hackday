const dictionary = require("./config");

function getEightCharacterString(inputString) {
    var zeroes = "";
    while (inputString.length + zeroes.length < 8) {
        zeroes += "0";
    }
    zeroes += inputString
    return zeroes
}

function encondeAs(str, type) {
    const chars = str.split("");
    const bins = chars.map(char => getEightCharacterString(char.charCodeAt(0).toString(2)));

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

function Dna() {}

Dna.prototype.encode = function(str) {
    return encondeAs(str, 'dna');
};

function Rna() {}

Rna.prototype.encode = function(str) {
    return encondeAs(str, 'rna');
};

module.exports = { Dna, Rna };