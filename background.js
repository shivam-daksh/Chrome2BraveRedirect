chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      const url = details.url;
      if (url.includes("youtube.com")) {
        // Use the 'open' command to launch Brave
        const command = `open -a "Brave Browser" "${url}"`;
        const exec = require('child_process').exec;
        exec(command);
        
        // Close the original tab
        chrome.tabs.remove(details.tabId);
      }
    },
    {urls: ["*://*.youtube.com/*"]},
    ["blocking"]
  );
  