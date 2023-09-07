import React from "react";

import { Img, Line, List, Text } from "components";

const DivsectionPage = () => {
  return (
    <>
      <div className="bg-gradient2  flex flex-col font-inter items-start justify-center mx-auto md:px-10 sm:px-5 px-[610px] py-[120px] w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[111px] items-center justify-start pt-[59px] w-full">
          <Text
            className="sm:text-[43px] md:text-[49px] text-[57px] text-black-900 text-center tracking-[2.00px]"
            size="txtInterThin57"
          >
            Knowing Our Lord Jesus
          </Text>
          <List
            className="flex flex-col font-roboto gap-[0.5px] items-center w-full"
            orientation="vertical"
          >
            <div className="border-b border-black-900_e8 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly py-[31px] w-full">
              <div className="flex flex-1 flex-col items-start justify-start max-w-[684px] mb-0.5 md:pr-10 sm:pr-5 pr-[570px] w-full">
                <Text
                  className="text-[22px] text-gray-900_01 sm:text-lg md:text-xl w-auto"
                  size="txtRobotoRegular22"
                >
                  Who is Jesus?
                </Text>
              </div>
              <Img
                className="h-3.5 w-4"
                src="images/img_arrowright_black_900_14x16.svg"
                alt="arrowright"
              />
            </div>
            <Line className="self-center h-px bg-black-900 w-full" />
            <div className="border-b border-black-900_d6 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly py-[31px] w-full">
              <div className="flex flex-1 flex-col items-start justify-start max-w-[684px] mb-0.5 md:pr-10 sm:pr-5 pr-[441px] w-full">
                <Text
                  className="text-[22px] text-gray-900_01 sm:text-lg md:text-xl w-auto"
                  size="txtRobotoRegular22"
                >
                  How do I Pray?
                </Text>
              </div>
              <Img
                className="h-3.5 w-4"
                src="images/img_arrowright_black_900_14x16.svg"
                alt="arrowright"
              />
            </div>
            <Line className="self-center h-px bg-black-900 w-full" />
            <div className="border-b border-black-900 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly py-[31px] w-full">
              <div className="flex flex-1 flex-col items-start justify-start max-w-[684px] mb-0.5 md:pr-10 sm:pr-5 pr-[427px] w-full">
                <Text
                  className="text-[22px] text-gray-900_01 sm:text-lg md:text-xl w-auto"
                  size="txtRobotoRegular22"
                >
                  How do I receive Healing?
                </Text>
              </div>
              <Img
                className="h-3.5 w-4"
                src="images/img_arrowright_black_900_14x16.svg"
                alt="arrowright"
              />
            </div>
            <Line className="self-center h-px bg-black-900 w-full" />
            <div className="border-b border-black-900 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly py-[31px] w-full">
              <div className="flex flex-1 flex-col items-start justify-start max-w-[684px] mb-0.5 md:pr-10 sm:pr-5 pr-[339px] w-full">
                <Text
                  className="text-[22px] text-gray-900_01 sm:text-lg md:text-xl w-auto"
                  size="txtRobotoRegular22"
                >
                  What is God’s purpose for me?
                </Text>
              </div>
              <Img
                className="h-3.5 w-4"
                src="images/img_arrowright_black_900_14x16.svg"
                alt="arrowright"
              />
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default DivsectionPage;
