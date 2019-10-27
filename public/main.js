function dnaButtonClicked() {
  var inputVal = document.getElementById("input").value;
  console.log(inputVal);
  axios
    .get(
      "http://localhost:3000/api/dna/encode/" + inputVal
    )
    .then(res => {
        document.getElementById("result").value = res.data.resp;
        appendEntryToLog(res, inputVal, 'DNA');
    });
}

function rnaButtonClicked() {
  var inputVal = document.getElementById("input").value;
  console.log(inputVal);
  axios
    .get(
      "http://localhost:3000/api/rna/encode/" + inputVal
    )
    .then(res => {
        document.getElementById("result").value = res.data.resp;
        appendEntryToLog(res, inputVal, 'RNA');
    });
}

function appendEntryToLog(res, myinput, type) {
    const ts = res.headers.date;
    const ul = document.getElementById("myLog");
    const li = document.createElement("li");

    const str = `${type}: ${myinput} => ${res.data.resp} @ ${ts}`
    const tx = document.createTextNode(str);
    
    li.appendChild(tx);
    ul.appendChild(li);
}