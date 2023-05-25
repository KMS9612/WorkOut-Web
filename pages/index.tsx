import { useEffect, useState } from "react";
import * as HS from "../styles/home.module";
import TypingAnimation from "@/common/text/typingAnimation";

export default function Home() {
  const [isWin, setIsWin] = useState<Boolean>();

  useEffect(() => {
    const USER_OS = navigator.userAgent.toUpperCase();
    if (USER_OS.includes("MAC")) {
      setIsWin(false);
    } else if (USER_OS.includes("WIN")) {
      setIsWin(true);
    }
  });

  const handleDownload = () => {
    const FileUrl = isWin ? "/Download/WorkOutSetup1.0.0.exe" : "/Donwload/WorkOut-1.0.0-arm64.dmg";
    window.location.href = FileUrl;
  };
  return (
    <HS.Wrapper>
      <HS.TextBox>
        <div>
          <HS.HeadText>오늘도 WorkOut!</HS.HeadText>
          <HS.DownLoadBtn onClick={handleDownload}>{isWin ? "Window" : "Mac"}다운로드</HS.DownLoadBtn>
        </div>
        <HS.SubText>
          당신만의 루틴을
          <br />
          만들고
          <br />
          수행하고
          <br />
          기록하세요
          <br />
        </HS.SubText>
      </HS.TextBox>
    </HS.Wrapper>
  );
}
