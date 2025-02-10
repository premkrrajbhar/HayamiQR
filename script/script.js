const qrTextElement = document.getElementById("qrText");
const qrGenerateButton = document.getElementById("qrGenerateBtn");
const qrDownloadButton = document.getElementById("qrDownloadBtn");
const qrDisplay = document.getElementById("qrShow");
const resetElement = document.getElementById("resetBtn");

qrGenerateButton.addEventListener("click", () => {
  if (qrTextElement.value.length > 0) {
    generateQRCode();
  } else {
    qrDisplay.innerText = "Please enter text or URL to generate QR Code";
    setColor();
  }
});

qrDownloadButton.addEventListener("click", (e) => {
  let img = document.querySelector("#qrShow img");

  if (img !== null) {
    let imgAtrr = img.getAttribute("src");
    qrDownloadButton.setAttribute("href", imgAtrr);
  } else {
    e.preventDefault();
    qrDisplay.innerText = "Please generate QR Code first";
    setColor();
  }
});

resetElement.addEventListener("click", () => {
  qrTextElement.value = "";
  qrDisplay.innerText = "";
});

function generateQRCode() {
  qrDisplay.innerHTML = "";
  new QRCode(qrDisplay, {
    text: qrTextElement.value,
    height: 125,
    width: 125,
    colorLight: "#fff",
    colorDark: "#000",
    correctLevel: QRCode.CorrectLevel.H,
  });
}

function setColor() {
  qrDisplay.style.color = "#d5d1d1";
  qrDisplay.style.fontSize = "14px";
}
