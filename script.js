const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const popup = document.getElementById("celebration");
const rainContainer = document.getElementById("rain-container");
const container = document.querySelector(".container");
const successMessage = document.getElementById("successMessage");
const sadMessage = document.getElementById("sadMessage");

function closePopup() {
  popup.classList.add("hidden");
  popup.setAttribute("aria-hidden", "true");
}

window.closePopup = closePopup;

/* YES CLICK */
yesBtn.addEventListener("click", () => {
  successMessage.style.display = "block";
  sadMessage.style.display = "none";

  popup.classList.remove("hidden");
  popup.setAttribute("aria-hidden", "false");

  startRain(["☕", "💖", "💗", "💕", "💘"], 70);
});

/* NO CLICK */
noBtn.addEventListener("click", () => {
  sadMessage.style.display = "block";
  successMessage.style.display = "none";

  startRain(["💔", "🫗", "🥀", "😭", "☕💔"], 70);
});

/* NO BUTTON RUNS AWAY */
function moveButton() {
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width;
  const maxY = containerRect.height - btnRect.height;

  const randomX = Math.random() * Math.max(0, maxX);
  const randomY = Math.random() * Math.max(0, maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

noBtn.addEventListener("mouseenter", moveButton);

noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveButton();
});

/* RAIN FUNCTION */
function startRain(items, amount) {
  for (let i = 0; i < amount; i++) {
    const el = document.createElement("div");
    el.classList.add("rain-item");
    el.innerText = items[Math.floor(Math.random() * items.length)];

    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDuration = Math.random() * 2 + 2 + "s";
    el.style.fontSize = Math.random() * 16 + 22 + "px";

    rainContainer.appendChild(el);

    setTimeout(() => el.remove(), 4500);
  }
}
