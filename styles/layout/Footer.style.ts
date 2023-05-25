import styled from "@emotion/styled";
import { MainColor } from "../../pages/_document";

export const Wrapper = styled.div`
  width: 100%;
  border: 1px solid #fff;
  height: 9vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(to right, ${MainColor}, pink);
`;
export const ContactBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Contact = styled.div``;
export const InnerText = styled.a`
  font-weight: 500;
  font-family: sans-serif;
  cursor: pointer;
`;
