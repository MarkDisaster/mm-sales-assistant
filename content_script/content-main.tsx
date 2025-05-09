import { useDetectedProducts } from "../hooks/useDetectedProducts";

chrome.runtime.onConnect.addListener((port) => {
  if (port.name === "popup") {
    port.onMessage.addListener((message) => {
      if (message.type === "startAnalysis") {
        chrome.runtime.sendMessage(
          { type: "analyzePage", dom: document.documentElement.outerHTML },
          (response) => {
            if (response.success) {
              useDetectedProducts(response.data);

              port.postMessage({ type: "analysisComplete" });
            } else {
              console.error("Error analyzing page:", response.error);
              port.postMessage({ type: "analysisComplete" });
            }
          }
        );
      }
    });
  }
});
