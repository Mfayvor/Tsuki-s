// --- Page Data ---
const pages = {
  home: `
    <h2>Welcome to a world made just for you, my Angel 💕</h2>
    <p>Every heartbeat, every word, every page — all for you.</p>
  `,
  letters: `
    <h2>Love Letters 💌</h2>
    <p id="loveText">Click below to get a new love letter 💖</p>
    <button onclick="generateLoveLetter()">Generate Love Letter</button>
  `,
  motivation: `
    <h2>Motivational Quotes 🌹</h2>
    <p id="quoteText">Click to get inspired, my queen 👑</p>
    <button onclick="generateQuote()">New Quote</button>
  `,
  gallery: `
    <h2>My Goddess 📸</h2>
    <div class="slideshow">
      <img id="galleryImage" src="images/tsuki8.jpg" alt="Her smile">
      <p id="caption">Her beautiful smile that lights up my world 💫</p>
      <button onclick="nextImage()">Next</button>
    </div>
  `,
  about: `
    <h2>A Portrait of My Beloved Tsuki 💖</h2>
    <p>My Chisom, my Tsuki, is a universe of warmth and captivating contrast. To look at her is to be instantly charmed: she possesses a rare, luminous beauty—a perfect, harmonious blend of being utterly cute, undeniably sexy, and classically beautiful, all wrapped into one incredible person. Her dark skin is rich and flawless, like polished mahogany, and it glows with an inner light that always catches my eye.
Beneath that stunning exterior is the fascinating woman I'm lucky enough to know and love. She has a wonderful spirit, one that is immensely kind and deeply caring, always thinking of others. Yet, she is a woman of quiet strength, often choosing to keep her deeper emotions to herself; she tends to hide her actual feelings, a sensitivity that makes the moments she does open up to me all the more precious. She isn't the boldest person, which makes her small acts of courage—like trying something new or voicing a strong opinion—all the more admirable.
What truly makes her captivating is the lovely edge to her personality. Yes, she can be a little stubborn at times and, bless her heart, she nags a lot. But these quirks are part of the wonderful rhythm of our life together—they're what keep things honest, lively, and wonderfully her. I honestly like that about her; it shows me she cares enough to challenge me and keep me on my toes.
Perhaps the most inspiring thing about her is her deep, infectious intellectual curiosity. She is so eager to learn more about everything, constantly seeking knowledge, growth, and new ways to see the world. That thirst for understanding is something I admire every day.
She is my home, my comfort, my delightful challenge, and the most beautiful woman I know—my amazing Chisom.</p>
  `
};

// --- Page Switching ---
const content = document.getElementById("content");
const navButtons = document.querySelectorAll(".nav-btn");

function loadPage(page) {
  content.style.opacity = 0;
  setTimeout(() => {
    content.innerHTML = pages[page];
    content.style.opacity = 1;
  }, 300);
}

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const page = btn.dataset.page;
    loadPage(page);
  });
});

// --- Default Page ---
loadPage("home");

// --- Love Letters ---
const loveLetters = [
  "My love, every second with you feels like a melody I never want to end.",
  "You’re my reason for every smile, every heartbeat, every dream.",
  "If I had to choose between breathing and loving you, I’d use my last breath to say ‘I love you.’",
  "You’re my today and all of my tomorrows.",
  "Another circle round the sun. Another year round the clock. A new chapter has begun. Born of grace, carved from my side.In your light, I find my guide.",
  "Your heart so kind, your soul so rare,  A gift from God, beyond compare. So I thank Him for this day, The day He formed you from my clay",
  "Grow in wisdom, bloom in grace, Let His glory light your face. And as you walk through each new year, Know you are loved, held close, kept near."
];

function generateLoveLetter() {
  const text = document.getElementById("loveText");
  const random = loveLetters[Math.floor(Math.random() * loveLetters.length)];
  text.textContent = random;
}

// --- Motivation ---
const quotes = [
  "You’re stronger than you think and more beautiful than you know.",
  "Keep shining, my love — the world needs your light.",
  "Even on your worst days, you’re still my best choice.",
  "You are magic wrapped in grace."
];

function generateQuote() {
  const text = document.getElementById("quoteText");
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  text.textContent = random;
}

// --- Gallery ---
const images = [
  { src: "images/tsuki1.jpg", caption: "my tsuki 💕" },
  { src: "images/tsuki2.jpg", caption: " she always leaves me feeling breathless" },
  { src: "images/tsuki3.jpg", caption: "My favorite picture of her 🌹" },
  { src: "images/tsuki4.jpg", caption: "my love my safe heaven 🌹" },
  { src: "images/tsuki5.jpg", caption: "my queen 🌹" },
  { src: "images/tsuki6.jpg", caption: "i'll always feel helpless around her 🌹" },
  { src: "images/tsuki7.jpg", caption: " Watashi no Tsuki 🌹" },
];

let currentImage = 0;
function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  document.getElementById("galleryImage").src = images[currentImage].src;
  document.getElementById("caption").textContent = images[currentImage].caption;
}

// --- Floating Hearts Animation ---
function createHeart() {
  const heartsContainer = document.querySelector('.hearts');
  if (!heartsContainer) return;

  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '💖';

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 4 + Math.random() * 3 + 's';
  heart.style.fontSize = 12 + Math.random() * 18 + 'px';
  heart.style.opacity = Math.random() * 0.8 + 0.3;

  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}
setInterval(createHeart, 400);

// --- Background Music ---
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');

if (musicBtn && bgMusic) {
  let isPlaying = false;
  musicBtn.addEventListener('click', () => {
    if (!isPlaying) {
      bgMusic.play();
      musicBtn.textContent = "⏸ Pause Music";
      isPlaying = true;
    } else {
      bgMusic.pause();
      musicBtn.textContent = "🎵 Play Music";
      isPlaying = false;
    }
  });
}