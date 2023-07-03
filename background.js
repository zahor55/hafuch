chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "convertToHebrew",
    title: "Convert to Hebrew",
    contexts: ["editable"]
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "convertToHebrew") {
    chrome.tabs.sendMessage(tab.id, { action: "convertToHebrew" });
  }
});
chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "convertToEnglish",
    title: "Convert to english",
    contexts: ["editable"]
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "convertToEnglish") {
    chrome.tabs.sendMessage(tab.id, { action: "convertToEnglish" });
  }
});