import FooterLayout from "./Footer.layout";
import HeaderLayout from "./Header.layout";
import "@emotion/css";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin: 0px 20px;
`;
const Body = styled.div``;

export default function HomeLayout(props: any) {
  return (
    <Wrapper>
      <HeaderLayout />
      <Body>{props.children}</Body>
      <FooterLayout />
    </Wrapper>
  );
}
