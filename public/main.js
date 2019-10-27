function dnaButtonClicked() {
  var inputVal = document.getElementById("input").value;

  axios
    .get(
      "http://localhost:3000/api/rna/encode/mariom"
    )
    .then(res => {
        document.getElementById("result").value = res.data.resp;
    });
  
}