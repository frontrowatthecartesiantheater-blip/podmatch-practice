document.getElementById('scrapeBtn').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {action: "scrape"}, (response) => {
      console.log('Received:', response);
      alert('Data scraped! Check console.');
    });
  });
});