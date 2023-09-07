import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import PreviewEmployBox from "../components/PreviewEmployBox";
import axios from "axios";

function Main() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    axios
      .get("https://user-app.krampoline.com/k77c33daa3a48a/business")
      .then((response) => {
        setBusinesses(response.data);
        console.log("Received data:", response.data);
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
      console.log("script loaded!!!");
      const kakao = window["kakao"];
      kakao.maps.load(() => {
        // 현재 위치 정보 가져오기
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;

              const mapContainer = document.getElementById("map");
              const options = {
                center: new kakao.maps.LatLng(latitude, longitude), // 현재 위치로 설정
                level: 3,
              };
              const map = new kakao.maps.Map(mapContainer, options);

              // 현재위치 마커 설정
              const markerPosition = new kakao.maps.LatLng(latitude, longitude);
              const marker = new kakao.maps.Marker({
                position: markerPosition,
              });
              marker.setMap(map);
            },
            (error) => {
              console.error("Error getting geolocation:", error);
            }
          );
        } else {
          console.error("Geolocation is not available.");
        }
      });
    });
  }, [businesses]);

  return (
    <MainWrapper>
      <div>
        <p> 단기 장기 </p>
        <button>구인하기</button>
        <p />
        <button>내가쓴글</button>
        <ul>
          {/* 받아온 정보 확인 */}
          {businesses.map((business) => (
            <li key={business.businessId}>
              <p>사업장명: {business.businessName}</p>
              <p>전화번호: {business.phoneNumber}</p>
              <p>사업 종류: {business.businessType}</p>
              <p>모집 상태: {business.recruitState}</p>
              <p>위도: {business.latitude}</p>
              <p>경도: {business.longitude}</p>
              <p>주소: {business.address}</p>
              <p>총 근무일수: {business.totalWorkDate}</p>
            </li>
          ))}
        </ul>

        {/* 지도자리  시작*/}
        <div className="App">
          <div
            id="map"
            className="map"
            style={{ width: "375px", height: "812px" }}
          ></div>
        </div>
        {/* 지도자리  끝*/}

        <PreviewEmployBox />
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
`;
