let openBtn = document.getElementById("openPopup");
let popupOverLay = document.getElementById("popupOverlay");
let closeBtn = document.getElementById("closePopup");
let gotItBtn = document.getElementById("closeInside");

openBtn.addEventListener("click", () => {
  popupOverLay.style.display = "block";
})
closeBtn.addEventListener("click", () => {
  popupOverLay.style.display = "none";
})
gotItBtn.addEventListener("click", () => {
  popupOverLay.style.display = "none";
})