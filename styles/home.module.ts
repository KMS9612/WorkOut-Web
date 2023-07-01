import styled from "@emotion/styled";
import { MainColor, SecondColor } from "../pages/_document";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, ${MainColor}, pink);
`;

export const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
export const Left = styled.div``;
export const HeadText = styled.div`
  width: 500px;
  font-size: 52px;
  font-weight: 400;
  text-align: left;
`;
export const Right = styled.div`
  text-align: right;
`;

export const SubText = styled.div`
  width: 500px;
  font-size: 32px;
`;

export const DownLoadBtn = styled.button`
  width: 200px;
  height: 50px;
  margin-top: 50px;
  border: none;
  border-radius: 15px;
  font-family: sans-serif;
  font-size: 20px;
  background-color: #ffff;
  cursor: pointer;
  transition: all 300ms;
  &:hover {
    box-shadow: 5px 5px 10px;
    color: ${MainColor};
  }
`;
