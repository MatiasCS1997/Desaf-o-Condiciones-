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
button = document.querySelector(.button)
.addEventListener ("click", () => (
    let sum_ticket =
    Number (document.querySelector(".sticker_1").value) +
    Number (document.querySelector(".sticker_2").value) +
    Number (document.querySelector(".sticker_3").value)
    if (sum_ticket === 0) (info.InnerHTML = "No has seleccionado ningún ticket") else if (sunm_ticket > 10) (info.InnerHTML = "llevas demasiados Stickers") else (info.InnerHTML = "Llevas $(sum_ticket) Stickers")
)) 