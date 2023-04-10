import styled from "@emotion/styled";
import { MainColor } from "../pages/_app";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackGroundImage = styled.img`
  width: 95%;
  height: 100%;
  text-align: center;
`;

export const DownLoadBtn = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  background-color: ${MainColor};
  border-radius: 4px;
  font-family: "Oswald";
  font-size: 24px;
  font-weight: 300;
  color: #fff;
  position: absolute;
  top: 100mm;
  left: 50mm;
  cursor: pointer;
  &:hover {
    transition: 1s;
    color: black;
  }
`;
