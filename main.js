// ==================== Translations ====================
const translations = {
  ko: {
    appTitle: '랜덤 픽',
    navLottery: '로또',
    navDinner: '저녁메뉴',
    navAnimal: '동물상',
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
    clearHistory: '기록 지우기',
    contactTitle: '제휴 문의',
    formName: '이름',
    formNamePlaceholder: '이름을 입력하세요',
    formEmail: '이메일',
    formEmailPlaceholder: '이메일을 입력하세요',
    formCompany: '회사명',
    formCompanyPlaceholder: '회사명을 입력하세요',
    formMessage: '문의 내용',
    formMessagePlaceholder: '문의 내용을 입력하세요',
    formSubmit: '문의하기',
    formNotice: '영업일 기준 2-3일 내 회신드립니다.',
    commentsTitle: '댓글',
    animalHeading: '동물상 테스트',
    animalPlaceholder: '사진을 업로드하세요!',
    uploadTitle: '사진 업로드',
    uploadText: '클릭하여 이미지 업로드',
    analyzeBtn: '내 얼굴 분석하기',
    analyzing: '분석 중...',
    howItWorks: '이용 방법',
    animalDescription: 'AI가 당신의 사진을 분석하여 강아지상인지 고양이상인지 판별합니다. 정확한 결과를 위해 얼굴이 잘 보이는 사진을 업로드해주세요!',
    dogFace: '강아지상',
    catFace: '고양이상',
    dogLabel: '강아지',
    catLabel: '고양이',
    navAbout: '소개',
    aboutHeading: 'Random Pick 소개',
    aboutTitle: '서비스 소개',
    aboutDescription: 'Random Pick은 다양한 랜덤 선택 도구를 제공하는 무료 유틸리티 서비스입니다. 로또 번호 생성기, 저녁 메뉴 추천, AI 동물상 테스트 기능을 통해 빠르고 쉽게 선택을 도와드립니다.',
    featuresTitle: '주요 기능',
    feature1Title: '로또 번호 생성기',
    feature1Desc: '한국 로또 645, 미국 메가밀리언, 파워볼의 랜덤 번호를 생성합니다. 암호학적으로 안전한 난수 알고리즘을 사용합니다.',
    feature2Title: '저녁 메뉴 추천',
    feature2Desc: '무엇을 먹을지 고민될 때! 한식, 중식, 일식, 양식, 아시안 요리 중에서 랜덤으로 메뉴를 추천해드립니다.',
    feature3Title: 'AI 동물상 테스트',
    feature3Desc: '사진을 업로드하면 AI가 강아지상인지 고양이상인지 분석해드립니다. 재미로 즐기는 테스트입니다!',
    contactUsTitle: '문의하기',
    contactUsDesc: '비즈니스 문의, 제휴, 피드백은 저녁메뉴 페이지의 문의 양식을 이용하시거나 이메일로 연락해주세요.',
    legalTitle: '법적 고지',
    privacyPolicy: '개인정보처리방침',
    termsOfService: '이용약관',
    footerTagline: '당신의 랜덤 선택 도우미',
    // Blog translations
    navBlog: '블로그',
    blogHeading: 'AI 인사이트 블로그',
    blogIntro: '인공지능의 최신 트렌드, 가이드, 그리고 우리의 세상을 어떻게 변화시키고 있는지에 대한 인사이트를 살펴보세요.',
    catBasics: '기초',
    catTechnology: '기술',
    catTrends: '트렌드',
    catLifestyle: '라이프스타일',
    catCreative: '크리에이티브',
    catEthics: '윤리',
    catGuide: '가이드',
    catDevelopment: '개발',
    catLearning: '학습',
    readMore: '자세히 보기',
    prevPost: '이전 글',
    nextPost: '다음 글',
    blog1Title: '인공지능(AI)이란 무엇인가?',
    blog1Summary: 'AI의 기초 개념, 역사, 그리고 쉬운 용어로 설명하는 작동 원리',
    blog2Title: '머신러닝 vs 딥러닝',
    blog2Summary: '이 두 가지 핵심 AI 개념의 주요 차이점 이해하기',
    blog3Title: 'ChatGPT와 대화형 AI',
    blog3Summary: '대규모 언어 모델이 인간-컴퓨터 상호작용을 어떻게 혁신하고 있는가',
    blog4Title: '일상 속의 AI',
    blog4Summary: 'AI가 이미 당신의 일상 활동과 기기에 어떻게 통합되어 있는지 알아보기',
    blog5Title: 'AI 이미지 생성 도구',
    blog5Summary: 'DALL-E, Midjourney, Stable Diffusion 비교: 멋진 비주얼 만들기',
    blog6Title: 'AI 윤리와 책임',
    blog6Summary: 'AI 시스템의 윤리적 개발과 사용을 위한 중요한 고려사항',
    blog7Title: '프롬프트 엔지니어링 마스터하기',
    blog7Summary: 'AI 도구에서 최상의 결과를 얻기 위한 효과적인 프롬프트 작성법',
    blog8Title: 'AI 코딩 어시스턴트',
    blog8Summary: 'GitHub Copilot과 다른 AI 도구들이 소프트웨어 개발을 어떻게 변화시키고 있는가',
    blog9Title: 'AI 음성 인식',
    blog9Summary: '음성 제어 AI 어시스턴트와 음성 인식의 진화와 미래',
    blog10Title: 'AI와 창작 예술',
    blog10Summary: '예술, 음악 작곡, 창작 글쓰기에서 AI의 역할 탐구',
    blog11Title: 'AI 학습 리소스',
    blog11Summary: 'AI 학습을 시작하는 초보자를 위한 최고의 강좌, 책, 리소스',
    blog12Title: '2024년 AI 트렌드',
    blog12Summary: '인공지능의 미래를 형성하는 핵심 기술과 발전'
  },
  en: {
    appTitle: 'Random Pick',
    navLottery: 'Lottery',
    navDinner: 'Dinner',
    navAnimal: 'Animal',
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
    clearHistory: 'Clear History',
    contactTitle: 'Partnership Inquiry',
    formName: 'Name',
    formNamePlaceholder: 'Enter your name',
    formEmail: 'Email',
    formEmailPlaceholder: 'Enter your email',
    formCompany: 'Company',
    formCompanyPlaceholder: 'Enter your company name',
    formMessage: 'Message',
    formMessagePlaceholder: 'Enter your message',
    formSubmit: 'Send Inquiry',
    formNotice: "We'll get back to you within 2-3 business days.",
    commentsTitle: 'Comments',
    animalHeading: 'Animal Face Test',
    animalPlaceholder: 'Upload your photo!',
    uploadTitle: 'Upload Photo',
    uploadText: 'Click to upload image',
    analyzeBtn: 'Analyze My Face',
    analyzing: 'Analyzing...',
    howItWorks: 'How It Works',
    animalDescription: 'This AI analyzes your photo to determine if you have more dog-like or cat-like features. Upload a clear face photo for best results!',
    dogFace: 'Dog Face',
    catFace: 'Cat Face',
    dogLabel: 'Dog',
    catLabel: 'Cat',
    navAbout: 'About',
    aboutHeading: 'About Random Pick',
    aboutTitle: 'About Us',
    aboutDescription: 'Random Pick is a free utility service that provides various random selection tools. We aim to help you make decisions quickly and easily through our lottery number generator, dinner menu picker, and AI-powered animal face test features.',
    featuresTitle: 'Our Features',
    feature1Title: 'Lottery Number Generator',
    feature1Desc: 'Generate random numbers for Korea Lotto 645, US Mega Millions, and Powerball. Our generator uses a cryptographically secure random algorithm.',
    feature2Title: 'Dinner Menu Picker',
    feature2Desc: "Can't decide what to eat? Let us pick a random dinner menu for you! Choose from Korean, Chinese, Japanese, Western, and Asian cuisines.",
    feature3Title: 'AI Animal Face Test',
    feature3Desc: 'Upload your photo and let our AI determine if you have more dog-like or cat-like features. Fun and entertainment for everyone!',
    contactUsTitle: 'Contact Us',
    contactUsDesc: 'For business inquiries, partnerships, or feedback, please use the contact form on the Dinner page or email us directly.',
    legalTitle: 'Legal',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    footerTagline: 'Your go-to random selection tool',
    // Blog translations
    navBlog: 'Blog',
    blogHeading: 'AI Insights Blog',
    blogIntro: 'Explore the latest trends, guides, and insights about Artificial Intelligence and how it\'s transforming our world.',
    catBasics: 'Basics',
    catTechnology: 'Technology',
    catTrends: 'Trends',
    catLifestyle: 'Lifestyle',
    catCreative: 'Creative',
    catEthics: 'Ethics',
    catGuide: 'Guide',
    catDevelopment: 'Development',
    catLearning: 'Learning',
    readMore: 'Read More',
    prevPost: 'Previous',
    nextPost: 'Next',
    blog1Title: 'What is Artificial Intelligence?',
    blog1Summary: 'A comprehensive introduction to AI, its history, and how it works in simple terms.',
    blog2Title: 'Machine Learning vs Deep Learning',
    blog2Summary: 'Understanding the key differences between these two fundamental AI concepts.',
    blog3Title: 'ChatGPT and Conversational AI',
    blog3Summary: 'How large language models are revolutionizing human-computer interaction.',
    blog4Title: 'AI in Daily Life',
    blog4Summary: 'Discover how AI is already integrated into your everyday activities and devices.',
    blog5Title: 'AI Image Generation Tools',
    blog5Summary: 'Compare DALL-E, Midjourney, and Stable Diffusion for creating stunning visuals.',
    blog6Title: 'AI Ethics and Responsibility',
    blog6Summary: 'Important considerations for the ethical development and use of AI systems.',
    blog7Title: 'Prompt Engineering Mastery',
    blog7Summary: 'Learn how to write effective prompts to get the best results from AI tools.',
    blog8Title: 'AI Coding Assistants',
    blog8Summary: 'How GitHub Copilot and other AI tools are transforming software development.',
    blog9Title: 'AI Voice Recognition',
    blog9Summary: 'The evolution and future of voice-controlled AI assistants and speech recognition.',
    blog10Title: 'AI and Creative Arts',
    blog10Summary: 'Exploring AI\'s role in art, music composition, and creative writing.',
    blog11Title: 'AI Learning Resources',
    blog11Summary: 'Best courses, books, and resources for beginners to start learning AI.',
    blog12Title: 'AI Trends in 2024',
    blog12Summary: 'Key technologies and developments shaping the future of artificial intelligence.'
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

  // Translate placeholders
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[currentLang][key]) {
      el.placeholder = translations[currentLang][key];
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

// ==================== Animal Face Test Functions ====================
const ANIMAL_MODEL_URL = "https://teachablemachine.withgoogle.com/models/n0owLZW-x/";
let animalModel = null;
let uploadedImage = null;

async function loadAnimalModel() {
  if (animalModel) return animalModel;

  try {
    const modelURL = ANIMAL_MODEL_URL + "model.json";
    const metadataURL = ANIMAL_MODEL_URL + "metadata.json";
    animalModel = await tmImage.load(modelURL, metadataURL);
    return animalModel;
  } catch (error) {
    console.error("Failed to load model:", error);
    return null;
  }
}

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const previewImage = document.getElementById('previewImage');
    const uploadPlaceholder = document.getElementById('uploadPlaceholder');
    const uploadArea = document.getElementById('uploadArea');
    const analyzeBtn = document.getElementById('analyzeBtn');

    previewImage.src = e.target.result;
    previewImage.classList.add('visible');
    uploadPlaceholder.style.display = 'none';
    uploadArea.classList.add('has-image');
    analyzeBtn.disabled = false;

    uploadedImage = previewImage;
  };
  reader.readAsDataURL(file);
}

async function analyzeImage() {
  if (!uploadedImage) return;

  const loadingContainer = document.getElementById('loadingContainer');
  const analyzeBtn = document.getElementById('analyzeBtn');

  // Show loading
  loadingContainer.classList.add('visible');
  analyzeBtn.disabled = true;

  try {
    // Load model if not loaded
    const model = await loadAnimalModel();
    if (!model) {
      alert('Failed to load AI model. Please try again.');
      return;
    }

    // Predict
    const predictions = await model.predict(uploadedImage);

    // Find results
    let dogProb = 0;
    let catProb = 0;

    predictions.forEach(pred => {
      const className = pred.className.toLowerCase();
      if (className.includes('dog') || className.includes('강아지')) {
        dogProb = pred.probability;
      } else if (className.includes('cat') || className.includes('고양이')) {
        catProb = pred.probability;
      }
    });

    // Display results
    displayAnimalResult(dogProb, catProb);

  } catch (error) {
    console.error("Analysis failed:", error);
    alert('Analysis failed. Please try again.');
  } finally {
    loadingContainer.classList.remove('visible');
    analyzeBtn.disabled = false;
  }
}

function displayAnimalResult(dogProb, catProb) {
  const resultText = document.getElementById('animalResultText');
  const animalIcon = document.getElementById('animalIcon');
  const probabilityContainer = document.getElementById('animalProbability');
  const iconContainer = document.querySelector('.animal-icon-container');

  const isDog = dogProb > catProb;
  const resultLabel = isDog
    ? translations[currentLang].dogFace
    : translations[currentLang].catFace;

  // Update result text
  resultText.textContent = resultLabel;
  resultText.className = 'animal-result-text ' + (isDog ? 'dog' : 'cat');

  // Update icon
  animalIcon.textContent = isDog ? '🐶' : '🐱';
  iconContainer.style.background = isDog
    ? 'linear-gradient(135deg, #fed7aa, #fdba74)'
    : 'linear-gradient(135deg, #e9d5ff, #d8b4fe)';

  // Update probability bars
  const dogPercent = Math.round(dogProb * 100);
  const catPercent = Math.round(catProb * 100);

  probabilityContainer.innerHTML = `
    <div class="prob-item">
      <span class="prob-label">${translations[currentLang].dogLabel} 🐶</span>
      <div class="prob-bar">
        <div class="prob-fill dog" style="width: ${dogPercent}%"></div>
      </div>
      <span class="prob-value">${dogPercent}%</span>
    </div>
    <div class="prob-item">
      <span class="prob-label">${translations[currentLang].catLabel} 🐱</span>
      <div class="prob-bar">
        <div class="prob-fill cat" style="width: ${catPercent}%"></div>
      </div>
      <span class="prob-value">${catPercent}%</span>
    </div>
  `;
}

function resetAnimalTest() {
  const previewImage = document.getElementById('previewImage');
  const uploadPlaceholder = document.getElementById('uploadPlaceholder');
  const uploadArea = document.getElementById('uploadArea');
  const analyzeBtn = document.getElementById('analyzeBtn');
  const resultText = document.getElementById('animalResultText');
  const animalIcon = document.getElementById('animalIcon');
  const probabilityContainer = document.getElementById('animalProbability');
  const iconContainer = document.querySelector('.animal-icon-container');

  previewImage.src = '';
  previewImage.classList.remove('visible');
  uploadPlaceholder.style.display = 'flex';
  uploadArea.classList.remove('has-image');
  analyzeBtn.disabled = true;

  resultText.textContent = translations[currentLang].animalPlaceholder;
  resultText.className = 'animal-result-text';
  animalIcon.textContent = '🤔';
  iconContainer.style.background = 'linear-gradient(135deg, #fef3c7, #fde68a)';
  probabilityContainer.innerHTML = '';

  uploadedImage = null;
  document.getElementById('imageInput').value = '';
}

// ==================== Blog Data ====================
const blogPosts = {
  1: {
    icon: '🤖',
    category: { en: 'Basics', ko: '기초' },
    title: {
      en: 'What is Artificial Intelligence?',
      ko: '인공지능(AI)이란 무엇인가?'
    },
    content: {
      en: `
        <h3>Understanding AI: The Basics</h3>
        <p>Artificial Intelligence (AI) refers to computer systems designed to perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.</p>

        <h3>A Brief History of AI</h3>
        <p>The concept of AI dates back to ancient myths, but the modern field was officially founded in 1956 at the Dartmouth Conference. Since then, AI has gone through several "winters" and "springs" of development, leading to today's remarkable advances.</p>
        <ul>
          <li><strong>1950s-1960s:</strong> Early AI research focused on problem-solving and symbolic methods</li>
          <li><strong>1970s-1980s:</strong> Expert systems became popular in business applications</li>
          <li><strong>1990s-2000s:</strong> Machine learning began to flourish with more data availability</li>
          <li><strong>2010s-Present:</strong> Deep learning revolution, powered by GPUs and big data</li>
        </ul>

        <h3>How Does AI Work?</h3>
        <p>At its core, AI systems work by processing large amounts of data through algorithms that can identify patterns and make decisions. The three main approaches are:</p>
        <ol>
          <li><strong>Rule-based systems:</strong> Follow predefined rules created by experts</li>
          <li><strong>Machine learning:</strong> Learn patterns from data without explicit programming</li>
          <li><strong>Deep learning:</strong> Use neural networks to learn complex patterns automatically</li>
        </ol>

        <h3>Types of AI</h3>
        <p><strong>Narrow AI (Weak AI):</strong> Designed for specific tasks like voice assistants, recommendation systems, or image recognition. This is what we have today.</p>
        <p><strong>General AI (Strong AI):</strong> Hypothetical AI that could perform any intellectual task a human can. This doesn't exist yet.</p>
        <p><strong>Super AI:</strong> A theoretical AI that would surpass human intelligence in all aspects.</p>

        <h3>AI in Your Daily Life</h3>
        <p>You interact with AI more than you might realize:</p>
        <ul>
          <li>Voice assistants (Siri, Alexa, Google Assistant)</li>
          <li>Email spam filters</li>
          <li>Social media feeds and recommendations</li>
          <li>Navigation apps predicting traffic</li>
          <li>Online shopping recommendations</li>
          <li>Facial recognition on your phone</li>
        </ul>
      `,
      ko: `
        <h3>AI 이해하기: 기초</h3>
        <p>인공지능(AI)은 일반적으로 인간의 지능이 필요한 작업을 수행하도록 설계된 컴퓨터 시스템을 말합니다. 이러한 작업에는 학습, 추론, 문제 해결, 인식 및 언어 이해가 포함됩니다.</p>

        <h3>AI의 간략한 역사</h3>
        <p>AI의 개념은 고대 신화로 거슬러 올라가지만, 현대 분야는 1956년 다트머스 회의에서 공식적으로 시작되었습니다. 그 이후로 AI는 여러 번의 "겨울"과 "봄"을 거쳐 오늘날의 놀라운 발전에 이르렀습니다.</p>
        <ul>
          <li><strong>1950~1960년대:</strong> 초기 AI 연구는 문제 해결과 기호적 방법에 집중</li>
          <li><strong>1970~1980년대:</strong> 전문가 시스템이 비즈니스 애플리케이션에서 인기</li>
          <li><strong>1990~2000년대:</strong> 데이터 가용성 증가로 머신러닝 발전</li>
          <li><strong>2010년대~현재:</strong> GPU와 빅데이터를 통한 딥러닝 혁명</li>
        </ul>

        <h3>AI는 어떻게 작동하나요?</h3>
        <p>핵심적으로 AI 시스템은 패턴을 식별하고 결정을 내릴 수 있는 알고리즘을 통해 대량의 데이터를 처리합니다. 세 가지 주요 접근 방식이 있습니다:</p>
        <ol>
          <li><strong>규칙 기반 시스템:</strong> 전문가가 만든 사전 정의된 규칙을 따름</li>
          <li><strong>머신러닝:</strong> 명시적 프로그래밍 없이 데이터에서 패턴을 학습</li>
          <li><strong>딥러닝:</strong> 신경망을 사용하여 복잡한 패턴을 자동으로 학습</li>
        </ol>

        <h3>AI의 유형</h3>
        <p><strong>좁은 AI (약한 AI):</strong> 음성 비서, 추천 시스템, 이미지 인식과 같은 특정 작업을 위해 설계됨. 현재 우리가 가진 것입니다.</p>
        <p><strong>일반 AI (강한 AI):</strong> 인간이 할 수 있는 모든 지적 작업을 수행할 수 있는 가상의 AI. 아직 존재하지 않습니다.</p>
        <p><strong>슈퍼 AI:</strong> 모든 면에서 인간 지능을 초월하는 이론적 AI.</p>

        <h3>일상 속의 AI</h3>
        <p>당신은 생각보다 더 많이 AI와 상호작용하고 있습니다:</p>
        <ul>
          <li>음성 비서 (시리, 알렉사, 구글 어시스턴트)</li>
          <li>이메일 스팸 필터</li>
          <li>소셜 미디어 피드 및 추천</li>
          <li>교통 예측 내비게이션 앱</li>
          <li>온라인 쇼핑 추천</li>
          <li>휴대폰의 얼굴 인식</li>
        </ul>
      `
    }
  },
  2: {
    icon: '🧠',
    category: { en: 'Technology', ko: '기술' },
    title: {
      en: 'Machine Learning vs Deep Learning',
      ko: '머신러닝 vs 딥러닝'
    },
    content: {
      en: `
        <h3>Understanding the Difference</h3>
        <p>While often used interchangeably, Machine Learning and Deep Learning are distinct concepts with important differences. Understanding these differences helps you better appreciate how AI systems work.</p>

        <h3>What is Machine Learning?</h3>
        <p>Machine Learning (ML) is a subset of AI that enables computers to learn from data without being explicitly programmed. Instead of writing specific rules, ML algorithms find patterns in data and improve through experience.</p>
        <p><strong>Key characteristics:</strong></p>
        <ul>
          <li>Requires structured, labeled data</li>
          <li>Features need to be manually selected by experts</li>
          <li>Works well with smaller datasets</li>
          <li>More interpretable results</li>
          <li>Less computational power required</li>
        </ul>

        <h3>What is Deep Learning?</h3>
        <p>Deep Learning is a specialized subset of ML that uses artificial neural networks with multiple layers (hence "deep"). These networks can automatically discover features from raw data.</p>
        <p><strong>Key characteristics:</strong></p>
        <ul>
          <li>Can work with unstructured data (images, text, audio)</li>
          <li>Automatically extracts features</li>
          <li>Requires large amounts of data</li>
          <li>Needs significant computational power (GPUs)</li>
          <li>Can achieve higher accuracy on complex tasks</li>
        </ul>

        <h3>When to Use Each</h3>
        <p><strong>Use Machine Learning when:</strong></p>
        <ul>
          <li>You have limited data</li>
          <li>You need interpretable results</li>
          <li>Computational resources are limited</li>
          <li>The problem has clear features</li>
        </ul>
        <p><strong>Use Deep Learning when:</strong></p>
        <ul>
          <li>You have large amounts of data</li>
          <li>Working with images, speech, or text</li>
          <li>You have powerful computing resources</li>
          <li>The problem is highly complex</li>
        </ul>

        <h3>Real-World Applications</h3>
        <p><strong>Machine Learning:</strong> Credit scoring, email filtering, product recommendations, fraud detection</p>
        <p><strong>Deep Learning:</strong> Self-driving cars, voice assistants, medical image analysis, language translation</p>
      `,
      ko: `
        <h3>차이점 이해하기</h3>
        <p>종종 혼용되지만, 머신러닝과 딥러닝은 중요한 차이점이 있는 별개의 개념입니다. 이러한 차이점을 이해하면 AI 시스템이 어떻게 작동하는지 더 잘 이해할 수 있습니다.</p>

        <h3>머신러닝이란?</h3>
        <p>머신러닝(ML)은 컴퓨터가 명시적으로 프로그래밍되지 않고 데이터로부터 학습할 수 있게 하는 AI의 하위 집합입니다. 특정 규칙을 작성하는 대신 ML 알고리즘은 데이터에서 패턴을 찾고 경험을 통해 개선됩니다.</p>
        <p><strong>주요 특징:</strong></p>
        <ul>
          <li>구조화되고 레이블이 지정된 데이터 필요</li>
          <li>전문가가 수동으로 특징 선택 필요</li>
          <li>작은 데이터셋에서도 잘 작동</li>
          <li>더 해석 가능한 결과</li>
          <li>적은 컴퓨팅 파워 필요</li>
        </ul>

        <h3>딥러닝이란?</h3>
        <p>딥러닝은 여러 레이어를 가진 인공 신경망을 사용하는 ML의 특수한 하위 집합입니다("딥"이라는 이름이 여기서 유래). 이러한 네트워크는 원시 데이터에서 특징을 자동으로 발견할 수 있습니다.</p>
        <p><strong>주요 특징:</strong></p>
        <ul>
          <li>비정형 데이터(이미지, 텍스트, 오디오) 처리 가능</li>
          <li>자동으로 특징 추출</li>
          <li>대량의 데이터 필요</li>
          <li>상당한 컴퓨팅 파워 필요 (GPU)</li>
          <li>복잡한 작업에서 더 높은 정확도 달성 가능</li>
        </ul>

        <h3>각각 언제 사용해야 하나요?</h3>
        <p><strong>머신러닝을 사용할 때:</strong></p>
        <ul>
          <li>데이터가 제한적인 경우</li>
          <li>해석 가능한 결과가 필요한 경우</li>
          <li>컴퓨팅 리소스가 제한적인 경우</li>
          <li>문제에 명확한 특징이 있는 경우</li>
        </ul>
        <p><strong>딥러닝을 사용할 때:</strong></p>
        <ul>
          <li>대량의 데이터가 있는 경우</li>
          <li>이미지, 음성 또는 텍스트 작업 시</li>
          <li>강력한 컴퓨팅 리소스가 있는 경우</li>
          <li>문제가 매우 복잡한 경우</li>
        </ul>

        <h3>실제 응용 사례</h3>
        <p><strong>머신러닝:</strong> 신용 점수, 이메일 필터링, 제품 추천, 사기 탐지</p>
        <p><strong>딥러닝:</strong> 자율주행차, 음성 비서, 의료 이미지 분석, 언어 번역</p>
      `
    }
  },
  3: {
    icon: '💬',
    category: { en: 'Trends', ko: '트렌드' },
    title: {
      en: 'ChatGPT and Conversational AI',
      ko: 'ChatGPT와 대화형 AI'
    },
    content: {
      en: `
        <h3>The Rise of Conversational AI</h3>
        <p>ChatGPT, developed by OpenAI, has revolutionized how we interact with artificial intelligence. Launched in November 2022, it quickly became one of the fastest-growing applications in history, reaching 100 million users in just two months.</p>

        <h3>How Large Language Models Work</h3>
        <p>ChatGPT is built on GPT (Generative Pre-trained Transformer) architecture. Here's how it works:</p>
        <ol>
          <li><strong>Pre-training:</strong> The model learns from vast amounts of text data from the internet</li>
          <li><strong>Fine-tuning:</strong> Human trainers provide examples of desired responses</li>
          <li><strong>RLHF:</strong> Reinforcement Learning from Human Feedback further refines outputs</li>
        </ol>

        <h3>Key Capabilities</h3>
        <ul>
          <li><strong>Natural conversation:</strong> Understands context and maintains coherent dialogue</li>
          <li><strong>Creative writing:</strong> Generates stories, poems, scripts, and more</li>
          <li><strong>Code assistance:</strong> Writes, explains, and debugs code</li>
          <li><strong>Analysis:</strong> Summarizes documents and extracts insights</li>
          <li><strong>Translation:</strong> Converts text between languages</li>
          <li><strong>Education:</strong> Explains complex concepts in simple terms</li>
        </ul>

        <h3>Other Notable Conversational AIs</h3>
        <p><strong>Claude (Anthropic):</strong> Known for being helpful, harmless, and honest with strong reasoning capabilities</p>
        <p><strong>Gemini (Google):</strong> Multimodal AI that can understand text, images, and code</p>
        <p><strong>Llama (Meta):</strong> Open-source model allowing developers to build custom applications</p>

        <h3>The Future of Conversational AI</h3>
        <p>We're seeing rapid development in:</p>
        <ul>
          <li>Multimodal capabilities (text, image, voice, video)</li>
          <li>Longer context windows for complex documents</li>
          <li>More personalized and specialized assistants</li>
          <li>Integration with real-world tools and services</li>
          <li>Improved accuracy and reduced hallucinations</li>
        </ul>
      `,
      ko: `
        <h3>대화형 AI의 부상</h3>
        <p>OpenAI가 개발한 ChatGPT는 우리가 인공지능과 상호작용하는 방식을 혁명적으로 바꿨습니다. 2022년 11월에 출시된 이 서비스는 단 두 달 만에 1억 명의 사용자에 도달하며 역사상 가장 빠르게 성장하는 애플리케이션 중 하나가 되었습니다.</p>

        <h3>대규모 언어 모델의 작동 원리</h3>
        <p>ChatGPT는 GPT(Generative Pre-trained Transformer) 아키텍처를 기반으로 합니다. 작동 방식은 다음과 같습니다:</p>
        <ol>
          <li><strong>사전 학습:</strong> 모델이 인터넷의 방대한 텍스트 데이터로부터 학습</li>
          <li><strong>미세 조정:</strong> 인간 트레이너가 원하는 응답의 예시 제공</li>
          <li><strong>RLHF:</strong> 인간 피드백을 통한 강화 학습으로 출력 품질 향상</li>
        </ol>

        <h3>주요 기능</h3>
        <ul>
          <li><strong>자연스러운 대화:</strong> 맥락을 이해하고 일관된 대화 유지</li>
          <li><strong>창작 글쓰기:</strong> 이야기, 시, 대본 등 생성</li>
          <li><strong>코드 지원:</strong> 코드 작성, 설명 및 디버깅</li>
          <li><strong>분석:</strong> 문서 요약 및 인사이트 추출</li>
          <li><strong>번역:</strong> 언어 간 텍스트 변환</li>
          <li><strong>교육:</strong> 복잡한 개념을 쉬운 용어로 설명</li>
        </ul>

        <h3>다른 주목할 만한 대화형 AI</h3>
        <p><strong>Claude (Anthropic):</strong> 도움이 되고, 무해하며, 정직하고 강력한 추론 능력으로 유명</p>
        <p><strong>Gemini (Google):</strong> 텍스트, 이미지, 코드를 이해할 수 있는 멀티모달 AI</p>
        <p><strong>Llama (Meta):</strong> 개발자가 맞춤 애플리케이션을 구축할 수 있는 오픈소스 모델</p>

        <h3>대화형 AI의 미래</h3>
        <p>우리는 다음 분야에서 빠른 발전을 목격하고 있습니다:</p>
        <ul>
          <li>멀티모달 기능 (텍스트, 이미지, 음성, 비디오)</li>
          <li>복잡한 문서를 위한 더 긴 컨텍스트 윈도우</li>
          <li>더욱 개인화되고 전문화된 어시스턴트</li>
          <li>실제 도구 및 서비스와의 통합</li>
          <li>향상된 정확도와 환각 현상 감소</li>
        </ul>
      `
    }
  },
  4: {
    icon: '🏠',
    category: { en: 'Lifestyle', ko: '라이프스타일' },
    title: {
      en: 'AI in Daily Life',
      ko: '일상 속의 AI'
    },
    content: {
      en: `
        <h3>AI Is Already Everywhere</h3>
        <p>Artificial Intelligence has seamlessly integrated into our daily lives, often working behind the scenes in ways we don't even notice. Let's explore how AI makes our everyday experiences smarter and more convenient.</p>

        <h3>Smart Home Devices</h3>
        <p>Your home is getting smarter every day:</p>
        <ul>
          <li><strong>Voice assistants:</strong> Alexa, Google Home, and Siri understand natural language and control your home</li>
          <li><strong>Smart thermostats:</strong> Learn your schedule and preferences to optimize energy use</li>
          <li><strong>Robot vacuums:</strong> Map your home and navigate obstacles intelligently</li>
          <li><strong>Smart security:</strong> Facial recognition, unusual activity detection, and smart alerts</li>
        </ul>

        <h3>Communication & Social Media</h3>
        <ul>
          <li><strong>Email:</strong> Spam filtering, smart replies, and email categorization</li>
          <li><strong>Social feeds:</strong> Personalized content recommendations</li>
          <li><strong>Photo apps:</strong> Automatic organization, face tagging, and search</li>
          <li><strong>Translation:</strong> Real-time language translation in messages and apps</li>
        </ul>

        <h3>Entertainment</h3>
        <ul>
          <li><strong>Netflix/YouTube:</strong> AI recommends what to watch based on viewing history</li>
          <li><strong>Spotify:</strong> Creates personalized playlists and discovers new music</li>
          <li><strong>Gaming:</strong> AI opponents that adapt to your skill level</li>
          <li><strong>Photography:</strong> AI-powered photo enhancement and filters</li>
        </ul>

        <h3>Shopping & Finance</h3>
        <ul>
          <li><strong>Product recommendations:</strong> "Customers who bought this also bought..."</li>
          <li><strong>Price predictions:</strong> Best time to buy flights and products</li>
          <li><strong>Fraud detection:</strong> Banks use AI to spot unusual transactions</li>
          <li><strong>Chatbots:</strong> 24/7 customer service assistance</li>
        </ul>

        <h3>Health & Fitness</h3>
        <ul>
          <li><strong>Fitness trackers:</strong> Analyze activity patterns and provide insights</li>
          <li><strong>Sleep apps:</strong> Monitor sleep quality and suggest improvements</li>
          <li><strong>Health apps:</strong> Symptom checkers and medication reminders</li>
          <li><strong>Mental health:</strong> AI-powered meditation and therapy apps</li>
        </ul>

        <h3>Transportation</h3>
        <ul>
          <li><strong>Navigation:</strong> Real-time traffic prediction and route optimization</li>
          <li><strong>Ride-sharing:</strong> Dynamic pricing and driver matching</li>
          <li><strong>Parking:</strong> Apps that find available parking spots</li>
          <li><strong>Electric vehicles:</strong> Battery optimization and charging recommendations</li>
        </ul>
      `,
      ko: `
        <h3>AI는 이미 어디에나 있습니다</h3>
        <p>인공지능은 우리의 일상에 자연스럽게 통합되어 종종 우리가 인식하지 못하는 방식으로 배후에서 작동하고 있습니다. AI가 어떻게 우리의 일상 경험을 더 스마트하고 편리하게 만드는지 살펴보겠습니다.</p>

        <h3>스마트 홈 기기</h3>
        <p>당신의 집은 매일 더 스마트해지고 있습니다:</p>
        <ul>
          <li><strong>음성 비서:</strong> 알렉사, 구글 홈, 시리가 자연어를 이해하고 집을 제어</li>
          <li><strong>스마트 온도조절기:</strong> 일정과 선호도를 학습하여 에너지 사용 최적화</li>
          <li><strong>로봇 청소기:</strong> 집을 매핑하고 장애물을 지능적으로 탐색</li>
          <li><strong>스마트 보안:</strong> 얼굴 인식, 이상 활동 감지, 스마트 알림</li>
        </ul>

        <h3>커뮤니케이션 & 소셜 미디어</h3>
        <ul>
          <li><strong>이메일:</strong> 스팸 필터링, 스마트 답장, 이메일 분류</li>
          <li><strong>소셜 피드:</strong> 개인화된 콘텐츠 추천</li>
          <li><strong>사진 앱:</strong> 자동 정리, 얼굴 태깅, 검색</li>
          <li><strong>번역:</strong> 메시지와 앱에서 실시간 언어 번역</li>
        </ul>

        <h3>엔터테인먼트</h3>
        <ul>
          <li><strong>넷플릭스/유튜브:</strong> AI가 시청 기록을 기반으로 시청할 콘텐츠 추천</li>
          <li><strong>스포티파이:</strong> 개인화된 플레이리스트 생성 및 새로운 음악 발견</li>
          <li><strong>게임:</strong> 당신의 실력에 맞게 적응하는 AI 상대</li>
          <li><strong>사진:</strong> AI 기반 사진 향상 및 필터</li>
        </ul>

        <h3>쇼핑 & 금융</h3>
        <ul>
          <li><strong>제품 추천:</strong> "이 제품을 구매한 고객이 함께 구매한 상품..."</li>
          <li><strong>가격 예측:</strong> 항공권과 제품 구매 최적 시기</li>
          <li><strong>사기 탐지:</strong> 은행이 AI를 사용해 비정상적인 거래 감지</li>
          <li><strong>챗봇:</strong> 24시간 고객 서비스 지원</li>
        </ul>

        <h3>건강 & 피트니스</h3>
        <ul>
          <li><strong>피트니스 트래커:</strong> 활동 패턴 분석 및 인사이트 제공</li>
          <li><strong>수면 앱:</strong> 수면 품질 모니터링 및 개선 제안</li>
          <li><strong>건강 앱:</strong> 증상 체커 및 약 복용 알림</li>
          <li><strong>정신 건강:</strong> AI 기반 명상 및 테라피 앱</li>
        </ul>

        <h3>교통</h3>
        <ul>
          <li><strong>네비게이션:</strong> 실시간 교통 예측 및 경로 최적화</li>
          <li><strong>차량 공유:</strong> 동적 가격 책정 및 드라이버 매칭</li>
          <li><strong>주차:</strong> 이용 가능한 주차 공간을 찾는 앱</li>
          <li><strong>전기차:</strong> 배터리 최적화 및 충전 추천</li>
        </ul>
      `
    }
  },
  5: {
    icon: '🎨',
    category: { en: 'Creative', ko: '크리에이티브' },
    title: {
      en: 'AI Image Generation Tools',
      ko: 'AI 이미지 생성 도구'
    },
    content: {
      en: `
        <h3>The AI Art Revolution</h3>
        <p>AI image generation has transformed how we create visual content. From simple text descriptions, these tools can produce stunning, unique images in seconds. Let's compare the major players.</p>

        <h3>DALL-E 3 (OpenAI)</h3>
        <p><strong>Best for:</strong> Natural language understanding and accurate prompt following</p>
        <ul>
          <li>Excellent at understanding complex, detailed prompts</li>
          <li>Strong text rendering within images</li>
          <li>Integrated with ChatGPT for conversational image creation</li>
          <li>Built-in safety features and content policies</li>
          <li>Commercial use allowed with proper licensing</li>
        </ul>

        <h3>Midjourney</h3>
        <p><strong>Best for:</strong> Artistic, stylized, and aesthetically stunning images</p>
        <ul>
          <li>Exceptional artistic quality and unique style</li>
          <li>Strong community and inspiration gallery</li>
          <li>Works through Discord interface</li>
          <li>Great for concept art and creative projects</li>
          <li>Regular updates with new features and styles</li>
        </ul>

        <h3>Stable Diffusion</h3>
        <p><strong>Best for:</strong> Customization and local/private use</p>
        <ul>
          <li>Open-source and free to use</li>
          <li>Can run locally on your own computer</li>
          <li>Highly customizable with community models</li>
          <li>No content restrictions (user responsibility)</li>
          <li>Large ecosystem of extensions and tools</li>
        </ul>

        <h3>Tips for Better Results</h3>
        <ol>
          <li><strong>Be specific:</strong> Include details about style, lighting, mood, and composition</li>
          <li><strong>Use artistic references:</strong> Mention art styles, famous artists, or photography terms</li>
          <li><strong>Iterate:</strong> Refine your prompts based on initial results</li>
          <li><strong>Negative prompts:</strong> Specify what you DON'T want to see</li>
          <li><strong>Aspect ratios:</strong> Choose appropriate dimensions for your use case</li>
        </ol>

        <h3>Ethical Considerations</h3>
        <ul>
          <li>Respect copyright and intellectual property</li>
          <li>Be transparent about AI-generated content</li>
          <li>Consider the impact on artists and creators</li>
          <li>Avoid creating harmful or misleading content</li>
        </ul>
      `,
      ko: `
        <h3>AI 아트 혁명</h3>
        <p>AI 이미지 생성은 우리가 시각적 콘텐츠를 만드는 방식을 변화시켰습니다. 간단한 텍스트 설명만으로 이 도구들은 몇 초 만에 놀라운 고유한 이미지를 생성할 수 있습니다. 주요 도구들을 비교해 보겠습니다.</p>

        <h3>DALL-E 3 (OpenAI)</h3>
        <p><strong>장점:</strong> 자연어 이해와 정확한 프롬프트 따르기</p>
        <ul>
          <li>복잡하고 상세한 프롬프트 이해에 탁월</li>
          <li>이미지 내 텍스트 렌더링 우수</li>
          <li>대화형 이미지 생성을 위해 ChatGPT와 통합</li>
          <li>내장된 안전 기능 및 콘텐츠 정책</li>
          <li>적절한 라이선스로 상업적 사용 허용</li>
        </ul>

        <h3>Midjourney</h3>
        <p><strong>장점:</strong> 예술적이고 스타일화된 아름다운 이미지</p>
        <ul>
          <li>탁월한 예술적 품질과 독특한 스타일</li>
          <li>강력한 커뮤니티와 영감 갤러리</li>
          <li>Discord 인터페이스를 통해 작동</li>
          <li>컨셉 아트와 창작 프로젝트에 적합</li>
          <li>새로운 기능과 스타일로 정기적인 업데이트</li>
        </ul>

        <h3>Stable Diffusion</h3>
        <p><strong>장점:</strong> 커스터마이징 및 로컬/개인 사용</p>
        <ul>
          <li>오픈소스이며 무료 사용</li>
          <li>자신의 컴퓨터에서 로컬로 실행 가능</li>
          <li>커뮤니티 모델로 높은 커스터마이징 가능</li>
          <li>콘텐츠 제한 없음 (사용자 책임)</li>
          <li>확장 기능과 도구의 대규모 생태계</li>
        </ul>

        <h3>더 나은 결과를 위한 팁</h3>
        <ol>
          <li><strong>구체적으로:</strong> 스타일, 조명, 분위기, 구도에 대한 세부 사항 포함</li>
          <li><strong>예술적 참조 사용:</strong> 예술 스타일, 유명 아티스트, 사진 용어 언급</li>
          <li><strong>반복:</strong> 초기 결과를 기반으로 프롬프트 개선</li>
          <li><strong>네거티브 프롬프트:</strong> 원하지 않는 것 명시</li>
          <li><strong>종횡비:</strong> 사용 사례에 적절한 크기 선택</li>
        </ol>

        <h3>윤리적 고려사항</h3>
        <ul>
          <li>저작권과 지적 재산권 존중</li>
          <li>AI 생성 콘텐츠에 대해 투명하게</li>
          <li>아티스트와 창작자에 대한 영향 고려</li>
          <li>유해하거나 오해의 소지가 있는 콘텐츠 생성 피하기</li>
        </ul>
      `
    }
  },
  6: {
    icon: '⚖',
    category: { en: 'Ethics', ko: '윤리' },
    title: {
      en: 'AI Ethics and Responsibility',
      ko: 'AI 윤리와 책임'
    },
    content: {
      en: `
        <h3>Why AI Ethics Matter</h3>
        <p>As AI becomes more powerful and prevalent, ethical considerations become increasingly important. The decisions we make now about AI development will shape our future society.</p>

        <h3>Key Ethical Concerns</h3>

        <p><strong>1. Bias and Fairness</strong></p>
        <p>AI systems can perpetuate or amplify existing biases in training data:</p>
        <ul>
          <li>Hiring algorithms that discriminate based on gender or race</li>
          <li>Facial recognition with higher error rates for certain demographics</li>
          <li>Loan approval systems that disadvantage certain communities</li>
        </ul>

        <p><strong>2. Privacy</strong></p>
        <ul>
          <li>AI enables mass surveillance capabilities</li>
          <li>Personal data collection for training AI models</li>
          <li>Predictive systems that infer private information</li>
        </ul>

        <p><strong>3. Transparency and Explainability</strong></p>
        <ul>
          <li>Many AI decisions are "black boxes" - we don't know how they work</li>
          <li>Users deserve to know when AI is making decisions about them</li>
          <li>Right to explanation for automated decisions</li>
        </ul>

        <p><strong>4. Job Displacement</strong></p>
        <ul>
          <li>Automation may eliminate certain job categories</li>
          <li>Need for reskilling and education programs</li>
          <li>Questions about economic distribution</li>
        </ul>

        <h3>Principles for Ethical AI</h3>
        <ol>
          <li><strong>Human oversight:</strong> Keep humans in the loop for important decisions</li>
          <li><strong>Transparency:</strong> Be clear about when AI is being used</li>
          <li><strong>Fairness:</strong> Test for and mitigate biases</li>
          <li><strong>Privacy:</strong> Protect personal data and user rights</li>
          <li><strong>Safety:</strong> Ensure AI systems cannot cause harm</li>
          <li><strong>Accountability:</strong> Clear responsibility for AI outcomes</li>
        </ol>

        <h3>What You Can Do</h3>
        <ul>
          <li>Stay informed about AI developments and their implications</li>
          <li>Support regulations that protect individual rights</li>
          <li>Choose products and companies that prioritize ethical AI</li>
          <li>Speak up about concerns when you see AI misuse</li>
        </ul>
      `,
      ko: `
        <h3>AI 윤리가 중요한 이유</h3>
        <p>AI가 더욱 강력하고 보편화됨에 따라 윤리적 고려가 점점 더 중요해지고 있습니다. AI 개발에 대해 지금 우리가 내리는 결정이 미래 사회를 형성할 것입니다.</p>

        <h3>주요 윤리적 우려사항</h3>

        <p><strong>1. 편향과 공정성</strong></p>
        <p>AI 시스템은 훈련 데이터의 기존 편향을 영속시키거나 증폭시킬 수 있습니다:</p>
        <ul>
          <li>성별이나 인종에 따라 차별하는 채용 알고리즘</li>
          <li>특정 인구 통계에 대해 오류율이 높은 얼굴 인식</li>
          <li>특정 커뮤니티에 불리한 대출 승인 시스템</li>
        </ul>

        <p><strong>2. 프라이버시</strong></p>
        <ul>
          <li>AI는 대량 감시 기능을 가능하게 함</li>
          <li>AI 모델 훈련을 위한 개인 데이터 수집</li>
          <li>개인 정보를 추론하는 예측 시스템</li>
        </ul>

        <p><strong>3. 투명성과 설명가능성</strong></p>
        <ul>
          <li>많은 AI 결정이 "블랙박스" - 작동 방식을 모름</li>
          <li>사용자는 AI가 자신에 대해 결정을 내릴 때 알 권리가 있음</li>
          <li>자동화된 결정에 대한 설명을 받을 권리</li>
        </ul>

        <p><strong>4. 일자리 대체</strong></p>
        <ul>
          <li>자동화가 특정 직업군을 없앨 수 있음</li>
          <li>재교육 및 교육 프로그램의 필요성</li>
          <li>경제적 분배에 관한 질문</li>
        </ul>

        <h3>윤리적 AI를 위한 원칙</h3>
        <ol>
          <li><strong>인간 감독:</strong> 중요한 결정에 인간을 참여시킴</li>
          <li><strong>투명성:</strong> AI 사용 시 명확히 알림</li>
          <li><strong>공정성:</strong> 편향 테스트 및 완화</li>
          <li><strong>프라이버시:</strong> 개인 데이터와 사용자 권리 보호</li>
          <li><strong>안전:</strong> AI 시스템이 해를 끼치지 않도록 보장</li>
          <li><strong>책임:</strong> AI 결과에 대한 명확한 책임</li>
        </ol>

        <h3>당신이 할 수 있는 것</h3>
        <ul>
          <li>AI 발전과 그 의미에 대해 정보를 얻기</li>
          <li>개인 권리를 보호하는 규제 지지</li>
          <li>윤리적 AI를 우선시하는 제품과 회사 선택</li>
          <li>AI 오용을 보면 목소리를 내기</li>
        </ul>
      `
    }
  },
  7: {
    icon: '💡',
    category: { en: 'Guide', ko: '가이드' },
    title: {
      en: 'Prompt Engineering Mastery',
      ko: '프롬프트 엔지니어링 마스터하기'
    },
    content: {
      en: `
        <h3>What is Prompt Engineering?</h3>
        <p>Prompt engineering is the art of crafting effective inputs for AI systems to get the best possible outputs. It's becoming an essential skill in the AI era.</p>

        <h3>Core Principles</h3>

        <p><strong>1. Be Specific and Clear</strong></p>
        <ul>
          <li>Vague: "Write about dogs"</li>
          <li>Better: "Write a 300-word article about the health benefits of owning a dog for seniors"</li>
        </ul>

        <p><strong>2. Provide Context</strong></p>
        <ul>
          <li>Explain your goal and who the audience is</li>
          <li>Share relevant background information</li>
          <li>Specify the tone and style you want</li>
        </ul>

        <p><strong>3. Use Examples</strong></p>
        <ul>
          <li>Show the AI what you're looking for</li>
          <li>Provide input-output pairs</li>
          <li>This technique is called "few-shot prompting"</li>
        </ul>

        <h3>Advanced Techniques</h3>

        <p><strong>Chain of Thought</strong></p>
        <p>Ask the AI to think step-by-step before giving a final answer. This improves reasoning for complex problems.</p>

        <p><strong>Role Prompting</strong></p>
        <p>Assign a role: "You are an expert nutritionist. Based on this premise, answer..."</p>

        <p><strong>Structured Output</strong></p>
        <p>Request specific formats: "Respond in JSON format with fields for title, summary, and keywords"</p>

        <h3>Common Mistakes to Avoid</h3>
        <ol>
          <li>Being too vague or general</li>
          <li>Not providing enough context</li>
          <li>Expecting perfect results on the first try</li>
          <li>Ignoring the AI's limitations</li>
          <li>Not iterating and refining prompts</li>
        </ol>

        <h3>Prompt Templates</h3>
        <p><strong>For Analysis:</strong> "Analyze [topic] considering [aspects]. Provide [number] key insights with supporting evidence."</p>
        <p><strong>For Writing:</strong> "Write a [format] about [topic] in [tone] style for [audience]. Include [specific elements]."</p>
        <p><strong>For Problem-Solving:</strong> "I'm trying to [goal]. The constraints are [limitations]. What approaches would you recommend?"</p>
      `,
      ko: `
        <h3>프롬프트 엔지니어링이란?</h3>
        <p>프롬프트 엔지니어링은 AI 시스템에서 최상의 결과를 얻기 위해 효과적인 입력을 작성하는 기술입니다. AI 시대에 필수적인 기술이 되고 있습니다.</p>

        <h3>핵심 원칙</h3>

        <p><strong>1. 구체적이고 명확하게</strong></p>
        <ul>
          <li>모호함: "개에 대해 써줘"</li>
          <li>개선: "노인들이 개를 키우는 것의 건강상 이점에 대해 300단어 기사를 작성해줘"</li>
        </ul>

        <p><strong>2. 맥락 제공</strong></p>
        <ul>
          <li>목표와 대상 독자가 누구인지 설명</li>
          <li>관련 배경 정보 공유</li>
          <li>원하는 톤과 스타일 명시</li>
        </ul>

        <p><strong>3. 예시 사용</strong></p>
        <ul>
          <li>AI에게 원하는 것을 보여주기</li>
          <li>입력-출력 쌍 제공</li>
          <li>이 기법을 "few-shot 프롬프팅"이라고 함</li>
        </ul>

        <h3>고급 기법</h3>

        <p><strong>생각의 사슬 (Chain of Thought)</strong></p>
        <p>최종 답변을 하기 전에 단계별로 생각하도록 AI에게 요청. 복잡한 문제에 대한 추론을 개선합니다.</p>

        <p><strong>역할 프롬프팅</strong></p>
        <p>역할 부여: "당신은 전문 영양사입니다. 이 전제를 바탕으로 답변하세요..."</p>

        <p><strong>구조화된 출력</strong></p>
        <p>특정 형식 요청: "제목, 요약, 키워드 필드가 있는 JSON 형식으로 응답해주세요"</p>

        <h3>피해야 할 일반적인 실수</h3>
        <ol>
          <li>너무 모호하거나 일반적임</li>
          <li>충분한 맥락을 제공하지 않음</li>
          <li>첫 시도에서 완벽한 결과를 기대</li>
          <li>AI의 한계를 무시</li>
          <li>프롬프트를 반복하고 개선하지 않음</li>
        </ol>

        <h3>프롬프트 템플릿</h3>
        <p><strong>분석용:</strong> "[측면]을 고려하여 [주제]를 분석해주세요. 근거가 있는 [숫자]개의 핵심 인사이트를 제공해주세요."</p>
        <p><strong>글쓰기용:</strong> "[대상]을 위해 [톤] 스타일로 [주제]에 대한 [형식]을 작성해주세요. [특정 요소]를 포함해주세요."</p>
        <p><strong>문제 해결용:</strong> "저는 [목표]를 달성하려고 합니다. 제약 조건은 [제한사항]입니다. 어떤 접근 방식을 추천하시겠습니까?"</p>
      `
    }
  },
  8: {
    icon: '💻',
    category: { en: 'Development', ko: '개발' },
    title: {
      en: 'AI Coding Assistants',
      ko: 'AI 코딩 어시스턴트'
    },
    content: {
      en: `
        <h3>The New Era of Software Development</h3>
        <p>AI coding assistants are transforming how developers write code. These tools can autocomplete code, explain complex functions, find bugs, and even write entire applications from descriptions.</p>

        <h3>Major AI Coding Tools</h3>

        <p><strong>GitHub Copilot</strong></p>
        <ul>
          <li>Developed by GitHub and OpenAI</li>
          <li>Integrates directly into VS Code, JetBrains, and more</li>
          <li>Real-time code suggestions as you type</li>
          <li>Understands context from your entire project</li>
          <li>Supports most programming languages</li>
        </ul>

        <p><strong>Claude (Anthropic)</strong></p>
        <ul>
          <li>Excellent at explaining and teaching code</li>
          <li>Strong reasoning for complex debugging</li>
          <li>Can handle very long code files</li>
          <li>Great for code reviews and optimization</li>
        </ul>

        <p><strong>ChatGPT / GPT-4</strong></p>
        <ul>
          <li>Versatile for various coding tasks</li>
          <li>Good at generating boilerplate code</li>
          <li>Helpful for learning new frameworks</li>
          <li>Code Interpreter for running Python</li>
        </ul>

        <h3>Best Practices</h3>
        <ol>
          <li><strong>Review all generated code:</strong> AI can make mistakes or introduce security issues</li>
          <li><strong>Understand what you use:</strong> Don't just copy-paste without understanding</li>
          <li><strong>Use for learning:</strong> Ask AI to explain its suggestions</li>
          <li><strong>Start small:</strong> Generate functions, not entire applications</li>
          <li><strong>Iterate:</strong> Refine prompts based on output quality</li>
        </ol>

        <h3>What AI Coding Assistants Can Do</h3>
        <ul>
          <li>Write functions from natural language descriptions</li>
          <li>Convert code between programming languages</li>
          <li>Generate unit tests</li>
          <li>Document code with comments</li>
          <li>Refactor and optimize code</li>
          <li>Debug and fix errors</li>
          <li>Explain complex algorithms</li>
        </ul>

        <h3>The Future</h3>
        <p>We're moving toward AI that can build entire applications from specifications, handle deployment, and even maintain and update code over time. The developer's role is evolving from writing code to directing AI and ensuring quality.</p>
      `,
      ko: `
        <h3>소프트웨어 개발의 새로운 시대</h3>
        <p>AI 코딩 어시스턴트는 개발자가 코드를 작성하는 방식을 변화시키고 있습니다. 이러한 도구들은 코드를 자동 완성하고, 복잡한 함수를 설명하고, 버그를 찾고, 심지어 설명만으로 전체 애플리케이션을 작성할 수 있습니다.</p>

        <h3>주요 AI 코딩 도구</h3>

        <p><strong>GitHub Copilot</strong></p>
        <ul>
          <li>GitHub과 OpenAI가 개발</li>
          <li>VS Code, JetBrains 등에 직접 통합</li>
          <li>타이핑하면서 실시간 코드 제안</li>
          <li>전체 프로젝트의 맥락 이해</li>
          <li>대부분의 프로그래밍 언어 지원</li>
        </ul>

        <p><strong>Claude (Anthropic)</strong></p>
        <ul>
          <li>코드 설명과 교육에 탁월</li>
          <li>복잡한 디버깅을 위한 강력한 추론</li>
          <li>매우 긴 코드 파일 처리 가능</li>
          <li>코드 리뷰와 최적화에 적합</li>
        </ul>

        <p><strong>ChatGPT / GPT-4</strong></p>
        <ul>
          <li>다양한 코딩 작업에 다재다능</li>
          <li>보일러플레이트 코드 생성에 우수</li>
          <li>새로운 프레임워크 학습에 도움</li>
          <li>Python 실행을 위한 코드 인터프리터</li>
        </ul>

        <h3>모범 사례</h3>
        <ol>
          <li><strong>생성된 모든 코드 검토:</strong> AI는 실수하거나 보안 문제를 도입할 수 있음</li>
          <li><strong>사용하는 것을 이해:</strong> 이해 없이 복사-붙여넣기만 하지 않기</li>
          <li><strong>학습에 활용:</strong> AI에게 제안을 설명해달라고 요청</li>
          <li><strong>작게 시작:</strong> 전체 애플리케이션이 아닌 함수 생성</li>
          <li><strong>반복:</strong> 출력 품질에 따라 프롬프트 개선</li>
        </ol>

        <h3>AI 코딩 어시스턴트가 할 수 있는 것</h3>
        <ul>
          <li>자연어 설명에서 함수 작성</li>
          <li>프로그래밍 언어 간 코드 변환</li>
          <li>단위 테스트 생성</li>
          <li>주석으로 코드 문서화</li>
          <li>코드 리팩토링 및 최적화</li>
          <li>오류 디버깅 및 수정</li>
          <li>복잡한 알고리즘 설명</li>
        </ul>

        <h3>미래</h3>
        <p>우리는 명세서에서 전체 애플리케이션을 구축하고, 배포를 처리하고, 시간이 지남에 따라 코드를 유지 관리하고 업데이트할 수 있는 AI로 나아가고 있습니다. 개발자의 역할은 코드 작성에서 AI를 지시하고 품질을 보장하는 것으로 진화하고 있습니다.</p>
      `
    }
  },
  9: {
    icon: '🎤',
    category: { en: 'Technology', ko: '기술' },
    title: {
      en: 'AI Voice Recognition',
      ko: 'AI 음성 인식'
    },
    content: {
      en: `
        <h3>The Evolution of Voice Technology</h3>
        <p>Voice recognition has come a long way from early, unreliable systems to today's sophisticated AI assistants that understand context, accents, and even emotions.</p>

        <h3>How Voice Recognition Works</h3>
        <ol>
          <li><strong>Audio capture:</strong> Microphone records sound waves</li>
          <li><strong>Preprocessing:</strong> Noise reduction and signal enhancement</li>
          <li><strong>Feature extraction:</strong> Convert audio to numerical representations</li>
          <li><strong>Pattern matching:</strong> AI models compare against learned patterns</li>
          <li><strong>Language processing:</strong> Understanding context and meaning</li>
          <li><strong>Response generation:</strong> Creating appropriate output</li>
        </ol>

        <h3>Major Voice Assistants</h3>

        <p><strong>Apple Siri</strong></p>
        <ul>
          <li>Deep integration with Apple ecosystem</li>
          <li>Strong privacy focus with on-device processing</li>
          <li>Works across iPhone, iPad, Mac, Watch, HomePod</li>
        </ul>

        <p><strong>Amazon Alexa</strong></p>
        <ul>
          <li>Extensive smart home integration</li>
          <li>Thousands of third-party "skills"</li>
          <li>Strong in shopping and entertainment</li>
        </ul>

        <p><strong>Google Assistant</strong></p>
        <ul>
          <li>Best natural language understanding</li>
          <li>Leverages Google's search and knowledge</li>
          <li>Excellent multilingual support</li>
        </ul>

        <h3>Applications Beyond Assistants</h3>
        <ul>
          <li><strong>Healthcare:</strong> Medical dictation and transcription</li>
          <li><strong>Accessibility:</strong> Voice control for disabled users</li>
          <li><strong>Customer service:</strong> Automated phone systems</li>
          <li><strong>Cars:</strong> Hands-free navigation and controls</li>
          <li><strong>Real-time translation:</strong> Breaking language barriers</li>
        </ul>

        <h3>Future Developments</h3>
        <ul>
          <li>Emotion recognition in voice</li>
          <li>More natural, conversational interactions</li>
          <li>Better handling of multiple speakers</li>
          <li>Improved accuracy in noisy environments</li>
          <li>Voice cloning and synthesis advances</li>
        </ul>
      `,
      ko: `
        <h3>음성 기술의 진화</h3>
        <p>음성 인식은 초기의 신뢰할 수 없는 시스템에서 맥락, 억양, 심지어 감정까지 이해하는 오늘날의 정교한 AI 어시스턴트로 발전했습니다.</p>

        <h3>음성 인식의 작동 원리</h3>
        <ol>
          <li><strong>오디오 캡처:</strong> 마이크가 음파 녹음</li>
          <li><strong>전처리:</strong> 노이즈 감소 및 신호 향상</li>
          <li><strong>특징 추출:</strong> 오디오를 수치 표현으로 변환</li>
          <li><strong>패턴 매칭:</strong> AI 모델이 학습된 패턴과 비교</li>
          <li><strong>언어 처리:</strong> 맥락과 의미 이해</li>
          <li><strong>응답 생성:</strong> 적절한 출력 생성</li>
        </ol>

        <h3>주요 음성 어시스턴트</h3>

        <p><strong>Apple Siri</strong></p>
        <ul>
          <li>Apple 생태계와 깊은 통합</li>
          <li>온디바이스 처리로 강력한 개인정보 보호</li>
          <li>iPhone, iPad, Mac, Watch, HomePod에서 작동</li>
        </ul>

        <p><strong>Amazon Alexa</strong></p>
        <ul>
          <li>광범위한 스마트 홈 통합</li>
          <li>수천 개의 타사 "스킬"</li>
          <li>쇼핑과 엔터테인먼트에 강점</li>
        </ul>

        <p><strong>Google Assistant</strong></p>
        <ul>
          <li>최고의 자연어 이해</li>
          <li>Google의 검색과 지식 활용</li>
          <li>우수한 다국어 지원</li>
        </ul>

        <h3>어시스턴트를 넘어선 응용</h3>
        <ul>
          <li><strong>의료:</strong> 의료 받아쓰기 및 전사</li>
          <li><strong>접근성:</strong> 장애인을 위한 음성 제어</li>
          <li><strong>고객 서비스:</strong> 자동화된 전화 시스템</li>
          <li><strong>자동차:</strong> 핸즈프리 내비게이션 및 제어</li>
          <li><strong>실시간 번역:</strong> 언어 장벽 허물기</li>
        </ul>

        <h3>미래 발전</h3>
        <ul>
          <li>음성에서 감정 인식</li>
          <li>더 자연스러운 대화형 상호작용</li>
          <li>여러 화자 처리 개선</li>
          <li>시끄러운 환경에서 정확도 향상</li>
          <li>음성 복제 및 합성 발전</li>
        </ul>
      `
    }
  },
  10: {
    icon: '🎸',
    category: { en: 'Creative', ko: '크리에이티브' },
    title: {
      en: 'AI and Creative Arts',
      ko: 'AI와 창작 예술'
    },
    content: {
      en: `
        <h3>AI as a Creative Partner</h3>
        <p>Artificial Intelligence is no longer just a tool for data analysis—it's becoming a creative collaborator in art, music, writing, and design.</p>

        <h3>AI in Visual Arts</h3>
        <ul>
          <li><strong>Image generation:</strong> DALL-E, Midjourney, Stable Diffusion create art from text</li>
          <li><strong>Style transfer:</strong> Apply one artist's style to another image</li>
          <li><strong>Photo enhancement:</strong> Upscaling, colorization, restoration</li>
          <li><strong>Animation:</strong> AI-assisted motion and character animation</li>
        </ul>

        <h3>AI in Music</h3>
        <ul>
          <li><strong>Composition:</strong> AI creates original melodies and harmonies</li>
          <li><strong>Production:</strong> Automated mixing and mastering</li>
          <li><strong>Voice synthesis:</strong> AI-generated vocals and voice cloning</li>
          <li><strong>Sound design:</strong> Creating new sounds and effects</li>
        </ul>
        <p>Tools like AIVA, Amper Music, and Suno are making music creation accessible to everyone.</p>

        <h3>AI in Writing</h3>
        <ul>
          <li><strong>Creative writing:</strong> Stories, poetry, scripts</li>
          <li><strong>Content creation:</strong> Articles, marketing copy, social media</li>
          <li><strong>Editing:</strong> Grammar, style, and tone improvement</li>
          <li><strong>Translation:</strong> Maintaining creative voice across languages</li>
        </ul>

        <h3>The Debate: Tool or Replacement?</h3>
        <p>There's ongoing discussion about AI's role in creativity:</p>
        <ul>
          <li><strong>For:</strong> AI democratizes creativity, enables new forms of expression, assists rather than replaces</li>
          <li><strong>Against:</strong> Concerns about authenticity, artist livelihoods, copyright issues</li>
        </ul>

        <h3>Best Practices for AI-Assisted Creation</h3>
        <ol>
          <li>Use AI as a starting point, not the final product</li>
          <li>Add your personal touch and refinement</li>
          <li>Be transparent about AI assistance</li>
          <li>Understand copyright and ownership implications</li>
          <li>Support human artists alongside AI tools</li>
        </ol>
      `,
      ko: `
        <h3>창의적 파트너로서의 AI</h3>
        <p>인공지능은 더 이상 데이터 분석만을 위한 도구가 아닙니다—예술, 음악, 글쓰기, 디자인에서 창의적 협력자가 되고 있습니다.</p>

        <h3>시각 예술의 AI</h3>
        <ul>
          <li><strong>이미지 생성:</strong> DALL-E, Midjourney, Stable Diffusion이 텍스트로 예술 작품 생성</li>
          <li><strong>스타일 전이:</strong> 한 아티스트의 스타일을 다른 이미지에 적용</li>
          <li><strong>사진 향상:</strong> 업스케일링, 컬러화, 복원</li>
          <li><strong>애니메이션:</strong> AI 지원 모션 및 캐릭터 애니메이션</li>
        </ul>

        <h3>음악의 AI</h3>
        <ul>
          <li><strong>작곡:</strong> AI가 오리지널 멜로디와 하모니 생성</li>
          <li><strong>프로덕션:</strong> 자동화된 믹싱과 마스터링</li>
          <li><strong>보컬 합성:</strong> AI 생성 보컬과 음성 복제</li>
          <li><strong>사운드 디자인:</strong> 새로운 사운드와 이펙트 생성</li>
        </ul>
        <p>AIVA, Amper Music, Suno와 같은 도구들이 모든 사람에게 음악 창작을 가능하게 하고 있습니다.</p>

        <h3>글쓰기의 AI</h3>
        <ul>
          <li><strong>창작 글쓰기:</strong> 이야기, 시, 대본</li>
          <li><strong>콘텐츠 제작:</strong> 기사, 마케팅 카피, 소셜 미디어</li>
          <li><strong>편집:</strong> 문법, 스타일, 톤 개선</li>
          <li><strong>번역:</strong> 언어 간 창의적 목소리 유지</li>
        </ul>

        <h3>논쟁: 도구인가 대체인가?</h3>
        <p>창의성에서 AI의 역할에 대한 지속적인 논의가 있습니다:</p>
        <ul>
          <li><strong>찬성:</strong> AI가 창의성을 민주화하고, 새로운 표현 형태를 가능하게 하며, 대체가 아닌 지원</li>
          <li><strong>반대:</strong> 진정성, 아티스트 생계, 저작권 문제에 대한 우려</li>
        </ul>

        <h3>AI 지원 창작을 위한 모범 사례</h3>
        <ol>
          <li>AI를 최종 제품이 아닌 시작점으로 사용</li>
          <li>개인적인 터치와 정교함 추가</li>
          <li>AI 지원에 대해 투명하게</li>
          <li>저작권과 소유권 관련 사항 이해</li>
          <li>AI 도구와 함께 인간 아티스트 지원</li>
        </ol>
      `
    }
  },
  11: {
    icon: '📚',
    category: { en: 'Learning', ko: '학습' },
    title: {
      en: 'AI Learning Resources',
      ko: 'AI 학습 리소스'
    },
    content: {
      en: `
        <h3>Start Your AI Learning Journey</h3>
        <p>Whether you're a complete beginner or looking to advance your skills, there are excellent resources available for learning about artificial intelligence.</p>

        <h3>Free Online Courses</h3>
        <ul>
          <li><strong>Google AI Essentials:</strong> Beginner-friendly introduction to AI concepts</li>
          <li><strong>Fast.ai:</strong> Practical deep learning for coders</li>
          <li><strong>Coursera - Machine Learning:</strong> Andrew Ng's legendary course</li>
          <li><strong>MIT OpenCourseWare:</strong> Free courses from MIT on AI/ML</li>
          <li><strong>Kaggle Learn:</strong> Short, practical tutorials with hands-on exercises</li>
        </ul>

        <h3>Recommended Books</h3>
        <ul>
          <li><strong>"Artificial Intelligence: A Modern Approach"</strong> - The comprehensive textbook</li>
          <li><strong>"Deep Learning" by Ian Goodfellow</strong> - The deep learning bible</li>
          <li><strong>"Hands-On Machine Learning"</strong> - Practical Python projects</li>
          <li><strong>"The Hundred-Page Machine Learning Book"</strong> - Quick overview</li>
        </ul>

        <h3>YouTube Channels</h3>
        <ul>
          <li><strong>3Blue1Brown:</strong> Beautiful visual explanations of neural networks</li>
          <li><strong>Two Minute Papers:</strong> Latest AI research explained simply</li>
          <li><strong>Sentdex:</strong> Python and machine learning tutorials</li>
          <li><strong>StatQuest:</strong> Statistics and ML concepts made easy</li>
        </ul>

        <h3>Hands-On Practice</h3>
        <ul>
          <li><strong>Kaggle:</strong> Competitions and datasets for practice</li>
          <li><strong>Google Colab:</strong> Free GPU access for training models</li>
          <li><strong>Hugging Face:</strong> Pre-trained models and tutorials</li>
          <li><strong>GitHub:</strong> Open-source projects to learn from</li>
        </ul>

        <h3>Learning Path Suggestion</h3>
        <ol>
          <li>Start with Python basics if needed</li>
          <li>Learn fundamental statistics and linear algebra</li>
          <li>Take an introductory ML course</li>
          <li>Practice with real datasets on Kaggle</li>
          <li>Specialize in an area (NLP, Computer Vision, etc.)</li>
          <li>Build personal projects</li>
          <li>Contribute to open-source projects</li>
        </ol>
      `,
      ko: `
        <h3>AI 학습 여정 시작하기</h3>
        <p>완전 초보자이든 기술을 발전시키려는 사람이든, 인공지능에 대해 배울 수 있는 훌륭한 리소스들이 있습니다.</p>

        <h3>무료 온라인 강좌</h3>
        <ul>
          <li><strong>Google AI Essentials:</strong> 초보자 친화적인 AI 개념 소개</li>
          <li><strong>Fast.ai:</strong> 코더를 위한 실용적인 딥러닝</li>
          <li><strong>Coursera - 머신러닝:</strong> 앤드류 응의 전설적인 강좌</li>
          <li><strong>MIT OpenCourseWare:</strong> MIT의 무료 AI/ML 강좌</li>
          <li><strong>Kaggle Learn:</strong> 실습이 포함된 짧고 실용적인 튜토리얼</li>
        </ul>

        <h3>추천 도서</h3>
        <ul>
          <li><strong>"Artificial Intelligence: A Modern Approach"</strong> - 종합 교과서</li>
          <li><strong>"Deep Learning" by Ian Goodfellow</strong> - 딥러닝 바이블</li>
          <li><strong>"Hands-On Machine Learning"</strong> - 실용적인 Python 프로젝트</li>
          <li><strong>"The Hundred-Page Machine Learning Book"</strong> - 빠른 개요</li>
        </ul>

        <h3>유튜브 채널</h3>
        <ul>
          <li><strong>3Blue1Brown:</strong> 신경망의 아름다운 시각적 설명</li>
          <li><strong>Two Minute Papers:</strong> 최신 AI 연구를 쉽게 설명</li>
          <li><strong>Sentdex:</strong> Python과 머신러닝 튜토리얼</li>
          <li><strong>StatQuest:</strong> 통계와 ML 개념을 쉽게</li>
        </ul>

        <h3>실습</h3>
        <ul>
          <li><strong>Kaggle:</strong> 연습을 위한 대회와 데이터셋</li>
          <li><strong>Google Colab:</strong> 모델 훈련을 위한 무료 GPU 접근</li>
          <li><strong>Hugging Face:</strong> 사전 훈련된 모델과 튜토리얼</li>
          <li><strong>GitHub:</strong> 배울 수 있는 오픈소스 프로젝트</li>
        </ul>

        <h3>학습 경로 제안</h3>
        <ol>
          <li>필요하다면 Python 기초부터 시작</li>
          <li>기본 통계와 선형대수 학습</li>
          <li>입문 ML 강좌 수강</li>
          <li>Kaggle에서 실제 데이터셋으로 연습</li>
          <li>분야 전문화 (NLP, 컴퓨터 비전 등)</li>
          <li>개인 프로젝트 구축</li>
          <li>오픈소스 프로젝트에 기여</li>
        </ol>
      `
    }
  },
  12: {
    icon: '🚀',
    category: { en: 'Trends', ko: '트렌드' },
    title: {
      en: 'AI Trends in 2024',
      ko: '2024년 AI 트렌드'
    },
    content: {
      en: `
        <h3>The Year of AI Everywhere</h3>
        <p>2024 marks a pivotal year where AI transitions from novelty to necessity. Here are the key trends shaping the AI landscape.</p>

        <h3>1. Multimodal AI</h3>
        <p>AI systems that understand and generate multiple types of content—text, images, audio, and video—simultaneously.</p>
        <ul>
          <li>GPT-4 Vision, Gemini, and Claude with image understanding</li>
          <li>Text-to-video generation (Sora, Runway)</li>
          <li>More natural, human-like interactions</li>
        </ul>

        <h3>2. Small Language Models</h3>
        <p>Efficient AI models that run on personal devices:</p>
        <ul>
          <li>On-device AI processing for privacy</li>
          <li>Lower costs and faster responses</li>
          <li>Models like Llama, Mistral, and Phi</li>
        </ul>

        <h3>3. AI Agents</h3>
        <p>AI systems that can plan, use tools, and complete complex tasks autonomously:</p>
        <ul>
          <li>Browse the web and take actions</li>
          <li>Chain multiple AI capabilities together</li>
          <li>Complete multi-step workflows</li>
        </ul>

        <h3>4. AI in Enterprise</h3>
        <ul>
          <li>Custom AI models trained on company data</li>
          <li>AI-powered customer service at scale</li>
          <li>Automated document processing and analysis</li>
          <li>AI copilots for every profession</li>
        </ul>

        <h3>5. AI Regulation</h3>
        <p>Governments worldwide are implementing AI regulations:</p>
        <ul>
          <li>EU AI Act coming into force</li>
          <li>Required disclosures for AI-generated content</li>
          <li>Safety testing requirements for frontier models</li>
        </ul>

        <h3>6. AI Hardware Revolution</h3>
        <ul>
          <li>New AI-optimized chips from Nvidia, AMD, Intel</li>
          <li>AI features built into smartphones and laptops</li>
          <li>Cloud AI infrastructure expansion</li>
        </ul>

        <h3>What to Watch</h3>
        <ul>
          <li>Progress toward AGI (Artificial General Intelligence)</li>
          <li>AI's impact on jobs and the economy</li>
          <li>Breakthroughs in AI reasoning and planning</li>
          <li>Open-source vs. closed-source AI competition</li>
        </ul>
      `,
      ko: `
        <h3>AI가 어디에나 있는 해</h3>
        <p>2024년은 AI가 신기함에서 필수품으로 전환되는 중요한 해입니다. AI 환경을 형성하는 주요 트렌드를 살펴보겠습니다.</p>

        <h3>1. 멀티모달 AI</h3>
        <p>텍스트, 이미지, 오디오, 비디오 등 여러 유형의 콘텐츠를 동시에 이해하고 생성하는 AI 시스템.</p>
        <ul>
          <li>이미지 이해 기능이 있는 GPT-4 Vision, Gemini, Claude</li>
          <li>텍스트-비디오 생성 (Sora, Runway)</li>
          <li>더 자연스럽고 인간 같은 상호작용</li>
        </ul>

        <h3>2. 소형 언어 모델</h3>
        <p>개인 기기에서 실행되는 효율적인 AI 모델:</p>
        <ul>
          <li>프라이버시를 위한 온디바이스 AI 처리</li>
          <li>더 낮은 비용과 빠른 응답</li>
          <li>Llama, Mistral, Phi와 같은 모델</li>
        </ul>

        <h3>3. AI 에이전트</h3>
        <p>계획하고, 도구를 사용하고, 복잡한 작업을 자율적으로 완료할 수 있는 AI 시스템:</p>
        <ul>
          <li>웹을 탐색하고 행동 수행</li>
          <li>여러 AI 기능을 함께 연결</li>
          <li>다단계 워크플로우 완료</li>
        </ul>

        <h3>4. 기업의 AI</h3>
        <ul>
          <li>회사 데이터로 훈련된 맞춤 AI 모델</li>
          <li>대규모 AI 기반 고객 서비스</li>
          <li>자동화된 문서 처리 및 분석</li>
          <li>모든 직종을 위한 AI 코파일럿</li>
        </ul>

        <h3>5. AI 규제</h3>
        <p>전 세계 정부가 AI 규제를 시행하고 있습니다:</p>
        <ul>
          <li>EU AI Act 발효</li>
          <li>AI 생성 콘텐츠에 대한 의무 공개</li>
          <li>최첨단 모델에 대한 안전 테스트 요구사항</li>
        </ul>

        <h3>6. AI 하드웨어 혁명</h3>
        <ul>
          <li>Nvidia, AMD, Intel의 새로운 AI 최적화 칩</li>
          <li>스마트폰과 노트북에 내장된 AI 기능</li>
          <li>클라우드 AI 인프라 확장</li>
        </ul>

        <h3>주목해야 할 것</h3>
        <ul>
          <li>AGI(범용 인공지능)를 향한 진전</li>
          <li>일자리와 경제에 대한 AI의 영향</li>
          <li>AI 추론과 계획의 돌파구</li>
          <li>오픈소스 vs 클로즈드소스 AI 경쟁</li>
        </ul>
      `
    }
  }
};

let currentBlogPost = 1;

// ==================== Blog Functions ====================
function openBlogPost(postId) {
  currentBlogPost = postId;
  const post = blogPosts[postId];
  if (!post) return;

  const modal = document.getElementById('blogModal');
  const modalIcon = document.getElementById('modalIcon');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');

  modalIcon.textContent = post.icon;
  modalCategory.textContent = post.category[currentLang];
  modalTitle.textContent = post.title[currentLang];
  modalBody.innerHTML = post.content[currentLang];

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeBlogPost() {
  const modal = document.getElementById('blogModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function navigateBlog(direction) {
  let newPostId = currentBlogPost + direction;
  if (newPostId < 1) newPostId = 12;
  if (newPostId > 12) newPostId = 1;
  openBlogPost(newPostId);
}

// Close modal on escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeBlogPost();
  }
});

// Close modal on backdrop click
document.addEventListener('click', function(e) {
  const modal = document.getElementById('blogModal');
  if (e.target === modal) {
    closeBlogPost();
  }
});

// ==================== Initialize ====================
initTheme();
initLanguage();
loadHistory();
