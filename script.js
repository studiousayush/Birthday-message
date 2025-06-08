// Floating hearts
for (let i = 0; i < 30; i++) {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";
  heart.style.opacity = Math.random().toFixed(1);
  heart.style.transform = `rotate(45deg) scale(${0.5 + Math.random()})`;
  document.body.appendChild(heart);
}

// Envelope click logic
const envelope = document.getElementById("envelope");
const flap = document.getElementById("flap");
const message = document.getElementById("messageBox");

envelope.addEventListener("click", () => {
  flap.classList.add("opened");
  message.classList.add("visible");
});

// Optional customization
// document.getElementById("name").textContent = "Your Crush's Name";
