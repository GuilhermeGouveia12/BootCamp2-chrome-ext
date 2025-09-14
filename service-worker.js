chrome.runtime.onInstalled.addListener(() => {
  console.log('Random Page Helper instalado.');
  chrome.storage.local.set({ installs: Date.now() });
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'PING') {
    sendResponse({ ok: true, time: new Date().toISOString() });
  }
});
