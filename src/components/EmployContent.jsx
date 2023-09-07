import React from "react";
import { styled } from "styled-components";

function EmployContent() {
  return (
    <EmployContentWrapper>
      <EmployConditionWrapper>
        <h2>근무 조건</h2>
        <WorkDateWrapper>
          <WorkDateBox>
            <SubTitleWrapper>
              <img
                alt="달력 아이콘"
                src={process.env.PUBLIC_URL + "/assets/calendar.svg"}
              />
              <h3>근무 시작일</h3>
            </SubTitleWrapper>
            <p>2023-11-10</p>
          </WorkDateBox>
          <WorkDateBox>
            <SubTitleWrapper>
              <img
                alt="달력 아이콘"
                src={process.env.PUBLIC_URL + "/assets/calendar.svg"}
              />
              <h3>근무 종료일</h3>
            </SubTitleWrapper>
            <p>2023-12-10</p>
          </WorkDateBox>
        </WorkDateWrapper>
        <WorkTimeWrapper>
          <SubTitleWrapper>
            <img
              alt="시계 아이콘"
              src={process.env.PUBLIC_URL + "/assets/time.svg"}
            />
            <h3>근무 시간</h3>
          </SubTitleWrapper>
          <p>09:00 ~ 18:00</p>
        </WorkTimeWrapper>
      </EmployConditionWrapper>
      <SalaryWrapper>
        <h2>급여 조건</h2>
        <SalaryText>
          월급 <span>2,600,000원</span>
        </SalaryText>
      </SalaryWrapper>
      <DetailContentWrapper>
        <h2>상세 내용</h2>
        <DetailContent>
          서귀포에 작은 감귤 농장입니다. 성별무관하고 힘쎈 사람 구합니다. 중식,
          석식 제공하고 숙박은 제공하지 않습니다. 서귀포에 작은 감귤 농장입니다.
        </DetailContent>
      </DetailContentWrapper>
    </EmployContentWrapper>
  );
}

export default EmployContent;

const EmployContentWrapper = styled.div`
  width: 335px;
  height: 415px;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;

  h2 {
    font-size: ${({ theme }) => theme.fontSize.body2};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.color.grayscale_1C};
    margin-bottom: 16px;
  }
`;

const EmployConditionWrapper = styled.div`
  width: 335px;
  height: 146px;
  margin-bottom: 32px;
`;

const SubTitleWrapper = styled.div`
  width: 85px;
  height: 20px;
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.caption1};
  color: ${({ theme }) => theme.color.grayscale_66};
  align-items: center;
  margin-bottom: 4px;

  img {
    width: 16px;
    height: 16px;
  }

  h3 {
    margin-left: 5px;
  }
`;

const WorkDateWrapper = styled.div`
  width: 335px;
  height: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WorkDateBox = styled.div`
  width: 164px;
  height: 46px;
`;

const WorkTimeWrapper = styled.div`
  width: 335px;
  height: 46px;
  margin-top: 16px;
`;

const DetailContentWrapper = styled.div`
  width: 335px;
  height: 150px;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SalaryWrapper = styled.div`
  width: 335px;
  height: 63px;
  margin-bottom: 32px;
`;

const SalaryText = styled.p`
  width: 164px;
  height: 25px;
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: ${({ theme }) => theme.color.grayscale_1C};

  > span {
    color: #f54545;
    font-size: ${({ theme }) => theme.fontSize.body1};
  }
`;

const DetailContent = styled.p`
  color: ${({ theme }) => theme.color.grayscale_1C};
  font-size: ${({ theme }) => theme.fontSize.caption1};
  line-height: 150%;
`;
