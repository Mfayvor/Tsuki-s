// PAGE NAVIGATION
const navLinks = document.querySelectorAll("nav a");
const pages = document.querySelectorAll(".page");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.dataset.page;
    pages.forEach((p) => p.classList.remove("active"));
    const pageEl = document.getElementById(target);
    if (pageEl) pageEl.classList.add("active");

    // Update active link visual state
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Mark the initial active nav link based on the active page
(function markInitialActive() {
  const initialPage = document.querySelector(".page.active");
  if (!initialPage) return;
  const activeLink = document.querySelector(
    `nav a[data-page="${initialPage.id}"]`
  );
  if (activeLink) activeLink.classList.add("active");
})();

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

const phrases = [
  "You light up my world.",
  "Your smile is my favorite sight.",
  "Every moment with you is magic.",
  "My heart beats for you alone.",
  "You are my sweetest dream.",
  "Forever grateful for your love.",
  "You make my days brighter.",
  "Holding you is my home.",
  "With you, everything feels right.",
];

let clicks = 0;

image.addEventListener("click", () => {
  clicks++;

  // SHAKE ANIMATION
  // Use a mobile-friendly shake that doesn't translate the element off-position
  image.classList.remove("shake", "shake-mobile");
  void image.offsetWidth; // reset animation
  if (window.innerWidth <= 480) {
    image.classList.add("shake-mobile");
  } else {
    image.classList.add("shake");
  }
  // show a short romantic phrase under the image
  let phraseEl = container.querySelector(".click-phrase");
  if (!phraseEl) {
    phraseEl = document.createElement("div");
    phraseEl.className = "click-phrase";
    // insert the phrase element right after the image
    image.insertAdjacentElement("afterend", phraseEl);
  }

  const phrase = phrases[(clicks - 1) % phrases.length] || "You are my love.";
  phraseEl.textContent = phrase;
  // trigger visible state
  phraseEl.classList.add("visible");

  // remove visible state after a short while so next click will animate again
  clearTimeout(phraseEl._hideTimer);
  phraseEl._hideTimer = setTimeout(() => {
    phraseEl.classList.remove("visible");
  }, 3000);

  // Tenth click BREAK IMAGE AND REVEAL TEXT
  if (clicks === 10) {
    image.classList.add("break-image");

    const bg = text.querySelector(".text-bg");
    text.style.opacity = "1";
    bg.style.opacity = "1";
    bg.style.transform = "scale(1)";

    bg.classList.add("crack-glass");

    setTimeout(() => {
      image.style.display = "none";
      // also remove the phrase element when revealing
      const p = container.querySelector(".click-phrase");
      if (p) p.remove();
    }, 1000);
  }
});

// NEW YEAR
// New year cards will be rendered from `window.newYearCards` (see newYearCards.js)
function renderNewYearCards(listSelector = "#newYearList") {
  const list = document.querySelector(listSelector);
  if (!list) return;
  const cards = window.newYearCards || [];
  list.innerHTML = "";
  cards.forEach((text, i) => {
    const li = document.createElement("li");
    li.className = "splicable";
    li.setAttribute("data-truncate-chars", "300");
    li.dataset.index = i;
    li.textContent = String(text).trim();
    list.appendChild(li);
  });
}

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
  // ensure emoji uses twemoji images for consistent appearance
  if (window.twemoji) twemoji.parse(heart, { folder: "svg", ext: ".svg" });
  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 1000);

// floating romantic phrases that drift like hearts
const floatingPhrases = [
  "I love you",
  "Forever yours",
  "My sweetest",
  "You, always",
  "You are my moon",
  "All my heart",
  "Endless love",
  "You and me",
];
function createFloatingPhrase() {
  const el = document.createElement("div");
  el.className = "floating-phrase small";
  const txt =
    floatingPhrases[Math.floor(Math.random() * floatingPhrases.length)];
  el.textContent = `💌 ${txt}`;
  // random horizontal start within center +/- 25vw
  const offset = (Math.random() - 0.5) * 50; // -25 .. 25
  el.style.left = `calc(50% + ${offset}vw)`;
  document.body.appendChild(el);
  if (window.twemoji) twemoji.parse(el, { folder: "svg", ext: ".svg" });
  setTimeout(() => el.remove(), 5200);
}

// create a floating phrase occasionally to complement the hearts
setInterval(createFloatingPhrase, 4500);

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

// ===== Text Splicer: truncate then reveal on click (vanilla JS) =====
function initSplicable(selector = ".splicable", defaultChars = 250) {
  const nodes = document.querySelectorAll(selector);
  nodes.forEach((el) => {
    const full = el.textContent.trim();
    const chars = parseInt(el.dataset.truncateChars) || defaultChars;
    if (!full || full.length <= chars) return;

    const truncated = full.slice(0, chars).replace(/\s+\S*$/, "");

    el.dataset.full = full;
    el.dataset.truncated = truncated;
    el.dataset.expanded = "false";

    // build truncated view
    el.textContent = truncated + "... ";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "more-link";
    btn.textContent = "more";
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggle(el, btn);
    });
    el.appendChild(btn);

    // allow clicking the paragraph to toggle as well
    el.addEventListener("click", (e) => {
      if (e.target === btn) return;
      toggle(el, btn);
    });
  });

  function toggle(el, btn) {
    const parent = el.parentElement;
    const siblings = parent
      ? Array.from(parent.querySelectorAll(selector))
      : Array.from(nodes);
    const newYearSection = document.querySelector("#new");

    if (el.dataset.expanded === "true") {
      el.textContent = el.dataset.truncated + "... ";
      btn.textContent = "more";
      el.dataset.expanded = "false";
      el.appendChild(btn);

      // show all siblings again
      siblings.forEach((n) => {
        n.classList.remove("splicable--hidden", "splicable--focused");
      });
      // restore greeting visibility
      if (newYearSection) newYearSection.classList.remove("has-focused-card");
    } else {
      // expand this one and hide siblings
      el.textContent = el.dataset.full + " ";
      btn.textContent = "less";
      el.dataset.expanded = "true";
      el.appendChild(btn);

      siblings.forEach((n) => {
        if (n === el) {
          n.classList.add("splicable--focused");
          n.classList.remove("splicable--hidden");
        } else {
          n.classList.add("splicable--hidden");
          n.classList.remove("splicable--focused");
        }
      });
      // hide greeting when a card is focused
      if (newYearSection) newYearSection.classList.add("has-focused-card");
      
      // scroll the card to top with smooth behavior
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }
}

// initialize on DOM ready (script is at end of body, but safe to wait)
document.addEventListener("DOMContentLoaded", () => {
  renderNewYearCards("#newYearList");
  initSplicable(".splicable", 300);
  // convert existing emojis to Twemoji images for consistent rendering
  if (window.twemoji)
    twemoji.parse(document.body, { folder: "svg", ext: ".svg" });
});

// Hide header after a small scroll (couple pixels)
(function setupHeaderHide() {
  const headerEl = document.querySelector("header");
  if (!headerEl) return;
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 10) {
        headerEl.classList.add("header-hidden");
      } else {
        headerEl.classList.remove("header-hidden");
      }
    },
    { passive: true }
  );
})();
