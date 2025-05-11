import { createRoot } from "react-dom/client";
import { Tooltip } from "../components/tooltip";

const handleDetectedProducts = (data: string) => {
  const array = data.split(", ").map((item: string) => item.trim());
  const selector = array.map((cls: string) => `.${cls}`).join(", ");
  const items = document.querySelectorAll(selector);

  items.forEach((item) => {
    const el = item as HTMLElement;
    el.style.position = "relative";
    el.style.backgroundColor = "#a8c7fa";
    el.style.background = "#a8c7fa";

    item.addEventListener("mouseenter", () => {
      const rect = item.getBoundingClientRect();
      const tooltipContainer = document.createElement("div");
      document.body.appendChild(tooltipContainer);

      const root = createRoot(tooltipContainer);
      root.render(
        <Tooltip
          text="Detekovaný produkt"
          top={rect.top + window.scrollY - 30}
          left={rect.left + window.scrollX}
        />
      );

      item.addEventListener("mouseleave", () => {
        root.unmount();
      });
    });
  });
};

chrome.runtime.onConnect.addListener((port) => {
  if (port.name === "popup") {
    port.onMessage.addListener((message) => {
      if (message.type === "startAnalysis") {
        chrome.runtime.sendMessage(
          { type: "analyzePage", dom: document.documentElement.outerHTML },
          (response) => {
            if (response.success) {
              handleDetectedProducts(response.data);

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
