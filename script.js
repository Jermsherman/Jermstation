// script.js

// ====== PAGE 1: index.html ======
const card = document.getElementById('memory-card');
const screen = document.getElementById('start-screen');
const sound = document.getElementById('openSound');

if (card && screen && sound) {
  card.addEventListener('click', () => {
    sound.play();
    screen.style.transition = 'opacity 1s ease';
    screen.style.opacity = 0;
    setTimeout(() => {
      window.location.href = 'menu.html';
    }, 1000);
  });
}

// ====== PAGE 2: menu.html ======
const avatars = document.querySelectorAll('.avatar');
const audio = document.getElementById('audio');
const player = document.getElementById('player');

if (avatars.length > 0 && audio && player) {
  avatars.forEach(avatar => {
    avatar.addEventListener('click', () => {
      const track = avatar.dataset.track;

      // Play the corresponding track
      audio.src = track;
      player.classList.remove('hidden');
      audio.play();
    });
  });
}

function closePlayer() {
  if (player && audio) {
    audio.pause();
    audio.currentTime = 0;
    player.classList.add('hidden');
  }
}
