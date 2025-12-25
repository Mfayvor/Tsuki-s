// PAGE NAVIGATION
const navLinks = document.querySelectorAll("nav a");
const pages = document.querySelectorAll(".page");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const target = link.dataset.page;
    pages.forEach((p) => p.classList.remove("active"));
    document.getElementById(target).classList.add("active");
  });
});

// RANDOM LOVE LETTERS
const loveLetters = [
  "You’re my sunshine on rainy days ☀️💗",
  "Every beat of my heart whispers your name 💞",
  "You make ordinary moments magical ✨",
  "If I could hold time, I’d freeze every second with you ❤️",
  "You are my favorite hello and hardest goodbye 💋",
];

const loveLetter = document.getElementById("loveLetter");
const newLetter = document.getElementById("newLetter");

function generateLoveLetter() {
  const random = Math.floor(Math.random() * loveLetters.length);
  loveLetter.textContent = loveLetters[random];
}

newLetter.addEventListener("click", generateLoveLetter);
generateLoveLetter();

// RANDOM QUOTES
const quotes = [
  "Love isn’t perfect, it’s real 💖",
  "You don’t find love, you build it 🌸",
  "Your smile is my favorite motivation 💫",
  "Keep shining, beautiful soul 🌞",
  "You’re the calm in my chaos 💕",
];

const quote = document.getElementById("quote");
const newQuote = document.getElementById("newQuote");

function generateQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[random];
}

newQuote.addEventListener("click", generateQuote);
generateQuote();

// SLIDESHOW
let slideIndex = 0;
function showSlides() {
  const slides = document.querySelectorAll(".slides");
  slides.forEach((s) => (s.style.display = "none"));
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000);
}
showSlides();

// CHRISTMAS
const image = document.getElementById("image");
const container = document.querySelector(".image-container");
const text = document.getElementById("text");

let clicks = 0;

image.addEventListener("click", () => {
  clicks++;

  // SHAKE ANIMATION
  image.classList.remove("shake");
  void image.offsetWidth; //reset animation
  image.classList.add("shake");

  //POPUP MESSAGE
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.innerText = `click ${clicks}`;
  container.appendChild(popup);

  setTimeout(() => popup.remove(), 5000);

  // FIFTH CLICK BREAK IMAGE AND REVEAL TEXT
  if (clicks === 5) {
    // image.classList.add("break");
    // image.classList.add("crack");
    // const bg = text.querySelector(".text-bg");
    // bg.classList.add("crack");
    // // reveal background + text
    // setTimeout(() => {
    //   image.style.display = "none";
    //   text.style.opacity = "1";
    //   bg.style.opacity = "1";
    //   bg.style.transform = "scale(1)";
    // }, 300);
    // // show crack lines briefly
    // setTimeout(() => {
    //   bg.style.setProperty("--crack-opacity", "1");
    //   bg.style.opacity = "1";
    // }, 400);

    image.classList.add("break-image");

    const bg = text.querySelector(".text-bg");
    text.style.opacity = "1";
    bg.style.opacity = "1";
    bg.style.transform = "scale(1)";

    bg.classList.add("crack-glass");

    setTimeout(() => {
      image.style.display = "none";
    }, 1000);
  }
});

// MUSIC PLAYER
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
let isPlaying = false;

musicToggle.addEventListener("click", () => {
  if (!isPlaying) {
    bgMusic.play();
    musicToggle.textContent = "⏸ Pause Music";
    isPlaying = true;
  } else {
    bgMusic.pause();
    musicToggle.textContent = "🎶 Play Music";
    isPlaying = false;
  }
});

// FLOATING HEARTS
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 4 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 1000);

// TYPEWRITER EFFECT FOR ABOUT HER
const aboutText = document.getElementById("aboutText");
const aboutMessage = [
  "My Chisom, my ✨ Tsuki ✨, is a universe of warmth and captivating contrast. To look at her is to be instantly charmed: she possesses a rare, luminous beauty — a perfect, harmonious blend of being utterly 💕 cute, undeniably 🔥 sexy, and timelessly 💎 beautiful — all wrapped into one incredible person. Her 🌑 dark skin glows like polished mahogany, rich and flawless, always catching my eye. 💫\n\n",
  "Beneath that stunning exterior is the fascinating woman I’m lucky enough to know and love. She has a wonderful spirit — immensely 💗 kind and deeply caring, always thinking of others. Yet, she carries a quiet strength, often choosing to keep her deeper emotions within. 💭 She tends to hide her real feelings, which makes the moments she *does* open up to me all the more precious. 💞 Her small acts of courage — trying something new or voicing her heart — are what I admire most. 🌷\n\n",
  "What makes her truly captivating is that lovely edge to her personality. Yes, she can be a little 💢 stubborn at times and, bless her heart, she nags a lot 😂 — but those quirks are part of the rhythm that makes her *her*. They keep things honest, lively, and filled with love. ❤️ I actually love that about her — it’s her way of showing care and keeping me on my toes. 💘\n\n",
  "Perhaps the most inspiring thing about her is her deep, contagious curiosity. 🌻 She’s always eager to learn — curious about everything, growing each day, seeing the world with new eyes. That spark for knowledge and understanding is something I admire endlessly. 📚✨\n\n",
  "She is my home 🏡, my comfort ☁️, my delightful challenge 💫, and the most beautiful woman I know — my amazing Chisom. 💖🌙",
];

let typeIndex = 0;
let messageIndex = 0;
let typing = false;

function typeWriter() {
  if (messageIndex < aboutMessage.length) {
    if (typeIndex < aboutMessage[messageIndex].length) {
      aboutText.textContent += aboutMessage[messageIndex].charAt(typeIndex);
      typeIndex++;
      setTimeout(typeWriter, 50);
    } else {
      aboutText.textContent += "\n\n";
      messageIndex++;
      typeIndex = 0;
      setTimeout(typeWriter, 600);
    }
  } else {
    typing = false;
  }
}

// Trigger typing only when "About Her" is shown
document.querySelector('[data-page="about"]').addEventListener("click", () => {
  if (!typing) {
    aboutText.textContent = "";
    typing = true;
    typeIndex = 0;
    messageIndex = 0;
    typeWriter();
  }
});
