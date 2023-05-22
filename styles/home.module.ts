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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(to right, ${MainColor}, pink);
`;

export const TextBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: #fff;
`;
export const HeadText = styled.div`
  width: 100%;
  height: 100%;
  font-size: 52px;
  font-weight: 400;
  display: flex;
`;
export const SubText = styled.div`
  width: 100%;
  font-size: 32px;
`;

export const DownLoadBtn = styled.button`
  width: 200px;
  height: 50px;
  border: 1px solid #fff;
  border-radius: 4px;
  font-size: 24px;
  font-family: sans-serif;
  color: #fff;
  background-color: #fa8072;
  cursor: pointer;
`;
