import DaumPostCode from "react-daum-postcode";

const DaumPost = ({ handleAddressChange, setIsOpen }) => {
  // const [fullAddress, setFullAddress] = useState("");
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    const { addressType, bname, buildingName } = data;
    if (addressType === "R") {
      if (bname !== "") {
        extraAddress += bname;
      }
      if (buildingName !== "") {
        extraAddress += `${extraAddress !== "" && ", "}${buildingName}`;
      }
      fullAddress += `${extraAddress !== "" ? ` ${extraAddress}` : ""}`;
    }
    handleAddressChange(fullAddress);
    setIsOpen(false);
    //fullAddress -> 전체 주소반환
  };
  return <DaumPostCode onComplete={handleComplete} className="post-code" />;
};
export default DaumPost;
