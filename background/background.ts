import { analyzePage } from "./../features/api/analyzePage";

chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
});

chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
  if (message.type === 'analyzePage') {
    (async () => {
      try {
        console.log('message.dom', message.dom);
        const result = await analyzePage(message.dom);
        sendResponse({ success: true, data: result });
      } catch (error) {
        sendResponse({ success: false, error: (error as Error).message });
      }
    })();
    return true;
  }
});