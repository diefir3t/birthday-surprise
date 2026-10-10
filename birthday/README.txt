# 🎂 Birthday Surprise

A little website made to turn a special birthday into an unforgettable memory.

Featuring a birthday countdown, heartfelt letters, a personal story, a gallery, background music, and a final surprise.

**Built with:** HTML, CSS, JavaScript

*Some memories deserve more than a message.* ❤️



BIRTHDAY SURPRISE WEBSITE - SEPARATE FILES

Structure:
index.html
css/style.css
js/script.js
images/

IMPORTANT:
1) Open js/script.js.
2) At the top, change TARGET_DATE_IRAN to the exact birthday date/time in Iran.
   Example: 2026-09-20T21:30:00+03:30
3) The countdown uses Asia/Tehran for the live Iran clock.
4) Before the target time, only the countdown gate is visible.
5) At zero, the birthday site unlocks automatically.

Gallery:
- Replace images/photo-1.svg ... photo-6.svg with real photos.
- Keep the same filenames, or edit the image paths in index.html.

Music:
- Create the folder music/ (already included).
- Put your legally obtained copy of "golden hour — JVKE" there as:
  music/golden-hour.mp3
- The site will try to start the song after the countdown reaches zero.
- If the browser blocks autoplay, use the "Play music" button at the bottom-right.
- Music fades in to about 55% volume and can be paused/resumed.

Countdown behavior:
- The countdown reaches zero first.
- A "Open your surprise" button appears under it.
- The website does NOT open automatically.
- Clicking the button starts golden-hour.mp3 from a real user gesture.
- The website then opens with a cinematic ~3.4 second reveal so the music can begin/buffer smoothly.
