import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import PreviewEmployBox from "../components/PreviewEmployBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CallModal from "./../components/CallModal";

function Main() {
  const [businesses, setBusinesses] = useState([]);
  const [clickedBusiness, setClickedBusiness] = useState();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isEmployer, setIsEmployer] = useState(
    localStorage.getItem("userType") === "구인자" ? true : false
  );
  const [openCallModal, setOpenCallModal] = useState(false);

  const navigate = useNavigate();

  const handleModal = (modalState) => {
    setOpenCallModal(modalState);
  };

  useEffect(() => {
    axios
      .get("https://user-app.krampoline.com/k77c33daa3a48a/business")
      .then((response) => {
        setBusinesses(response.data);
      });
  }, []);

  const new_script = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.addEventListener("load", () => {
        resolve();
      });
      script.addEventListener("error", (e) => {
        reject(e);
      });
      document.head.appendChild(script);
    });
  };

  const handleTotalWork = (day) => {
    if (day <= 7) {
      return process.env.PUBLIC_URL + "/assets/oneweek_Ping.svg";
    } else if (day > 7 && day <= 14) {
      return process.env.PUBLIC_URL + "/assets/twoweek_Ping.svg";
    } else if (day > 14 && day <= 31) {
      return process.env.PUBLIC_URL + "/assets/undermonth_Ping.svg";
    } else {
      return process.env.PUBLIC_URL + "/assets/overmonth_Ping.svg";
    }
  };

  useEffect(() => {
    // 카카오맵 스크립트 읽어오기
    const my_script = new_script(
      "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=7d977bbb023eb44bf6f671574518ac82"
    );

    // 스크립트 읽기 완료 후 카카오맵 설정
    my_script.then(() => {
      const kakao = window["kakao"];
      kakao.maps.load(() => {
        let container = document.getElementById("map");

        let options = {
          // 제주 플레이스로 default 등록
          center: new kakao.maps.LatLng(33.449616273392, 126.91802537036),
          level: 5,
        };

        const map = new kakao.maps.Map(container, options);
        businesses.forEach((business) => {
          const imageSrc = handleTotalWork(business.totalWorkDate);
          const imageSize = new kakao.maps.Size(50, 60); // 마커이미지의 크기입니다
          const imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

          // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
          var markerImage = new kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption
          );

          const marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(
              business.longitude,
              business.latitude
            ),
            title: business.businessName,
            image: markerImage,
            clickable: true,
          });

          // 마커에 클릭이벤트를 등록합니다
          kakao.maps.event.addListener(marker, "click", function () {
            setClickedBusiness({
              businessId: business.businessId,
              businessName: business.businessName,
              address: business.address,
              businessType: business.businessType,
              totalWorkDate: business.totalWorkDate,
            });
          });
        });
      });
    });
  }, [businesses]);

  useEffect(() => {
    if (clickedBusiness) {
      setIsOpenModal(true);
    }

    setClickedBusiness(clickedBusiness);

    // detail component로 이동
  }, [clickedBusiness]);
  return (
    <MainWrapper>
      {openCallModal && (
        <ModalBackground onClick={() => setOpenCallModal(false)} />
      )}
      {isOpenModal && (
        <ClosePreviewModal
          onClick={() => {
            setIsOpenModal(false);
          }}
        />
      )}
      <div>
        <MainPageContentWrapper>
          <ServiceTitle>
            <img
              alt="서비스 로고"
              src={process.env.PUBLIC_URL + "/assets/mainpage_logo.svg"}
            />
          </ServiceTitle>
          <MarkInfoBackground>
            <MarkInfoWrapper>
              <MarkInfo>
                <img
                  alt="1주 이하"
                  src={process.env.PUBLIC_URL + "/assets/oneweek_circle.svg"}
                />
                <span>1주 이하</span>
              </MarkInfo>
              <MarkInfo>
                <img
                  alt="2주 이하"
                  src={process.env.PUBLIC_URL + "/assets/twoweek_circle.svg"}
                />
                <span>1~2주</span>
              </MarkInfo>
              <MarkInfo>
                <img
                  alt="한달 이내"
                  src={
                    process.env.PUBLIC_URL + "/assets/under_month_circle.svg"
                  }
                />
                <span>2주~한달</span>
              </MarkInfo>
              <MarkInfo>
                <img
                  alt="한달 이상"
                  src={process.env.PUBLIC_URL + "/assets/over_month_circle.svg"}
                />
                <span>한달 이상</span>
              </MarkInfo>
            </MarkInfoWrapper>
          </MarkInfoBackground>
        </MainPageContentWrapper>
        <BtnWrapper>
          <MainPageBtn
            onClick={() => {
              navigate("/employ-write");
            }}
          >
            구인하기
          </MainPageBtn>
          {isEmployer && (
            <MainPageBtn
              disabled={!isEmployer}
              onClick={() => {
                navigate("/employ-list");
              }}
            >
              내가쓴글
            </MainPageBtn>
          )}
        </BtnWrapper>
        {/* 지도자리  시작*/}
        <div className="App">
          <div
            id="map"
            className="map"
            style={{ width: "375px", height: "812px" }}
          ></div>
        </div>
        {/* 지도자리  끝*/}
        {isOpenModal && (
          <PreviewModal>
            <PreviewEmployBox
              handleModal={handleModal}
              clickedBusiness={clickedBusiness}
            />
          </PreviewModal>
        )}
        {openCallModal && (
          <CallModalWrapper>
            <CallModal handleModal={handleModal} />
          </CallModalWrapper>
        )}
      </div>
    </MainWrapper>
  );
}

export default Main;

const MainWrapper = styled.div`
  width: 375px;
  height: 812px;
  background-color: ${({ theme }) => theme.color.white};
  user-select: none;
  position: relative;
`;

const MainPageContentWrapper = styled.div`
  position: absolute;
  z-index: 10;
`;

const ServiceTitle = styled.div`
  width: 375px;
  height: 52px;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

const PreviewModal = styled.div`
  padding-top: 20px;
  width: 375px;
  height: 229px;
  background-color: ${({ theme }) => theme.color.white};
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  transform: translate(0, 0);
`;

const ClosePreviewModal = styled.div`
  height: 563px;
  width: 375px;
  opacity: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  transform: translate(0, 0);
`;

// const CloseCallModal = styled.div`
//   height: 563px;
//   width: 375px;
//   opacity: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 50;
//   transform: translate(0, 0);
// `;

const MarkInfoBackground = styled.div`
  width: 375px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
const MarkInfoWrapper = styled.div`
  width: 290px;
  height: 33px;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  font-size: ${({ theme }) => theme.fontSize.caption2};
`;
const MarkInfo = styled.div``;

const BtnWrapper = styled.div`
  position: absolute;
  top: 13%;
  right: 5%;
  z-index: 10;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: 80px;
`;

const MainPageBtn = styled.button`
  height: 36px;
  padding: 8px 19px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.primary_normal};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.caption1};
`;

const ModalBackground = styled.div`
  background-color: #a8a8a8;
  position: fixed;
  height: inherit;
  opacity: 0.65;
  width: 375px;
  z-index: 100;
`;

const CallModalWrapper = styled.div`
  padding-top: 20px;
  width: 375px;
  height: 229px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
