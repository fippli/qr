function updateQR(event) {
  const TextElement = document.getElementById("text");
  const QRElement = document.getElementById("qrcode");

  QRElement.innerHTML = null;

  const qrcode = new QRCode(QRElement, {
    width: 300,
    height: 300,
  });

  qrcode.makeCode(TextElement.value);
}

// console.log("poop", updateQR);
