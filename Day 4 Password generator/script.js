let inputArea = document.querySelector(".intarea input");
let copyBtn = document.querySelector(".intarea i");
let genBtn = document.querySelector(".gen-pass-btn");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_+={}[];':,.<>/?";

const Genpassword = (str) => {
  return str[Math.floor(Math.random() * str.length)];
};

const GeneratePassword = (lenght = 12) => {
  const allChars = uppercase + lowercase + numbers + symbols;
  let password = "";
  password += Genpassword(uppercase);
  password += Genpassword(lowercase);
  password += Genpassword(numbers);
  password += Genpassword(symbols);

  for (let i = 4; i < lenght; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  return password;
};

genBtn.addEventListener("click", () => {
    newpassword = GeneratePassword(12);
    inputArea.value = newpassword;
});

copyBtn.addEventListener("click", () => {
    inputArea.select();
    document.execCommand("copy");
});
