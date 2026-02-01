// ==================== Translations ====================
const translations = {
  ko: {
    title: '로또 번호 생성기',
    heading: '로또 번호 생성기',
    lotto645Info: '6개 번호 (1-45)',
    megaInfo: '5개 번호 (1-70) + 메가볼 (1-25)',
    powerballInfo: '5개 번호 (1-69) + 파워볼 (1-26)',
    generate: '번호 생성',
    generateAll: '전체 생성'
  },
  en: {
    title: 'Lottery Number Generator',
    heading: 'Lottery Number Generator',
    lotto645Info: '6 numbers (1-45)',
    megaInfo: '5 numbers (1-70) + Mega Ball (1-25)',
    powerballInfo: '5 numbers (1-69) + Powerball (1-26)',
    generate: 'Generate Numbers',
    generateAll: 'Generate All'
  }
};

let currentLang = 'en';

// ==================== Language Functions ====================
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ko' : 'en';
  applyLanguage();
  localStorage.setItem('lang', currentLang);
}

function applyLanguage() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      if (el.tagName === 'TITLE') {
        document.title = translations[currentLang][key];
      } else {
        el.textContent = translations[currentLang][key];
      }
    }
  });

  // Update language button text
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.querySelector('.lang-text').textContent = currentLang === 'en' ? 'KO' : 'EN';
  }

  // Update html lang attribute
  document.documentElement.lang = currentLang;
}

function initLanguage() {
  const savedLang = localStorage.getItem('lang');
  if (savedLang) {
    currentLang = savedLang;
  } else {
    // Detect browser language
    const browserLang = navigator.language.slice(0, 2);
    currentLang = browserLang === 'ko' ? 'ko' : 'en';
  }
  applyLanguage();
}

// ==================== Theme Functions ====================
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }
}

// ==================== Lottery Functions ====================
function getRandomNumbers(count, min, max) {
  const numbers = new Set();
  while (numbers.size < count) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.add(num);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateBalls(containerId, numbers, specialNumber, specialClass) {
  const container = document.getElementById(containerId);
  const balls = container.querySelectorAll('.ball');

  numbers.forEach((num, index) => {
    const ball = balls[index];
    ball.textContent = num;
    ball.classList.add('animate');
    setTimeout(() => ball.classList.remove('animate'), 300);
  });

  const specialBall = balls[balls.length - 1];
  specialBall.textContent = specialNumber;
  specialBall.classList.add('animate');
  setTimeout(() => specialBall.classList.remove('animate'), 300);
}

// Mega Millions: 5 white balls (1-70), Mega Ball (1-25)
function generateMegaMillions() {
  const whiteNumbers = getRandomNumbers(5, 1, 70);
  const megaBall = getRandomNumber(1, 25);
  updateBalls('megaNumbers', whiteNumbers, megaBall, 'mega');
}

// Powerball: 5 white balls (1-69), Powerball (1-26)
function generatePowerball() {
  const whiteNumbers = getRandomNumbers(5, 1, 69);
  const powerball = getRandomNumber(1, 26);
  updateBalls('powerballNumbers', whiteNumbers, powerball, 'power');
}

// Korea Lotto 645: 6 balls (1-45)
function generateLotto645() {
  const numbers = getRandomNumbers(6, 1, 45);
  const container = document.getElementById('lotto645Numbers');
  const balls = container.querySelectorAll('.ball');

  numbers.forEach((num, index) => {
    const ball = balls[index];
    ball.textContent = num;
    ball.className = 'ball lotto ' + getLottoColorClass(num);
    ball.classList.add('animate');
    setTimeout(() => ball.classList.remove('animate'), 300);
  });
}

function getLottoColorClass(num) {
  if (num <= 10) return 'lotto-yellow';
  if (num <= 20) return 'lotto-blue';
  if (num <= 30) return 'lotto-red';
  if (num <= 40) return 'lotto-gray';
  return 'lotto-green';
}

function generateAll() {
  generateLotto645();
  generateMegaMillions();
  generatePowerball();
}

// ==================== Initialize ====================
initTheme();
initLanguage();
