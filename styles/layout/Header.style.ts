import styled from "@emotion/styled";
import { MainColor } from "../../pages/_document";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10000;
`;

export const Logo = styled.div`
  width: 100%;
  font-size: 32px;
  font-weight: 700;
  font-family: "Oswald", "sans-serif";
  color: ${MainColor};
  cursor: default;
`;
