const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
let clickCount = 0;

function updateCounter() {
  counter.textContent = clickCount;
}

function changeCookieSize() {
  const currentWidth = cookie.width;

  if (currentWidth === 200) {
    cookie.width = 170;
  } else {
    cookie.width = 200;
  }
  cookie.height = cookie.width;
}

cookie.onclick = function() {
  clickCount++;
  updateCounter();
  changeCookieSize();
};