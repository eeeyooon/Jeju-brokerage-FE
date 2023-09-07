import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import PreviewEmployBox from "../components/PreviewEmployBox";
import axios from "axios";

function Main() {
  const [businesses, setBusinesses] = useState([]);
  const [clickedBusiness, setClickedBusiness] = useState();
  const [isOpenModal, setIsOpenModal] = useState(false);

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
          const marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(
              business.longitude,
              business.latitude
            ),
            title: business.businessName,
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
    console.log(clickedBusiness);

    if (clickedBusiness) {
      setIsOpenModal(true);
    }

    setClickedBusiness(clickedBusiness);

    // detail component로 이동
  }, [clickedBusiness]);
  return (
    <MainWrapper>
      {isOpenModal && (
        <CloseModalBg
          onClick={() => {
            setIsOpenModal(false);
          }}
        />
      )}
      <div>
        <MainPageContentWrapper>
          <ServiceTitle>일 있수꽝</ServiceTitle>
          <p> 단기 장기 </p>
          <button>구인하기</button>
          <p />
          <button>내가쓴글</button>
        </MainPageContentWrapper>
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
            <PreviewEmployBox clickedBusiness={clickedBusiness} />
          </PreviewModal>
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

const ServiceTitle = styled.h1``;

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

const CloseModalBg = styled.div`
  height: 563px;
  width: 375px;
  opacity: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  transform: translate(0, 0);
`;
