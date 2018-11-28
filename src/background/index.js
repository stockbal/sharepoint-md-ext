import { LinkHandler, openUrlInTab } from '../util';

chrome.contextMenus.onClicked.addListener((info, tab) => {
});

// handle messages from content scripts or popup pages
chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
});

chrome.runtime.onInstalled.addListener(details => {
  installContextMenu();
});
