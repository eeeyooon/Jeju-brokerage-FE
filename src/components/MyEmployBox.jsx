import React from "react";
import SmallButton from "./SmallButton";
import SmallButton_light from "./SmallButton_light";

function MyEmployBox() {
  return (
    <div>
      <h1>귤 나와라 뚝딱</h1>
      <div className="BoxContent">
        <p>김복자</p>
        <p>제주 서귀포시 성산읍 동류앙로 38(성산읍 고성리) 38-1번길 301호</p>
      </div>
      <div>농업</div>
      <div className="BtnWrapper">
        <p>현재 구인중이에요</p>
        <SmallButton_light text="구인마감" />
      </div>
    </div>
  );
}
export default MyEmployBox;
