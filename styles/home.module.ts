import styled from "@emotion/styled";
import { MainColor, SecondColor } from "../pages/_document";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Top = styled.div`
  width: 100%;
  height: 800px;
  margin-bottom: 90px;
  background-color: ${SecondColor};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const TextBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const HeadText = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 52px;
  font-weight: 400;
  display: flex;
`;
export const SubText = styled.div`
  width: 100%;
  color: #fff;
  font-size: 32px;
`;
export const CardBox = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const BackGroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
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
  color: #fff;
  position: absolute;
  top: 100mm;
  left: 100mm;
  cursor: pointer;
  &:hover {
    transition: 1s;
    background-color: ${SecondColor};
  }
`;

export const Middle = styled.div``;

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
  color: #fff;
  text-align: center;
  opacity: 0;
  transition: all 1000ms;
  transform: translate(120px, 1%);
`;
