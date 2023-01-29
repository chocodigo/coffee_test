import { observer } from "mobx-react";
import React, { useEffect } from "react";
import MainStyle from "../styles/main";
import { shareBtnHandler } from "../pages/Main";
import useStores from "../stores/useStores";

const ShareIcon = observer(({ item }) => {
  const { capplStore } = useStores();
  useEffect(() => {
    window.Kakao.Share.createDefaultButton({
      container: "#kakaotalk-sharing-btn",
      objectType: "text",
      text:
        "바쁘다 바빠 카페라이프, 나는 어떤 유형일까?\n" +
        "지금 바로 확인해 보세요!",
      link: {
        webUrl: window.location.href,
        mobileWebUrl: window.location.href,
      },
    });
  }, []);

  // 공유 버튼 클릭
  const shareBtnHandler = (e, item) => {
    try {
      console.log("click");
      if (item.id === "link") {
        // 링크 복사 버튼
        navigator.clipboard.writeText(window.location.href).then((r) => {
          console.log("링크복사", window.location.href);

          alert("복사되었습니다.");
        });
      }
      // capplStore.countShareUserNumber(item.id);
    } catch (error) {
      console.log("공유 오류", error);
    }
  };

  return (
    <MainStyle.ShareIcon
      src={item.src}
      onClick={(e) => shareBtnHandler(e, item)}
      id={item.id === "kakao" ? "kakaotalk-sharing-btn" : item.id}
    />
  );
});

export default ShareIcon;
