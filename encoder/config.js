module.exports = {
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
        },
        complementary: {
            binary: {
                '01': 'A',
                '10': 'C',
                '00': 'T',
                '11': 'G'
            },
            letters: {
                'A': '01',
                'C': '10',
                'T': '00',
                'G': '11'
            },
        }
    }
};