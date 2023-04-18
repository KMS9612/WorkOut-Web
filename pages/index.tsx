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
      Title: "#오운완",
      SubText: "오늘 진행한 루틴을 저장해봐요!",
    },
    {
      Title: "#프로 루틴러",
      SubText: "오늘은 어떤 루틴을 만들어볼까?",
    },
    {
      Title: "#계획충",
      SubText: "어떤 루틴을 얼마나 진행했지?",
    },
    {
      Title: "#헬창",
      SubText: "사레레 그렇게 하는거 아닌데...",
    },
  ];
  return (
    <HS.Wrapper>
      <HS.Top>
        <HS.TextBox>
          <HS.HeadText>오늘도 WorkOut! 해볼까?</HS.HeadText>
          <HS.SubText>당신만의 루틴을 만들고, 수행하고, 저장하고, 관리하세요!</HS.SubText>
        </HS.TextBox>
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
