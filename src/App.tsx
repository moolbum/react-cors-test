import React, { useEffect } from "react";
const { kakao, naver }: any = window;

function App() {
  // useEffect(() => {
  //   const container = document.getElementById("kakaoMap");
  //   const options = {
  //     center: new kakao.maps.LatLng(33.450701, 126.570667),
  //     level: 3,
  //   };
  //   const map = new kakao.maps.Map(container, options);
  // }, []);

  useEffect(() => {
    const container = document.getElementById("naverMap");
    const mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
    };

    const map = new naver.maps.Map(container, mapOptions);
  }, []);

  useEffect(() => {
    naver.maps.Service.geocode(
      { query: "불정로 6" },
      function (status: any, response: any) {
        if (status !== naver.maps.Service.Status.OK) {
          return alert("Something wrong!");
        }

        var result = response.v2,
          items = result.addresses;
      }
    );
  }, []);

  return (
    <main style={{ display: "flex" }}>
      {/* <article>
        <h1>카카오 지도</h1>
        <div
          id="kakaoMap"
          style={{
            width: "500px",
            height: "500px",
          }}
        ></div>
      </article> */}

      <article>
        <h1>네이버 지도</h1>
        <div
          id="naverMap"
          style={{
            width: "500px",
            height: "500px",
          }}
        ></div>
      </article>
    </main>
  );
}

export default App;
