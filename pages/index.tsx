import { useEffect } from "react";
import * as HS from "../styles/home.module";

export default function Home() {
  useEffect(() => {
    let ScrollObserver = new IntersectionObserver((e) => {
      console.log(e);
      e.forEach((item) => {
        if (item.isIntersecting) {
          item.target.style.opacity = 1;
          item.target.style.transform = "translate(0px, 0%)";
        } else {
          item.target.style.opacity = 0;
          item.target.style.transform = "translate(120px, 1%)";
        }
      });
    });
    const Target1 = document.getElementsByClassName("Ani1");
    const Target2 = document.getElementsByClassName("Ani2");

    ScrollObserver.observe(Target1[0]);
    ScrollObserver.observe(Target2[0]);
  });

  return (
    <HS.Wrapper>
      <HS.Top>
        <HS.BackGroundImage src="./Main.png"></HS.BackGroundImage>
        <HS.DownLoadBtn>DownLoad</HS.DownLoadBtn>
      </HS.Top>
      <HS.Middle>
        <HS.AnimationBox>
          <HS.Text className="Ani1">introduce Textintroduce Textintroduce Textintroduce Textintroduce Textintroduce Text</HS.Text>
          <HS.GifImage className="Ani2">Gif Image가 들어갈 곳 입니다.</HS.GifImage>
        </HS.AnimationBox>
      </HS.Middle>
    </HS.Wrapper>
  );
}
