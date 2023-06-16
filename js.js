var canvas = document.getElementById('imageCanvas');
var context = canvas.getContext('2d');
var text = '';
var customFont = new FontFace('CustomFont', 'url(UrbanJungleDEMO.otf)');

customFont.load().then(function(loadedFont) {
  document.fonts.add(loadedFont);
  document.body.style.fontFamily = 'CustomFont, sans-serif';
});

function addText() {
  text = document.getElementById('textInput').value;
  drawImageWithText();
}

function alignText(alignment) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawImageWithText(alignment);
}

function drawImageWithText(alignment = 'center') {
  var image = new Image();
  image.src = 'Urban jungle font photo editing.jpg'; // अपनी इमेज फ़ाइल का पथ यहां दर्ज करें

  image.onload = function() {
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0);
    context.font = '100px CustomFont';
    context.textAlign = alignment;
    context.fillStyle = 'white';
    context.fillText(text, canvas.width / 2, canvas.height / 2);
  };
}

function downloadImage() {
  var link = document.createElement('a');
  link.href = canvas.toDataURL();
  link.download = 'image_with_text.png'; // डाउनलोड फ़ाइल का नाम यहां दर्ज करें
  link.click();
}
