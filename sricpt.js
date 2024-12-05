function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}

document.querySelector('.tester-input').addEventListener('keypress', function(e) {
  if (!isLetter(e.key)) {
    e.preventDefault();
  }
});