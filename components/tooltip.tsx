import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
  top: number;
  left: number;
};

const TooltipContainer = styled.div<{ top: number; left: number }>`
  position: absolute;
  margin-bottom: 8px;
  padding: 4px 8px;
  font-size: 12px;
  color: white;
  background-color: #000000;
  border-radius: 4px;
  box-shadow: 0 2px 8px #000000;
  white-space: nowrap;
  z-index: 9999;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
`;

export const Tooltip: React.FC<Props> = ({ text, top, left }) => {
  return (
    <TooltipContainer top={top} left={left} role="tooltip">
      {text}
    </TooltipContainer>
  );
};
