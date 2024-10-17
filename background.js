chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url && tab.url.includes("youtube.com")) {
      // Construct the command to open in Brave
      const bravePath = `open -a "Brave Browser" "${tab.url}"`;
  
      // Use the Chrome API to create a new tab for Brave
      chrome.tabs.create({ url: tab.url });
      chrome.tabs.remove(tabId); // Close the original tab
    }
  });
  