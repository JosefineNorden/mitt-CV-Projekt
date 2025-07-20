
document.addEventListener("DOMContentLoaded", () => {
  const horseImage = document.getElementById("easter-egg-horse");

  if (horseImage) {
    horseImage.addEventListener("click", () => {
      document.body.style.backgroundImage = "url('bilder/Giggan.jpg')";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center";
    });
  }
});

let keySequence = "";
const targetCode = "1234";

document.addEventListener("keydown", (event) => {
  keySequence += event.key;

  if (keySequence.length > 10) {
    keySequence = keySequence.slice(-10);
  }

  if (keySequence.includes(targetCode)) {
    showModal("🐴 Du hittade mitt hemliga stall! Bra jobbat!");
    keySequence = "";
  }
});

function showModal(message) {
  const modal = document.createElement("div");
  const overlay = document.createElement("div");

  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlay.style.zIndex = "9998";

  modal.style.position = "fixed";
  modal.style.top = "50%";
  modal.style.left = "50%";
  modal.style.transform = "translate(-50%, -50%)";
  modal.style.background = "#fff0f5";
  modal.style.color = "#5a2a2a";
  modal.style.padding = "2rem";
  modal.style.border = "2px solid #d18aa3";
  modal.style.borderRadius = "12px";
  modal.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.3)";
  modal.style.zIndex = "9999";
  modal.style.textAlign = "center";
  modal.style.fontSize = "18px";

  modal.textContent = message;

  overlay.addEventListener("click", () => {
    modal.remove();
    overlay.remove();
  });

  document.body.appendChild(overlay);
  document.body.appendChild(modal);
}
