import { useEffect, useState } from "react";
import * as HS from "../styles/home.module";

export default function Home() {
  const [isWin, setIsWin] = useState<Boolean>();

  useEffect(() => {
    const USER_OS = navigator.userAgent.toUpperCase();
    if (USER_OS.includes("MAC")) {
      setIsWin(false);
    } else if (USER_OS.includes("WIN")) {
      setIsWin(true);
    }
  }, []);

  // const handleDownload = () => {
  //   const FileUrl = isWin ? "/public/Download/workout.exe" : "/Download/workout.dmg";
  //   window.location.href = FileUrl;
  // };
  return (
    <HS.Wrapper>
      <HS.TextBox>
        <HS.Left>
          <HS.HeadText>오늘도 WorkOut!</HS.HeadText>
          <HS.DownLoadBtn>
            <a href="https://workoutwindow.s3.ap-northeast-2.amazonaws.com/workout.exe">{isWin ? "Window" : "MacOS"}다운로드</a>
          </HS.DownLoadBtn>
        </HS.Left>
        <HS.Right>
          <HS.SubText>
            당신만의 루틴을
            <br />
            만들고
            <br />
            수행하고
            <br />
            기록하세요
          </HS.SubText>
        </HS.Right>
      </HS.TextBox>
    </HS.Wrapper>
  );
}
