const emojis = ['😀', '😂', '😊', '😎', '😍', '😘', '🥳', '🎉', '🎈', '❤️', '🔥', '💯', '✨', '🚀', '🌈', '🌟', '🍕', '🍔', '🍟', '🍦', '🍰', '🍭', '🍩', '🍪'];

const searchInput = document.getElementById('searchInput');
const emojiContainer = document.getElementById('emojiContainer');

function displayEmojis(filteredEmojis) {
  emojiContainer.innerHTML = '';
  filteredEmojis.forEach(emoji => {
    const emojiElement = document.createElement('div');
    emojiElement.classList.add('emoji');
    emojiElement.textContent = emoji;
    emojiElement.addEventListener('click', () => {
      navigator.clipboard.writeText(emoji);
      alert('Copied to clipboard: ' + emoji);
    });
    emojiContainer.appendChild(emojiElement);
  });
}

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredEmojis = emojis.filter(emoji => emoji.toLowerCase().includes(searchTerm));
  displayEmojis(filteredEmojis);
});

displayEmojis(emojis);
