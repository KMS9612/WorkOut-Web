import * as HS from "../styles/home.module";

export default function Home() {
  return (
    <HS.Wrapper>
      <HS.Top>
        <HS.TextBox>
          <HS.HeadText>오늘도 WorkOut!</HS.HeadText>
          <HS.SubText>
            당신만의 루틴을 만들고, 수행하고, 저장하고, 관리하세요!
          </HS.SubText>
          <HS.DownLoadBtn>
            <a href="/dist">다운로드</a>
          </HS.DownLoadBtn>
        </HS.TextBox>
      </HS.Top>
    </HS.Wrapper>
  );
}
