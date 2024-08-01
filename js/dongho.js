function startTimer() {
  let seconds = 20;
  const timerElement = document.getElementById("timer");
  const countdown = setInterval(() => {
    seconds--;
    if (seconds <= 0) {
      clearInterval(countdown);
      timerElement.textContent = "Hết thời gian";
    } else {
      timerElement.textContent = seconds;
    }
  }, 1000);
}
