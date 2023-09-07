import React from "react";

import { Img, Text } from "components";

const FrameDivsection = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[990px] m-auto object-cover w-full"
          src="images/img_webgradientbg.png"
          alt="webgradientbg"
        />
        <div className="absolute flex flex-col md:gap-10 gap-[79px] h-max inset-[0] items-center justify-center m-auto w-[92%]">
          <Text
            className="md:text-5xl text-[110px] text-white-A700"
            size="txtMontserratRomanExtraBold110"
          >
            {props?.username}
          </Text>
          <div className="flex flex-col items-center justify-start shadow-bs w-full">
            <div className="flex flex-col gap-[46px] items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Img
                  className="h-[500px] md:h-auto object-cover rounded-[40px]"
                  src="images/img_01followingthe.png"
                  alt="01followingthe"
                />
                <Img
                  className="h-[500px] md:h-auto object-cover rounded-[40px]"
                  src="images/img_08.png"
                  alt="Eight"
                />
                <Img
                  className="h-[500px] md:h-auto object-cover rounded-[40px]"
                  src="images/img_02.png"
                  alt="Two"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[79%] md:w-full">
                <Img
                  className="h-16"
                  src="images/img_group6.svg"
                  alt="groupSix"
                />
                <Img
                  className="h-16 md:ml-[0] ml-[448px]"
                  src="images/img_group6.svg"
                  alt="groupSeven"
                />
                <Img
                  className="h-16 md:ml-[0] ml-[477px]"
                  src="images/img_group6.svg"
                  alt="groupEight"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FrameDivsection.defaultProps = {};

export default FrameDivsection;
