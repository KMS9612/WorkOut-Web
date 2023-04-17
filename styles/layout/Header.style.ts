import styled from "@emotion/styled";
import { MainColor, SecondColor } from "../../pages/_document";

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  padding: 0px 30px;
  display: flex;
  background-color: ${MainColor};
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

export const DownLoadBtn = styled.button`
  width: 200px;
  height: 50px;
  border: 2px solid #fff;
  background-color: ${MainColor};
  border-radius: 4px;
  font-family: "Oswald";
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  &:hover {
    transition: 1s;
    background-color: ${SecondColor};
  }
`;
