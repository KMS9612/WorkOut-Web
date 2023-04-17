import { useEffect } from "react";
import * as HS from "../styles/home.module";
import Card from "@/component/card/card";

export default function Home() {
  useEffect(() => {
    let ScrollObserver = new IntersectionObserver((e) => {
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
  }, []);

  const CardObj = [
    {
      Title: "Hello",
      SubText: "World",
    },
    {
      Title: "안녕하세요",
      SubText: "World",
    },
    {
      Title: "Hello",
      SubText: "World",
    },
    {
      Title: "Hello",
      SubText: "World",
    },
  ];
  return (
    <HS.Wrapper>
      <HS.Top>
        <HS.HeadText>소개, 설명, 등의 타이포그래피가 들어갈 자리</HS.HeadText>
        <HS.CardBox>
          {CardObj?.map((e, index) => {
            return <Card key={index} Title={e.Title} SubText={e.SubText} />;
          })}
        </HS.CardBox>
      </HS.Top>
      <HS.Middle>
        <HS.AnimationBox>
          <HS.Text className="Ani1">아직도 운동루틴을 엑셀로 만들어서 수동으로 관리하시나요? 이젠 WorkOut으로 나만의 루틴을 만들어 실행해 보세요!</HS.Text>
          <HS.GifImage className="Ani2">Gif Image가 들어갈 곳 입니다.</HS.GifImage>
        </HS.AnimationBox>
      </HS.Middle>
    </HS.Wrapper>
  );
}
