const dictionary{
    dna: {
        binary: {
            '01': 'T',
            '10': 'G',
            '00': 'A',
            '11': 'C'
        },
        letters: {
            'T': '01',
            'G': '10',
            'A': '00',
            'C': '11'
        }
    },
    rna: {
        binary: {
            '01': 'U',
            '10': 'G',
            '00': 'A',
            '11': 'C'
        },
        letters: {
            'U': '01',
            'G': '10',
            'A': '00',
            'C': '11'
        }
    }
};

/*
function Dna(str) {
    const chars = str.split("");
    const bins = chars.map(char => getEightCharacterString(char.charCodeAt(0).toString(2)));

    return bins.map(
        word => {
            const pairs = word.match(/.{1,2}/g);

            return pairs.map(
                pair => {
                    return dictionary.dna.binary[pair];
                }
            ).join("")
        }
    ).join("");
}
*/

// flag: 0 := dna encode; 1:= rna
function encode(str, flag) {
    const chars = str.split("");
    const bins = chars.map(char => getEightCharacterString(char.charCodeAt(0).toString(2)));

    return bins.map(
        word => {
            const pairs = word.match(/.{1,2}/g);

            return pairs.map(
                pair => {
                    return dictionary[flag ? 'dna' : 'rna'].binary[pair];
                }
            ).join("")
        }
    ).join("");
}

function getEightCharacterString(inputString) {
    var zeroes = "";
    while (inputString.length + zeroes.length < 8) {
        zeroes += "0";
    }
    zeroes += inputString
    return zeroes
}

console.log(Dna("cat"));
