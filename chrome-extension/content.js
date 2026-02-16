console.log('PodMatch Scraper loaded!');

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "scrape") {
    const data = {
      pageTitle: document.title,
      url: window.location.href,
      timestamp: new Date().toISOString()
    };
    console.log('Scraped data:', data);
    sendResponse(data);
  }
});