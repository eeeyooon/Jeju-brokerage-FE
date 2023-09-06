import React from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>메인 페이지</h1>
      <button onClick={() => navigate("/login")}>로그인 하기</button>
      <button onClick={() => navigate("/employ-write")}>
        구인 공고 글 작성{" "}
      </button>
      <button onClick={() => navigate("/employ-list")}>
        작성한 구인공고 목록 조회
      </button>
      <button onClick={() => navigate("/employ-detail")}>
        구인 공고 자세히보기
      </button>
    </div>
  );
}

export default Main;
