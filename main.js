// ==================== Translations ====================
const translations = {
  ko: {
    appTitle: '랜덤 픽',
    navLottery: '로또',
    navDinner: '저녁메뉴',
    lotteryHeading: '로또 번호 생성기',
    lotto645Info: '6개 번호 (1-45)',
    megaInfo: '5개 번호 (1-70) + 메가볼 (1-25)',
    powerballInfo: '5개 번호 (1-69) + 파워볼 (1-26)',
    generate: '번호 생성',
    generateAll: '전체 생성',
    dinnerHeading: '저녁 메뉴 추천',
    dinnerPlaceholder: '메뉴를 뽑아보세요!',
    categoryTitle: '카테고리 선택',
    catAll: '전체',
    catKorean: '한식',
    catChinese: '중식',
    catJapanese: '일식',
    catWestern: '양식',
    catAsian: '아시안',
    pickDinner: '랜덤 메뉴 뽑기',
    historyTitle: '최근 기록',
    historyEmpty: '아직 기록이 없습니다',
    clearHistory: '기록 지우기'
  },
  en: {
    appTitle: 'Random Pick',
    navLottery: 'Lottery',
    navDinner: 'Dinner',
    lotteryHeading: 'Lottery Number Generator',
    lotto645Info: '6 numbers (1-45)',
    megaInfo: '5 numbers (1-70) + Mega Ball (1-25)',
    powerballInfo: '5 numbers (1-69) + Powerball (1-26)',
    generate: 'Generate Numbers',
    generateAll: 'Generate All',
    dinnerHeading: 'Dinner Menu Picker',
    dinnerPlaceholder: 'Pick your dinner!',
    categoryTitle: 'Select Category',
    catAll: 'All',
    catKorean: 'Korean',
    catChinese: 'Chinese',
    catJapanese: 'Japanese',
    catWestern: 'Western',
    catAsian: 'Asian',
    pickDinner: 'Pick Random Menu',
    historyTitle: 'Recent Picks',
    historyEmpty: 'No picks yet',
    clearHistory: 'Clear History'
  }
};

// ==================== Dinner Menu Data ====================
const dinnerMenus = {
  korean: [
    { ko: '김치찌개', en: 'Kimchi Stew' },
    { ko: '된장찌개', en: 'Soybean Paste Stew' },
    { ko: '삼겹살', en: 'Grilled Pork Belly' },
    { ko: '불고기', en: 'Bulgogi' },
    { ko: '비빔밥', en: 'Bibimbap' },
    { ko: '갈비찜', en: 'Braised Short Ribs' },
    { ko: '순두부찌개', en: 'Soft Tofu Stew' },
    { ko: '칼국수', en: 'Knife-cut Noodles' },
    { ko: '삼계탕', en: 'Ginseng Chicken Soup' },
    { ko: '제육볶음', en: 'Spicy Pork Stir-fry' },
    { ko: '김밥', en: 'Kimbap' },
    { ko: '떡볶이', en: 'Tteokbokki' },
    { ko: '냉면', en: 'Cold Noodles' },
    { ko: '감자탕', en: 'Pork Bone Soup' },
    { ko: '부대찌개', en: 'Army Stew' }
  ],
  chinese: [
    { ko: '짜장면', en: 'Jajangmyeon' },
    { ko: '짬뽕', en: 'Jjamppong' },
    { ko: '탕수육', en: 'Sweet and Sour Pork' },
    { ko: '마파두부', en: 'Mapo Tofu' },
    { ko: '깐풍기', en: 'Spicy Fried Chicken' },
    { ko: '양장피', en: 'Yangjangpi' },
    { ko: '유린기', en: 'Youlinji' },
    { ko: '볶음밥', en: 'Fried Rice' },
    { ko: '고추잡채', en: 'Pepper Japchae' },
    { ko: '팔보채', en: 'Eight Treasure Dish' }
  ],
  japanese: [
    { ko: '초밥', en: 'Sushi' },
    { ko: '라멘', en: 'Ramen' },
    { ko: '우동', en: 'Udon' },
    { ko: '돈카츠', en: 'Tonkatsu' },
    { ko: '카레라이스', en: 'Curry Rice' },
    { ko: '규동', en: 'Gyudon' },
    { ko: '오코노미야끼', en: 'Okonomiyaki' },
    { ko: '타코야끼', en: 'Takoyaki' },
    { ko: '사시미', en: 'Sashimi' },
    { ko: '덴푸라', en: 'Tempura' }
  ],
  western: [
    { ko: '스테이크', en: 'Steak' },
    { ko: '파스타', en: 'Pasta' },
    { ko: '피자', en: 'Pizza' },
    { ko: '햄버거', en: 'Hamburger' },
    { ko: '리조또', en: 'Risotto' },
    { ko: '샐러드', en: 'Salad' },
    { ko: '오믈렛', en: 'Omelette' },
    { ko: '치킨', en: 'Fried Chicken' },
    { ko: '샌드위치', en: 'Sandwich' },
    { ko: '수프', en: 'Soup' }
  ],
  asian: [
    { ko: '쌀국수', en: 'Pho' },
    { ko: '팟타이', en: 'Pad Thai' },
    { ko: '똠양꿍', en: 'Tom Yum Kung' },
    { ko: '분짜', en: 'Bun Cha' },
    { ko: '반미', en: 'Banh Mi' },
    { ko: '카오팟', en: 'Khao Pad' },
    { ko: '그린커리', en: 'Green Curry' },
    { ko: '나시고렝', en: 'Nasi Goreng' },
    { ko: '미고렝', en: 'Mie Goreng' },
    { ko: '양꼬치', en: 'Lamb Skewers' }
  ]
};

const categoryIcons = {
  korean: '🍚',
  chinese: '🥟',
  japanese: '🍣',
  western: '🍕',
  asian: '🍜'
};

let currentLang = 'en';
let currentCategory = 'all';
let dinnerHistory = [];

// ==================== Page Navigation ====================
function showPage(pageName) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  // Show selected page
  document.getElementById(pageName + 'Page').classList.add('active');

  // Update nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.page === pageName) {
      btn.classList.add('active');
    }
  });
}

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

  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.querySelector('.lang-text').textContent = currentLang === 'en' ? 'KO' : 'EN';
  }

  document.documentElement.lang = currentLang;

  // Re-render history with correct language
  renderHistory();
}

function initLanguage() {
  const savedLang = localStorage.getItem('lang');
  if (savedLang) {
    currentLang = savedLang;
  } else {
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

function updateBalls(containerId, numbers, specialNumber) {
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

function generateMegaMillions() {
  const whiteNumbers = getRandomNumbers(5, 1, 70);
  const megaBall = getRandomNumber(1, 25);
  updateBalls('megaNumbers', whiteNumbers, megaBall);
}

function generatePowerball() {
  const whiteNumbers = getRandomNumbers(5, 1, 69);
  const powerball = getRandomNumber(1, 26);
  updateBalls('powerballNumbers', whiteNumbers, powerball);
}

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

// ==================== Dinner Functions ====================
function selectCategory(category) {
  currentCategory = category;

  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.category === category) {
      btn.classList.add('active');
    }
  });
}

function getMenusByCategory() {
  if (currentCategory === 'all') {
    return Object.entries(dinnerMenus).flatMap(([cat, menus]) =>
      menus.map(menu => ({ ...menu, category: cat }))
    );
  }
  return dinnerMenus[currentCategory].map(menu => ({ ...menu, category: currentCategory }));
}

function pickDinner() {
  const menus = getMenusByCategory();
  const randomIndex = Math.floor(Math.random() * menus.length);
  const picked = menus[randomIndex];

  // Animate icon
  const icon = document.querySelector('.result-icon');
  icon.classList.add('shake');
  setTimeout(() => icon.classList.remove('shake'), 500);

  // Update icon based on category
  icon.textContent = categoryIcons[picked.category] || '🍽️';

  // Update result text
  const resultText = document.querySelector('.result-text');
  resultText.textContent = currentLang === 'ko' ? picked.ko : picked.en;
  resultText.classList.add('picked');

  // Add to history
  addToHistory(picked);
}

function addToHistory(menu) {
  dinnerHistory.unshift({
    menu: menu,
    timestamp: new Date()
  });

  // Keep only last 10 items
  if (dinnerHistory.length > 10) {
    dinnerHistory.pop();
  }

  renderHistory();
  saveHistory();
}

function renderHistory() {
  const historyList = document.getElementById('historyList');

  if (dinnerHistory.length === 0) {
    historyList.innerHTML = `<p class="history-empty" data-i18n="historyEmpty">${translations[currentLang].historyEmpty}</p>`;
    return;
  }

  historyList.innerHTML = dinnerHistory.map(item => {
    const menuName = currentLang === 'ko' ? item.menu.ko : item.menu.en;
    const catKey = 'cat' + item.menu.category.charAt(0).toUpperCase() + item.menu.category.slice(1);
    const categoryName = translations[currentLang][catKey];

    return `
      <div class="history-item">
        <span class="menu-name">${categoryIcons[item.menu.category]} ${menuName}</span>
        <span class="menu-category">${categoryName}</span>
      </div>
    `;
  }).join('');
}

function clearHistory() {
  dinnerHistory = [];
  renderHistory();
  saveHistory();

  // Reset result
  const resultText = document.querySelector('.result-text');
  resultText.textContent = translations[currentLang].dinnerPlaceholder;
  resultText.classList.remove('picked');
  document.querySelector('.result-icon').textContent = '🍽️';
}

function saveHistory() {
  localStorage.setItem('dinnerHistory', JSON.stringify(dinnerHistory));
}

function loadHistory() {
  const saved = localStorage.getItem('dinnerHistory');
  if (saved) {
    dinnerHistory = JSON.parse(saved);
    renderHistory();
  }
}

// ==================== Initialize ====================
initTheme();
initLanguage();
loadHistory();
