/* Desafío Parte 3 */
let button = document.querySelector("#btn-verificar");
button.addEventListener("click", (e) => {
  let part1 = document.querySelector("#number_id1").value;
  let part2 = document.querySelector("#number_id2").value;
  let part3 = document.querySelector("#number_id3").value;
  let password = part1 + part2 + part3;
  if (password == "911") {
    document.querySelector("#verificar").innerHTML = "Password 1 es correcto";
  } else if (password == "714") {
    document.querySelector("#verificar").innerHTML = "Password 2 es correcto";
  } else {
    document.querySelector("#verificar").innerHTML = "Password 3 es correcto";
  }
});
