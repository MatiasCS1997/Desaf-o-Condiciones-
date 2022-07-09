/* Desafío Parte 1 */
const button_image = document.querySelector(".button_image");
button_image.addEventListener("click", () => {
  if (button_image.style.borderStyle != "solid") {
    button_image.style.border = "5px red";
  } else {
    button_image.style.borderStyle = "none";
  }
});
