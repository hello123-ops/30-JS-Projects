let input = document.querySelector(".input-area");
let convertBtn = document.querySelector(".convert-btn");

// Disable future dates in the date picker
input.max = new Date().toISOString().split('T')[0];

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

calculateAge = (dob) => {
  const today = new Date(); // current local date & time

  const birthDate = new Date(dob); // date of birth

  let d3, m3, y3;

  const bd = birthDate.getDate();
  const td = today.getDate();
  if (td >= bd) {
    d3 = td - bd;
  } else {
    m3--;
    d3 = getDaysInMonth(ty, tm) + td - by;
  }

  const tm = today.getMonth() + 1;
  const bm = birthDate.getMonth() + 1;
  if (tm >= bm) {
    m3 = tm - bm;
  } else {
    y3--;
    m3 = 12 + tm - bm;
  }

  const ty = today.getFullYear();
  const by = birthDate.getFullYear();
  y3 = ty - by;

  // Format age string with proper units
  let ageString = [];
  if (y3 > 0) ageString.push(`${y3} years`);
  if (m3 > 0) ageString.push(`${m3} months`);
  if (d3 > 0) ageString.push(`${d3} days`);
  let age = ageString.join(', ') || '0 days';

  let contentArea = document.querySelector(".output-area");
  let info = document.createElement("p");
  info.innerText = age;
  info.classList.add("result")
  contentArea.appendChild(info);
};

convertBtn.addEventListener("click", () => {
  calculateAge(input.value);
});
