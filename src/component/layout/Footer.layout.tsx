import * as FS from "../../../styles/layout/Footer.style";

export default function FooterLayout() {
  return (
    <FS.Wrapper>
      <FS.ContactBox>
        <FS.Contact>GitHub: </FS.Contact>
        <FS.InnerText href="https://github.com/KMS9612" target={"_blank"}>
          KMS9612
        </FS.InnerText>
      </FS.ContactBox>
      <FS.ContactBox>
        <FS.Contact>Email: </FS.Contact>
        <FS.InnerText href="https://mail.google.com/" target={"_blank"}>
          kimdev9612@gmail.com
        </FS.InnerText>
      </FS.ContactBox>
    </FS.Wrapper>
  );
}
