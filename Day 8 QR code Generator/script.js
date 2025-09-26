const form = document.getElementById("qr-form");
const genBtn = document.getElementById("generate-btn");
const errorMsg = document.getElementById("input-error");
const loading = document.getElementById("loading-indicator");
const qrDisplay = document.getElementById("qr-display");
const qrInput = document.getElementById("qr-input");
const spinner = document.querySelector(".spinner");

let genQrCode = (input) => {
  let text = qrInput.value.trim();

  if (text === "") {
    errorMsg.classList.remove("hidden");
    errorMsg.innerText = "Input cannot be empty!";
    qrInput.focus();
    console.log("please enter the value in field");
    return;
  }
  errorMsg.classList.add("hidden");
  loading.classList.remove("hidden");
  genBtn.disabled = true;

  try {
    qrDisplay.innerHTML = "";
    new QRCode(qrDisplay, {
      text: text,
      width: 180,
      height: 180,
      colorDark: "#0b172a",
      colorLight: "#fff",
      correctLevel: QRCode.CorrectLevel.H,
    });
  } catch {
    console.log("Error occured while generating the QR");
    errorMsg.innerText = "An error occured while generating the QR code.";
    errorMsg.classList.remove("hidden");
  } finally {
    loading.classList.add("hidden");
    genBtn.disabled = false;
    qrInput.value = "";
  }
 
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  genQrCode();
});

genBtn.addEventListener("click", () => {
  genQrCode();
});
