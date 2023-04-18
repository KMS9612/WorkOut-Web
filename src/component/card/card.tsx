import styled from "@emotion/styled";
import { MainColor } from "../../../pages/_document";
import { useEffect } from "react";
import { keyframes } from "@emotion/css";

// PropsType
interface IPropsCard {
  Title: string;
  SubText: string;
}
// Style
const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: ${MainColor};
  border-radius: 15px;
  box-shadow: 8px 10px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
const FadeIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;
const Title = styled.div`
  font-size: 42px;
  font-weight: 400;
  animation: ${FadeIn} 3s ease alternate;
`;
const SubText = styled.div`
  font-size: 21px;
  animation: ${FadeIn} 3s ease alternate;
`;

export default function Card(props: IPropsCard) {
  useEffect(() => {}, []);
  return (
    <Wrapper>
      <Title className="Text">{props.Title}</Title>
      <SubText className="Text">{props.SubText}</SubText>
    </Wrapper>
  );
}
