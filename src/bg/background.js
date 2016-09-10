// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.tabs.executeScript({
    file: 'js/jquery/jquery.min.js',
  });
  chrome.tabs.executeScript({
    code: "$('a').contents().unwrap();"
  });
});