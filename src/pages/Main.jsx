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
        // default 지도 위치 세팅
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;

              var mapContainer = document.getElementById("map"), // 지도를 표시할 div
                mapOption = {
                  center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표
                  level: 3, // 지도의 확대 레벨
                };

              var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

              var positions = [];

              businesses.forEach((business) => {
                positions.push({
                  title: business.address,
                  latlng: new kakao.maps.LatLng(
                    business.longitude,
                    business.latitude
                  ),
                });
              });

              // 마커 이미지의 이미지 주소입니다
              var imageSrc =
                "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

              for (var i = 0; i < positions.length; i++) {
                // 마커 이미지의 이미지 크기 입니다
                var imageSize = new kakao.maps.Size(24, 35);

                // 마커 이미지를 생성합니다
                var markerImage = new kakao.maps.MarkerImage(
                  imageSrc,
                  imageSize
                );

                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                  map: map, // 마커를 표시할 지도
                  position: positions[i].latlng, // 마커를 표시할 위치
                  title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                  image: markerImage, // 마커 이미지
                });
                marker.setMap(map);
              }
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
