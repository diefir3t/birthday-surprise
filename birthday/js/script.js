/* =========================================================
   BIRTHDAY WEBSITE
   SCRIPT.JS
   ========================================================= */
/* =========================================================
   CONFIGURATION
   ========================================================= */
const TARGET_DATE_IRAN = "2026-04-22T20:00:00+03:30";
const MUSIC_VOLUME = 0.45;
/* =========================================================
   ELEMENTS
   ========================================================= */
const countdownGate = document.getElementById("countdownGate");
const siteShell = document.getElementById("siteShell");
const openBirthdayBtn = document.getElementById("openBirthdayBtn");
const readyHint = document.getElementById("readyHint");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const iranClock = document.getElementById("iranClock");
const bgMusic = document.getElementById("bgMusic");
const floatingMusicControl =
  document.getElementById("floatingMusicControl");
const soundToggle =
  document.getElementById("soundToggle");
const stars = document.getElementById("stars");
const floatingHearts =
  document.getElementById("floatingHearts");
const galleryItems =
  document.querySelectorAll(".gallery-item");
const galleryOverlay =
  document.getElementById("galleryOverlay");
const galleryOverlayImg =
  document.getElementById("galleryOverlayImg");
const galleryClose =
  document.getElementById("galleryClose");
const surpriseBtn =
  document.getElementById("surpriseBtn");
const hiddenMessage =
  document.getElementById("hiddenMessage");
/* =========================================================
   STATE
   ========================================================= */
let countdownFinished = false;
let musicPlaying = false;
let starsStarted = false;
let heartsStarted = false;
/* =========================================================
   TARGET TIME
   ========================================================= */
const targetTime =
  new Date(TARGET_DATE_IRAN).getTime();
/* =========================================================
   HELPERS
   ========================================================= */
function pad(value) {
  return String(value).padStart(2, "0");
}
/* =========================================================
   IRAN CLOCK
   ========================================================= */
function updateIranClock() {
  if (!iranClock) {
    return;
  }
  const formatter =
    new Intl.DateTimeFormat(
      "en-GB",
      {
        timeZone: "Asia/Tehran",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      }
    );
  iranClock.textContent =
    formatter.format(new Date());
}
updateIranClock();
setInterval(
  updateIranClock,
  1000
);
/* =========================================================
   COUNTDOWN
   ========================================================= */
function updateCountdown() {
  const now = Date.now();
  const difference =
    targetTime - now;
  /*
   * Birthday time reached
   */
  if (difference <= 0) {
    if (!countdownFinished) {
      countdownFinished = true;
      if (daysEl) {
        daysEl.textContent = "00";
      }
      if (hoursEl) {
        hoursEl.textContent = "00";
      }
      if (minutesEl) {
        minutesEl.textContent = "00";
      }
      if (secondsEl) {
        secondsEl.textContent = "00";
      }
      showOpenButton();
    }
    return;
  }
  /*
   * Calculate remaining time
   */
  const totalSeconds =
    Math.floor(
      difference / 1000
    );
  const days =
    Math.floor(
      totalSeconds / 86400
    );
  const hours =
    Math.floor(
      (totalSeconds % 86400) / 3600
    );
  const minutes =
    Math.floor(
      (totalSeconds % 3600) / 60
    );
  const seconds =
    totalSeconds % 60;
  /*
   * Update HTML
   */
  if (daysEl) {
    daysEl.textContent =
      pad(days);
  }
  if (hoursEl) {
    hoursEl.textContent =
      pad(hours);
  }
  if (minutesEl) {
    minutesEl.textContent =
      pad(minutes);
  }
  if (secondsEl) {
    secondsEl.textContent =
      pad(seconds);
  }
}
/* =========================================================
   SHOW OPEN BUTTON
   ========================================================= */
function showOpenButton() {
  if (!openBirthdayBtn) {
    console.error(
      "openBirthdayBtn was not found."
    );
    return;
  }
  openBirthdayBtn.hidden = false;
  openBirthdayBtn.style.display =
    "inline-flex";
  openBirthdayBtn.style.visibility =
    "visible";
  openBirthdayBtn.style.opacity =
    "1";
  openBirthdayBtn.style.pointerEvents =
    "auto";
  requestAnimationFrame(() => {
    openBirthdayBtn.classList.add(
      "show"
    );
  });
  if (readyHint) {
    readyHint.hidden = false;
    readyHint.style.display =
      "block";
  }
}
/* =========================================================
   START COUNTDOWN
   ========================================================= */
updateCountdown();
setInterval(
  updateCountdown,
  500
);
/* =========================================================
   MUSIC
   ========================================================= */
if (bgMusic) {
  bgMusic.volume =
    MUSIC_VOLUME;
  bgMusic.loop =
    true;
}
/* =========================================================
   START MUSIC
   ========================================================= */
async function startMusic() {
  if (!bgMusic) {
    console.warn(
      "bgMusic element not found."
    );
    return false;
  }
  try {
    bgMusic.volume =
      MUSIC_VOLUME;
    await Promise.race([
      bgMusic.play(),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("play() timeout")), 4000)
      )
    ]);
    musicPlaying =
      true;
    updateMusicButtons();
    return true;
  } catch (error) {
    console.warn(
      "Music could not start:",
      error
    );
    return false;
  }
}
/* =========================================================
   STOP MUSIC
   ========================================================= */
function stopMusic() {
  if (!bgMusic) {
    return;
  }
  bgMusic.pause();
  musicPlaying =
    false;
  updateMusicButtons();
}
/* =========================================================
   TOGGLE MUSIC
   ========================================================= */
async function toggleMusic() {
  if (!bgMusic) {
    return;
  }
  if (bgMusic.paused) {
    await startMusic();
  } else {
    stopMusic();
  }
}
/* =========================================================
   MUSIC BUTTONS
   ========================================================= */
function updateMusicButtons() {
  if (floatingMusicControl) {
    if (musicPlaying) {
      floatingMusicControl.classList.add(
        "playing"
      );
      floatingMusicControl.classList.add(
        "visible"
      );
      floatingMusicControl.setAttribute(
        "aria-label",
        "Pause birthday music"
      );
      const text =
        floatingMusicControl.querySelector(
          ".music-text"
        );
      if (text) {
        text.textContent =
          "Pause music";
      }
    } else {
      floatingMusicControl.classList.remove(
        "playing"
      );
      floatingMusicControl.setAttribute(
        "aria-label",
        "Play birthday music"
      );
      const text =
        floatingMusicControl.querySelector(
          ".music-text"
        );
      if (text) {
        text.textContent =
          "Play music";
      }
    }
  }
  if (soundToggle) {
    soundToggle.classList.toggle(
      "playing",
      musicPlaying
    );
  }
}
/* =========================================================
   MUSIC CONTROLS
   ========================================================= */
if (floatingMusicControl) {
  floatingMusicControl.addEventListener(
    "click",
    toggleMusic
  );
}
if (soundToggle) {
  soundToggle.addEventListener(
    "click",
    toggleMusic
  );
}
/* =========================================================
   OPEN BIRTHDAY WEBSITE
   ========================================================= */
if (openBirthdayBtn) {
  openBirthdayBtn.addEventListener(
    "click",
    async function () {
      if (!countdownFinished) {
        return;
      }
      if (
        openBirthdayBtn.dataset.opening ===
        "true"
      ) {
        return;
      }
      openBirthdayBtn.dataset.opening =
        "true";
      openBirthdayBtn.innerHTML =
        "Opening your surprise... ♥";
      openBirthdayBtn.disabled =
        true;
      /*
       * Start music from user click.
       * NOT awaited: audio.play() can stay pending forever
       * (missing file, slow network), which would freeze the reveal.
       */
      startMusic();
      floatingMusicControl &&
        floatingMusicControl.classList.add("visible");
      /*
       * Wait for cinematic opening
       */
      setTimeout(() => {
        /* =====================================
           HIDE COUNTDOWN
           ===================================== */
        if (countdownGate) {
          countdownGate.classList.add(
            "is-hidden"
          );
          countdownGate.classList.add(
            "reveal-curtain"
          );
          countdownGate.style.pointerEvents =
            "none";
        }
        /* =====================================
           ENABLE SCROLL
           ===================================== */
        document.body.classList.remove(
          "no-scroll"
        );
        document.body.style.overflow =
          "auto";
        /* =====================================
           SHOW MAIN WEBSITE
           ===================================== */
        if (siteShell) {
          siteShell.classList.add(
            "is-visible"
          );
          siteShell.classList.add(
            "site-opening"
          );
          setTimeout(() => {
            siteShell.classList.remove("site-opening");
          }, 3000);
          siteShell.style.display =
            "block";
          siteShell.style.visibility =
            "visible";
          siteShell.style.opacity =
            "1";
          siteShell.style.pointerEvents =
            "auto";
        }
        /* =====================================
           START EFFECTS
           ===================================== */
        startStars();
        startPixelRain();
        startFloatingHearts();
        /* =====================================
           INTRO
           ===================================== */
        startIntro();
        /* =====================================
           TOP OF PAGE
           ===================================== */
        window.scrollTo({
          top: 0,
          behavior: "instant"
        });
        console.log(
          "Birthday website opened successfully."
        );
      }, 700);
    }
  );
}
/* =========================================================
   INTRO
   ========================================================= */
function startIntro() {
  const intro =
    document.getElementById("intro");
  if (!intro) {
    return;
  }
  intro.classList.add(
    "intro-active"
  );
  setTimeout(() => {
    intro.classList.add(
      "intro-finished"
    );
  }, 2400);
  setTimeout(() => {
    intro.style.opacity =
      "0";
    intro.style.visibility =
      "hidden";
    intro.style.pointerEvents =
      "none";
  }, 3400);
}
/* =========================================================
   STARS
   ========================================================= */
function startStars() {
  if (starsStarted) {
    return;
  }
  if (!stars) {
    return;
  }
  starsStarted = true;
  const isMobile =
    window.innerWidth <= 768;
  const starCount =
    isMobile ? 20 : 55;
  const fragment =
    document.createDocumentFragment();
  for (
    let i = 0;
    i < starCount;
    i++
  ) {
    const star =
      document.createElement("span");
    star.className =
      "star";
    star.style.left =
      `${Math.random() * 100}%`;
    star.style.top =
      `${Math.random() * 100}%`;
    const size =
      1 + Math.random() * 2;
    star.style.width =
      `${size}px`;
    star.style.height =
      `${size}px`;
    star.style.animationDelay =
      `${Math.random() * 5}s`;
    star.style.animationDuration =
      `${3 + Math.random() * 5}s`;
    fragment.appendChild(
      star
    );
  }
  stars.appendChild(
    fragment
  );
}
/* =========================================================
   FLOATING HEARTS
   ========================================================= */
function startFloatingHearts() {
  if (heartsStarted) {
    return;
  }
  if (!floatingHearts) {
    return;
  }
  heartsStarted = true;
  createFloatingHeart();
  setInterval(
    createFloatingHeart,
    2200
  );
}
function createFloatingHeart() {
  if (!floatingHearts) {
    return;
  }
  const heart =
    document.createElement("span");
  /*
   * IMPORTANT:
   * CSS uses .float-heart
   */
  heart.className =
    "float-heart";
  heart.textContent =
    "♥";
  heart.style.left =
    `${Math.random() * 100}%`;
  heart.style.fontSize =
    `${10 + Math.random() * 16}px`;
  heart.style.opacity =
    `${0.25 + Math.random() * 0.4}`;
  heart.style.animationDuration =
    `${6 + Math.random() * 5}s`;
  floatingHearts.appendChild(
    heart
  );
  setTimeout(() => {
    heart.remove();
  }, 12000);
}

/* =========================================================
   PIXEL RAIN  (light: ~38 tiny squares, 30fps, auto-pauses)
   ========================================================= */
let pixelRainStarted = false;

function startPixelRain() {
  if (pixelRainStarted) {
    return;
  }
  const canvas = document.getElementById("pixelRain");
  if (!canvas || !canvas.getContext) {
    return;
  }
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }
  pixelRainStarted = true;

  const ctx = canvas.getContext("2d");
  const colors = [
    "#ff8fa3", "#ffb3a7", "#ffe29a",
    "#b9a6ff", "#7aeee0", "#ffd6f0"
  ];
  const isMobile = window.innerWidth <= 768;
  const COUNT = isMobile ? 22 : 38;
  let w = 0;
  let h = 0;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();

  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 200);
  });

  function makeParticle(initial) {
    const size = 2 + Math.floor(Math.random() * 3); // 2-4px
    return {
      x: Math.random() * w,
      // start above the screen so they drift in from the top
      y: initial ? -Math.random() * h : -10 - Math.random() * 60,
      size: size,
      speed: 14 + size * 7 + Math.random() * 14,   // px / second
      sway: 6 + Math.random() * 14,
      phase: Math.random() * Math.PI * 2,
      alpha: 0.28 + Math.random() * 0.42,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
  }

  const particles = [];
  for (let i = 0; i < COUNT; i++) {
    particles.push(makeParticle(true));
  }

  let last = performance.now();
  let running = true;

  function frame(now) {
    if (!running) {
      return;
    }
    requestAnimationFrame(frame);

    const elapsed = now - last;
    if (elapsed < 33) {          // cap at ~30fps
      return;
    }
    last = now;
    const dt = Math.min(elapsed, 100) / 1000;

    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.y += p.speed * dt;
      p.phase += dt * 0.8;

      if (p.y > h + 10) {
        particles[i] = makeParticle(false);
        continue;
      }
      if (p.y < 0) {
        continue;
      }

      // soft fade near top and bottom
      const t = p.y / h;
      let fade = 1;
      if (t < 0.08) {
        fade = t / 0.08;
      } else if (t > 0.85) {
        fade = (1 - t) / 0.15;
      }

      ctx.globalAlpha = p.alpha * fade;
      ctx.fillStyle = p.color;
      ctx.fillRect(
        Math.round(p.x + Math.sin(p.phase) * p.sway),
        Math.round(p.y),
        p.size,
        p.size
      );
    }
    ctx.globalAlpha = 1;
  }

  requestAnimationFrame(frame);

  // stop drawing when the tab is hidden
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      running = false;
    } else if (!running) {
      running = true;
      last = performance.now();
      requestAnimationFrame(frame);
    }
  });
}

/* =========================================================
   SCROLL REVEAL
   ========================================================= */
function setupRevealAnimations() {
  const elements =
    document.querySelectorAll(
      ".reveal"
    );
  if (!elements.length) {
    return;
  }
  if (
    !("IntersectionObserver" in window)
  ) {
    elements.forEach(
      element => {
        element.classList.add(
          "in"
        );
      }
    );
    return;
  }
  const observer =
    new IntersectionObserver(
      entries => {
        entries.forEach(
          entry => {
            if (
              entry.isIntersecting
            ) {
              entry.target.classList.add(
                "in"
              );
              observer.unobserve(
                entry.target
              );
            }
          }
        );
      },
      {
        threshold: 0.12
      }
    );
  elements.forEach(
    element => {
      observer.observe(
        element
      );
    }
  );
}
setupRevealAnimations();
/* =========================================================
   TILT
   ========================================================= */
function setupTilt() {
  if (
    window.innerWidth <= 900
  ) {
    return;
  }
  const elements =
    document.querySelectorAll(
      ".tilt"
    );
  elements.forEach(
    element => {
      element.addEventListener(
        "mousemove",
        event => {
          const rect =
            element.getBoundingClientRect();
          const x =
            event.clientX -
            rect.left;
          const y =
            event.clientY -
            rect.top;
          const centerX =
            rect.width / 2;
          const centerY =
            rect.height / 2;
          const rotateX =
            ((y - centerY) /
              centerY) *
            -3;
          const rotateY =
            ((x - centerX) /
              centerX) *
            3;
          element.style.transform =
            `perspective(900px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)
                         translateY(-4px)`;
        }
      );
      element.addEventListener(
        "mouseleave",
        () => {
          element.style.transform =
            "";
        }
      );
    }
  );
}
setupTilt();
/* =========================================================
   GALLERY
   ========================================================= */
function openGallery(
  imageSrc,
  imageAlt
) {
  if (
    !galleryOverlay ||
    !galleryOverlayImg
  ) {
    return;
  }
  galleryOverlayImg.src =
    imageSrc;
  galleryOverlayImg.alt =
    imageAlt ||
    "Gallery image";
  /*
   * CSS uses .open
   */
  galleryOverlay.classList.add(
    "open"
  );
  galleryOverlay.setAttribute(
    "aria-hidden",
    "false"
  );
  document.body.classList.add(
    "lightbox-open"
  );
}
function closeGallery() {
  if (!galleryOverlay) {
    return;
  }
  galleryOverlay.classList.remove(
    "open"
  );
  galleryOverlay.setAttribute(
    "aria-hidden",
    "true"
  );
  document.body.classList.remove(
    "lightbox-open"
  );
}
galleryItems.forEach(
  item => {
    item.addEventListener(
      "click",
      () => {
        const image =
          item.querySelector(
            "img"
          );
        if (!image) {
          return;
        }
        const fullImage =
          item.dataset.full ||
          image.currentSrc ||
          image.src;
        openGallery(
          fullImage,
          image.alt
        );
      }
    );
  }
);
if (galleryClose) {
  galleryClose.addEventListener(
    "click",
    closeGallery
  );
}
if (galleryOverlay) {
  galleryOverlay.addEventListener(
    "click",
    event => {
      if (
        event.target ===
        galleryOverlay
      ) {
        closeGallery();
      }
    }
  );
}
document.addEventListener(
  "keydown",
  event => {
    if (
      event.key === "Escape"
    ) {
      closeGallery();
    }
  }
);
/* =========================================================
   SURPRISE MESSAGE
   ========================================================= */
if (surpriseBtn) {
  surpriseBtn.addEventListener(
    "click",
    () => {
      if (!hiddenMessage) {
        return;
      }
      hiddenMessage.classList.toggle(
        "show"
      );
      if (
        hiddenMessage.classList.contains(
          "show"
        )
      ) {
        surpriseBtn.textContent =
          "Close it ♥";
      } else {
        surpriseBtn.textContent =
          "Open it ♥";
      }
      createFloatingHeart();
    }
  );
}
/* =========================================================
   NAVIGATION
   ========================================================= */
function setupNavigation() {
  const links =
    document.querySelectorAll(
      'a[href^="#"]'
    );
  links.forEach(
    link => {
      link.addEventListener(
        "click",
        event => {
          const targetId =
            link.getAttribute(
              "href"
            );
          if (
            !targetId ||
            targetId === "#"
          ) {
            return;
          }
          const target =
            document.querySelector(
              targetId
            );
          if (!target) {
            return;
          }
          event.preventDefault();
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      );
    }
  );
}
setupNavigation();
/* =========================================================
   IMAGE DRAG PREVENTION
   ========================================================= */
document
  .querySelectorAll("img")
  .forEach(
    image => {
      image.addEventListener(
        "dragstart",
        event => {
          event.preventDefault();
        }
      );
    }
  );
/* =========================================================
   REDUCED MOTION
   ========================================================= */
if (
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches
) {
  document.documentElement.classList.add(
    "reduced-motion"
  );
}
/* =========================================================
   DEBUG
   ========================================================= */
console.log(
  "Birthday website loaded successfully."
);
console.log(
  "Target date:",
  TARGET_DATE_IRAN
);
console.log(
  "Countdown finished:",
  countdownFinished
);