let keys = document.querySelectorAll(".key");
let displayRes = document.getElementById("calcResult");
let displayExp = document.getElementById("calcExpression");
let allClearBtn = document.querySelector(".key-ac");
let clearBtn = document.querySelector(".key-plus-minus");
let equal = document.querySelector(".key-equals");

let calcExpression = (e) => {
  let newExp = e.replace(/÷/g, "/").replace(/×/g, "*").replace(/−/g, "-");
  let result = eval(newExp);
  displayRes.innerText = result;
};

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    if (e.target.attributes.class.value === "key key-ac") {
      displayRes.innerText = "0";
    } else if (e.target.attributes.class.value === "key key-dc") {
      displayRes.innerText = displayRes.innerText.slice(0, -1);
      if (displayRes.innerText.length === 0) {
        displayRes.innerText = "0";
      }
    } else if (e.target.attributes.class.value === "key key-equals") {
      try {
        let exp = displayRes.innerText;
        calcExpression(exp);
        displayExp.innerText = exp;
      } catch {
        console.log("An error occurred");
      }
    } else {
      if (displayRes.innerText === "0") {
        displayRes.innerText = "";
        displayExp.innerText = "";
      }
      displayRes.innerText += e.target.innerText;
      
      displayExp.innerText += e.target.innerText;
    }
  });
});
