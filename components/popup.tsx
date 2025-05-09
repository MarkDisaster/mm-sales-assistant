import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 200px;
  background-color: #3c3c3c;
`;

const Button = styled.button<{ disabled?: boolean }>`
  background-color: #a8c7fa;
  color: #072e6f;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 100px;
  font-family: sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};

  &:hover {
    background-color: #a1bded;
  }

  &:active {
    background-color: #91b1e8;
  }
`;

export const Popup = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const port = chrome.tabs.connect(tabs[0].id!, { name: "popup" });

      port.postMessage({ type: "startAnalysis" });

      port.onMessage.addListener((msg) => {
        if (msg.type === "analysisComplete") {
          setLoading(false);
          port.disconnect();
        }
      });
    });
  };

  return (
    <Container>
      <Button onClick={handleClick} disabled={loading}>
        {loading ? "Analyzuji..." : "Analyzovat stránku"}
      </Button>
    </Container>
  );
};
