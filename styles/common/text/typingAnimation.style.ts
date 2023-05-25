import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const typingAnimation = keyframes`
from{
  width: 0
}to{
  width: 100%
}`;
export const TypingAnimation = styled.div`
  overflow: hidden;
  white-space: nowrap;
  animation: ${typingAnimation} 1s steps(40, end);
`;
