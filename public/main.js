function dnaButtonClicked() {
  var inputVal = document.getElementById("input").value;
  console.log(inputVal);
  axios
    .get(
      "http://localhost:3000/api/dna/encode/" + inputVal
    )
    .then(res => {
        document.getElementById("result").value = res.data.resp;
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
    });
}
