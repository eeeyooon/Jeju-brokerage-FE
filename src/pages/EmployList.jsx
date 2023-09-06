import React from "react";
import { useNavigate } from "react-router-dom";

function EmployList() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>작성한 구인공고 목록 페이지</h1>
      <button onClick={() => navigate("/employ-detail")}>
        구인공고 자세히 보기
      </button>
    </div>
  );
}

export default EmployList;
