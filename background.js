chrome.runtime.onMessage.addListener(function (msg) {
  if (msg.url && msg.fileMame && msg.dirName) {
    chrome.downloads.download({
      url: msg.url,
      filename: msg.dirName + "/" + msg.fileMame
    });
  }
})

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['main.js']
  });
});