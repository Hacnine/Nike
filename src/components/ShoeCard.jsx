import React from "react";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
      console.log(
        "bigShoeImage:",
        bigShoeImage,
        "imgURL.bigShoe:",
        imgURL.bigShoe
      );
    }
  };

  return (
    <div
      className={`border-2 rounded-xl
  ${
    bigShoeImage === imgURL.bigShoe ? "border-coral-red" : "border-transparent"
  } cursor-pointer
`}
      onClick={handleClick}
    >
      <div>
        <img src={imgURL.thumbnail} alt="" />
      </div>
    </div>
  );
};

export default ShoeCard;
