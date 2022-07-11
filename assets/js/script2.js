let calcular = document.querySelector("#cal_total");
calcular.addEventListener("click", (e) => {
  let logo1 = document.querySelector("#input1").value;
  let logo2 = document.querySelector("#input2").value;
  let logo3 = document.querySelector("#input3").value;
  let total = Number(logo1) + Number(logo2) + Number(logo3);
  if (total > 10) {
    document.querySelector("#verificar").innerHTML =
      "LLevas más de 10 productos!";
  } else {
    document.querySelector("#verificar").innerHTML =
      "llevas" + " " + total + " " + "productos";
  }
});
