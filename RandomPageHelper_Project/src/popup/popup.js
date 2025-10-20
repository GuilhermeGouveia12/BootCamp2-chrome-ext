const btn = document.getElementById('randomPageBtn');
const statusEl = document.getElementById('status');

const urls = [
  "https://pt.wikipedia.org/wiki/Sorteio",
  "https://pt.wikipedia.org/wiki/Curiosidades",
  "https://www.khanacademy.org/",
  "https://www.duolingo.com/",
  "https://www.nasa.gov/"
];

btn.addEventListener('click', () => {
  const randomUrl = urls[Math.floor(Math.random() * urls.length)];
  chrome.tabs.create({ url: randomUrl });
  statusEl.textContent = `Abrindo: ${randomUrl}`;
});
