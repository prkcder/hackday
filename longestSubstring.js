function longestCommonSubsequence(sequence1, sequence2) {
    let charArray1 = sequence1.split("");
    let charArray2 = sequence2.split("");

    var testArray = [];
    for (var i = 0; i < charArray1.length; i++) {
        for (var j = 0; j < charArray2.length; j++) {
            if (charArray1[i] == charArray2[j]) {
                testArray.push(charArray1[i]);
            }
        }
    }
    for (var i = 0; i < testArray.length; i++) {
        console.log(testArray[i]);
    }
    return testArray;
}

longestCommonSubsequence("cat", "hat");
