/* Desafío Parte 1 */
const button_image = document.querySelector(".button_image");
button_image.addEventListener("click", () => {
  if (button_image.style.borderStyle != "solid") {
    button_image.style.border = "10px solid red";
  } else {
    button_image.style.borderStyle = "none";
  }
});

/* Desafío Parte 2 */
