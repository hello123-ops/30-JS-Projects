let input = document.getElementById("snack-text");
let showsnack = document.getElementById("show-snack");
let snacksuccess = document.getElementById("show-success");
let snackerror = document.getElementById("show-error");
let snackbar = document.getElementById("snackbar");

let newSnack = (inputText, type) => {
  let snack = document.createElement("div");
  snack.classList.add("snackbar"); // individual item
  if (type === "error") snack.classList.add("error");
  if (type === "success") snack.classList.add("success");

  snack.innerHTML = `
    <div class="snack-content">
      <span class="snack-icon" aria-hidden="true">🔔</span>
      <div class="snack-message">${inputText}</div>
      <button class="snack-action" aria-label="Dismiss">✕</button>
    </div>
  `;

  snackbar.appendChild(snack);

  // trigger show animation
  setTimeout(() => snack.classList.add("show"), 10);

  let closeBtn = snack.querySelector(".snack-action");
  let removeSnack = () => {
    snack.classList.remove("show");
    setTimeout(() => {
      if (snack.parentElement) snackbar.removeChild(snack);
    }, 300);
  };

  closeBtn.addEventListener("click", removeSnack);

  // auto-dismiss in 5 seconds
  setTimeout(removeSnack, 5000);
};

showsnack.addEventListener("click", () =>
  newSnack(input.value || "Hello — snack time!")
);
snacksuccess.addEventListener("click", () =>
  newSnack("Action completed successfully!", "success")
);
snackerror.addEventListener("click", () =>
  newSnack("An error occurred!", "error")
);
