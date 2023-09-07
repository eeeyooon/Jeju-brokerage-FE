import React from "react";
import PreviewEmployContent from "./PreviewEmployContent";

function PreviewEmployBox() {
  return (
    <div>
      <h1>지도에서 마커 클릭 시 간단하게 구인 공고 정보를 조회하는 카드</h1>
      <PreviewEmployContent />
      <div>
        <button>상세보기</button>
        <button>전화하기</button>
      </div>
    </div>
  );
}

export default PreviewEmployBox;
