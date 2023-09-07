import React from "react";

function EmployContent() {
  return (
    <div className="EmployContentWrapper">
      <div className="EmployConditionBox">
        <h2>근무 조건</h2>
        <div className="WorkDateWrapper">
          <div className="WorkStartDateBox">
            <h3>근무 시작일</h3>
            <p>2023-11-10</p>
          </div>
          <div className="WorkFinishDateBox">
            <h3>근무 종료일</h3>
            <p>2023-12-10</p>
          </div>
        </div>
        <div className="WorkTime">
          <h3>근무시간</h3>
          <p>월급 2,600,000</p>
        </div>
        <div>
          <h3>상세 내용</h3>
          <div className="DetailContent">
            <p>서귀포에 작은 감귤 농장입니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployContent;
