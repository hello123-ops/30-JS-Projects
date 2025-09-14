let URL = "https://api.quotable.io/random";

let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let genQuote = async () => {
  let response = await fetch(URL);
  let data = await response.json();
  quote.innerText = `"${data.content}"`;
  author.innerText = `- ${data.author}`;
};

let newQuoteBtn = document.getElementById("new-quote");
newQuoteBtn.addEventListener("click", () => {
  genQuote();
});

window.onload = genQuote;

let copyBtn = document.getElementById("copy-quote");
copyBtn.addEventListener('click', () => {
    const textToCopy = `${quote.innerText} ${author.innerText}`;
    navigator.clipboard.writeText(textToCopy);
});