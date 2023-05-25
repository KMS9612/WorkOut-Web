import { useEffect, useState } from "react";
import * as TS from "../../../styles/common/text/typingAnimation.style";

interface IPropsTypingAnimation {
  text: string;
}

export default function TypingAnimation(props: IPropsTypingAnimation) {
  const [animationText, setAnimationText] = useState<string>("");

  useEffect(() => {
    let currentIndex = 0;
    console.log("working");
    const typingInterval = setInterval(() => {
      if (currentIndex >= props.text.length) {
        clearInterval(typingInterval);
      } else {
        setAnimationText((prevText) => prevText + props.text[currentIndex]);
        currentIndex++;
      }
    }, 100);
  }, [props.text]);

  return <TS.TypingAnimation>{animationText.slice(0, props.text.length)}</TS.TypingAnimation>;
}
