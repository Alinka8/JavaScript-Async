// Countdown Timer
let timerInterval;

function startCountdown() {
  clearInterval(timerInterval); // Clear any existing interval

  const timerDisplay = document.getElementById("timerDisplay");
  let timeLeft = document.getElementById("timerInput").value;

  timerDisplay.textContent = timeLeft;

  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      timerDisplay.textContent = timeLeft;
    } else {
      clearInterval(timerInterval);
      alert("Time is up!");
    }
  }, 1000);
}

// Delayed Notification
function showDelayedNotification() {
  setTimeout(() => {
    alert("This is a delayed notification!");
  }, 5000); // Delay of 5000 milliseconds (5 seconds)
}

// Repeat Notification
let notificationInterval;

function startNotifications() {
  notificationInterval = setInterval(() => {
    alert("This is a repeated notification!");
  }, 10000); // Interval of 10000 milliseconds (10 seconds)
}

function stopNotifications() {
  clearInterval(notificationInterval);
}
