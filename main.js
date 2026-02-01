// Generate unique random numbers within a range
function getRandomNumbers(count, min, max) {
  const numbers = new Set();
  while (numbers.size < count) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.add(num);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}

// Generate a single random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Update ball display with animation
function updateBalls(containerId, numbers, specialNumber, specialClass) {
  const container = document.getElementById(containerId);
  const balls = container.querySelectorAll('.ball');

  // Update white balls
  numbers.forEach((num, index) => {
    const ball = balls[index];
    ball.textContent = num;
    ball.classList.add('animate');
    setTimeout(() => ball.classList.remove('animate'), 300);
  });

  // Update special ball (Mega Ball or Powerball)
  const specialBall = balls[balls.length - 1];
  specialBall.textContent = specialNumber;
  specialBall.classList.add('animate');
  setTimeout(() => specialBall.classList.remove('animate'), 300);
}

// Generate Mega Millions numbers
// 5 white balls: 1-70, Mega Ball: 1-25
function generateMegaMillions() {
  const whiteNumbers = getRandomNumbers(5, 1, 70);
  const megaBall = getRandomNumber(1, 25);
  updateBalls('megaNumbers', whiteNumbers, megaBall, 'mega');
}

// Generate Powerball numbers
// 5 white balls: 1-69, Powerball: 1-26
function generatePowerball() {
  const whiteNumbers = getRandomNumbers(5, 1, 69);
  const powerball = getRandomNumber(1, 26);
  updateBalls('powerballNumbers', whiteNumbers, powerball, 'power');
}

// Generate Korea Lotto 645 numbers
// 6 balls: 1-45
function generateLotto645() {
  const numbers = getRandomNumbers(6, 1, 45);
  const container = document.getElementById('lotto645Numbers');
  const balls = container.querySelectorAll('.ball');

  numbers.forEach((num, index) => {
    const ball = balls[index];
    ball.textContent = num;
    // Set color based on number range
    ball.className = 'ball lotto ' + getLottoColorClass(num);
    ball.classList.add('animate');
    setTimeout(() => ball.classList.remove('animate'), 300);
  });
}

// Get color class for Lotto 645 based on number range
function getLottoColorClass(num) {
  if (num <= 10) return 'lotto-yellow';
  if (num <= 20) return 'lotto-blue';
  if (num <= 30) return 'lotto-red';
  if (num <= 40) return 'lotto-gray';
  return 'lotto-green';
}

// Generate all lottery numbers
function generateAll() {
  generateLotto645();
  generateMegaMillions();
  generatePowerball();
}
