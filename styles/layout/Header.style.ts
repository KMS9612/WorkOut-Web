import styled from "@emotion/styled";
import { MainColor, SecondColor } from "../../pages/_document";

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  padding: 0px 30px;
  display: flex;
  background: linear-gradient(to right, ${MainColor}, pink);
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  width: 300px;
  font-size: 32px;
  font-weight: 700;
  font-family: "Oswald", "sans-serif";
  color: #fff;
  cursor: default;
`;
