import { useEffect, useState } from "react";
import * as HS from "../styles/home.module";

export default function Home() {
  const [isWin, setIsWin] = useState<Boolean>();
  const WINDOW_VERSION_HREF = "https://workoutwindow.s3.ap-northeast-2.amazonaws.com/WorkOut+Setup+1.0.0.exe";
  const MAC_VERSION_HREF = "https://workoutwindow.s3.ap-northeast-2.amazonaws.com/workout.dmg";

  useEffect(() => {
    const USER_OS = navigator.userAgent.toUpperCase();
    if (USER_OS.includes("MAC")) {
      setIsWin(false);
    } else if (USER_OS.includes("WIN")) {
      setIsWin(true);
    }
  }, []);

  return (
    <HS.Wrapper>
      <HS.TextBox>
        <HS.Left>
          <HS.HeadText>오늘도 WorkOut!</HS.HeadText>
          <HS.DownLoadBtn>
            <a href={isWin ? WINDOW_VERSION_HREF : MAC_VERSION_HREF}>{isWin ? "Window" : "MacOS"}다운로드</a>
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
