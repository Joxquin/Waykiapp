// Cambia el color y tamaño del header cuando se hace scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});

// Captcha simple
function generateCaptcha() {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let captcha = "";
  for (let i = 0; i < 5; i++) {
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }
  document.getElementById("captchaText").innerText = `Captcha: ${captcha}`;
  return captcha;
}

let currentCaptcha = generateCaptcha();

// Manejo del formulario
document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const enteredCaptcha = document.getElementById("captchaInput").value;

  if (enteredCaptcha !== currentCaptcha) {
    alert("Captcha incorrecto. Inténtalo de nuevo.");
    currentCaptcha = generateCaptcha();
    return;
  }

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const card = document.getElementById("cardNumber").value;
  const maskedCard = card.slice(0, 4) + " **** **** " + card.slice(-4);

  // Mostrar recibo
  document.getElementById("rName").textContent = name;
  document.getElementById("rEmail").textContent = email;
  document.getElementById("rCard").textContent = maskedCard;

  document.getElementById("paymentForm").classList.add("hidden");
  document.getElementById("receipt").classList.remove("hidden");
  document.getElementById("message").textContent = "";

  console.log("✅ Pago registrado:", { name, email, card });

  currentCaptcha = generateCaptcha();
});
