chrome.browserAction.onClicked.addListener(function(activeTab)
{   
    var RedditIT = chrome.tabs.query({currentWindow: true, active: true}, function(tabs) { chrome.tabs.create({url: "https://www.reddit.com/submit?title=" + tabs[0].title + "&url=" + tabs[0].url}); });
});
