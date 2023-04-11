import styled from "@emotion/styled";
import { MainColor } from "../pages/_document";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Top = styled.div`
  height: 950px;
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

export const Middle = styled.div`
  width: 80%;
`;

export const AnimationBox = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.div`
  opacity: 0;
  transition: all 1000ms;
  transform: translate(120px, 1%);
`;
export const GifImage = styled.div`
  width: 500px;
  height: 500px;
  background-color: #000;
  opacity: 0;
  transition: all 1000ms;
  transform: translate(120px, 1%);
`;
