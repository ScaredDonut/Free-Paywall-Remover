const proxySite = "https://12ft.io/";

chrome.browserAction.onClicked.addListener(async (tab) => {
  let currentURL = tab.url;
  currentURL = proxySite + currentURL;
  chrome.tabs.update({url: currentURL });
  
  

});
