import React, { useState, useEffect } from "react";
import axios from "axios";

//business id를 받아와서 porps 처리하기
function PreviewEmployContent({ businessId }) {
  const [business, setBusinesse] = useState();

  // useEffect(() => {
  //   const response = axios
  //     .get(
  //       `https://user-app.krampoline.com/k77c33daa3a48a/business/${businessId}`
  //     )
  //     .then((response) => {
  //       setBusinesse(response.data);

  //       console.log(business);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [businessId]);

  return (
    <div>
      {/* <div>
        <h1>{business.businessName}</h1>
        <p>{business.userId}</p>
        <p>{business.address}</p>
        <div>한달이상{business.totalWorkDate}</div>
      </div>
      <div>
        <div>{business.businessType}</div>
      </div> */}
    </div>
  );
}

export default PreviewEmployContent;
