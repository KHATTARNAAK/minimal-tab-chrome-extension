function showTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (hours > 12) {
    hours -= 12;
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.querySelector(".clock").innerText =
    hours + ":" + minutes + ":" + seconds;
}

setInterval(showTime, 1000);

const colorButton = document.querySelector(".color-button");
colorButton.addEventListener("click", changeColor);

function changeColor() {
  if (colorButton.innerHTML === '<i class="fas fa-bolt"></i>') {
    // removing dark mode
    document.body.classList.replace("dark-mode", "light-mode");
    colorButton.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    // removing light mode
    document.body.classList.replace("light-mode", "dark-mode");
    colorButton.innerHTML = '<i class="fas fa-bolt"></i>';
  }
}
