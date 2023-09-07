import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import PreviewEmployBox from "../components/PreviewEmployBox";

function Main() {
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

              // 마커 설정
              const markerPosition = new kakao.maps.LatLng(latitude, longitude);

              //   var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다
              //   imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
              //   imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

              //     // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
              //     var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
              //         markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

              const marker = new kakao.maps.Marker({
                position: markerPosition,
                // image: markerImage // 마커이미지 설정
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
  }, []);

  return (
    <MainWrapper>
      <div>
        <p> 단기 장기 </p>

        <button>구인하기</button>
        <p />
        <button>내가쓴글</button>

        {/* 지도자리  시작*/}
        <div className="App">
          <div
            id="map"
            className="map"
            style={{ width: "375px", height: "812px" }}
          ></div>
        </div>
        {/* 지도자리  끝*/}

        {/* 상세정보 모달창 */}
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
