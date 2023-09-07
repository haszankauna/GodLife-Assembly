import React from "react";

import { Button, Img, List, Text } from "components";
import FrameDivsection from "components/FrameDivsection";

const FramePage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-roboto items-start justify-end mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="sm:h-[108px] h-[109px] md:h-[516px] md:px-5 relative w-full">
            <div className="absolute bg-black-900 flex flex-col inset-x-[0] items-center justify-start mx-auto pb-3 px-3 shadow-bs1 top-[0] w-full">
              <div className="flex flex-col items-center justify-start w-[74%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:pl-10 sm:pl-5 pl-[91px] w-full">
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-end justify-between w-4/5 md:w-full">
                    <div className="bg-black-900 flex md:flex-col flex-row md:gap-5 items-center justify-start md:pr-10 sm:pr-5 pr-[70px]">
                      <div className="flex flex-row gap-[9px] items-start justify-center p-2.5 w-[18%] md:w-full">
                        <div className="flex flex-col items-start justify-start mb-2.5 ml-[9px] pb-[5px] w-auto">
                          <Text
                            className="text-base text-white-A700 tracking-[0.40px] w-auto"
                            size="txtRobotoRegular16"
                          >
                            Church
                          </Text>
                        </div>
                        <Img
                          className="h-4 mr-[9px] mt-0.5 w-3"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown"
                        />
                      </div>
                      <div className="flex flex-row gap-2.5 items-start justify-center p-2.5 w-[24%] md:w-full">
                        <div className="flex flex-col items-start justify-start mb-2.5 ml-[9px] pb-[5px] pr-[0.34px] w-auto">
                          <Text
                            className="text-base text-white-A700 tracking-[0.40px] w-auto"
                            size="txtRobotoRegular16"
                          >
                            Get Involved
                          </Text>
                        </div>
                        <Img
                          className="h-4 mr-[9px] mt-0.5 w-3"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown_One"
                        />
                      </div>
                      <div className="flex flex-row gap-[9px] items-start justify-center p-2.5 w-[18%] md:w-full">
                        <div className="flex flex-col items-start justify-start mb-2.5 ml-[9px] pb-[5px] w-auto">
                          <Text
                            className="text-base text-white-A700 tracking-[0.40px] w-auto"
                            size="txtRobotoRegular16"
                          >
                            Events
                          </Text>
                        </div>
                        <Img
                          className="h-4 mr-[9px] mt-0.5 w-3"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown_Two"
                        />
                      </div>
                      <div className="flex flex-row gap-[9px] items-start justify-center p-2.5 w-[19%] md:w-full">
                        <div className="flex flex-col h-[23px] md:h-auto items-start justify-start mb-2.5 ml-[9px] pb-[5px] w-auto">
                          <Text
                            className="text-base text-white-A700 tracking-[0.40px] w-auto"
                            size="txtRobotoRegular16"
                          >
                            Schools
                          </Text>
                        </div>
                        <Img
                          className="h-4 mr-[9px] mt-0.5 w-3"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown_Three"
                        />
                      </div>
                      <div className="flex flex-row gap-[11px] items-start justify-center p-3 w-[22%] md:w-full">
                        <div className="flex flex-col items-start justify-start mb-2 ml-2 pb-[5px] w-auto">
                          <a
                            href="https://www.figma.com/file/97f8g6t0R2fEew3eT4Zx4z?type=design&node-id=39-1640&mode=design"
                            className="text-base text-white-A700 tracking-[0.40px] underline w-auto"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Text>Messages</Text>
                          </a>
                        </div>
                        <Img
                          className="h-4 mr-2 w-3"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown_Four"
                        />
                      </div>
                    </div>
                    <Text
                      className="bg-blue_gray-100 h-[46px] justify-center mb-[3px] md:mt-0 mt-1.5 sm:px-5 px-[35px] py-[13px] rounded-[23px] text-base text-black-900 w-[154px]"
                      size="txtRobotoRegular16Black900"
                    >
                      Give
                    </Text>
                  </div>
                  <Img
                    className="h-5 md:mt-0 mt-[11px] w-5"
                    src="images/img_search.svg"
                    alt="search"
                  />
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[108px] inset-y-[0] left-[2%] my-auto object-cover w-[6%]"
              src="images/img_glalogowhite1.png"
              alt="glalogowhiteOne"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start ml-36 md:ml-[0] mt-[194px] pb-[169px] md:px-5 w-[44%] md:w-full">
          <div className="flex flex-col font-inter items-start justify-start max-w-[799px] pr-[15px] w-full">
            <Text
              className="leading-[96.00px] md:text-5xl text-[69px] text-white-A700 uppercase"
              size="txtInterRegular69"
            >
              <>
                The Godlife
                <br />
                Assembly Zaria
              </>
            </Text>
          </div>
          <Text
            className="mt-[22px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
            size="txtRobotoRegular36"
          >
            Word , Worship and Love
          </Text>
          <div className="flex sm:flex-col flex-row font-roboto gap-6 items-start justify-start max-w-[799px] ml-2 md:ml-[0] mt-[39px] pb-4 md:pr-10 sm:pr-5 pr-[257.14px] w-full">
            <div className="border border-red-300 border-solid flex flex-row gap-[41px] items-start justify-center sm:px-5 px-7 py-[17px] rounded-[26px] w-auto">
              <Text
                className="text-base text-white-A700_e5 w-auto"
                size="txtRobotoRegular16WhiteA700e5"
              >
                Join in Person
              </Text>
              <Img
                className="h-4 w-3.5"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[173px] rounded-[26px]"
              rightIcon={
                <Img
                  className="mt-[3px] mb-0.5"
                  src="images/img_arrowright_gray_900.svg"
                  alt="arrow_right"
                />
              }
              color="white_A700"
            >
              <div className="text-left text-lg">Join Online</div>
            </Button>
          </div>
        </div>
        <div className="flex flex-col font-montserrat items-center mt-[216px] w-full">
          <div className="h-[2108px] md:h-[2251px] sm:h-[2728px] md:px-5 relative w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-white-A700 flex flex-col items-end justify-start pt-14 md:px-10 px-14 sm:px-5 w-full">
                  <div className="flex md:flex-col flex-row gap-8 items-start justify-end mt-[39px] w-[95%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[37%] md:w-full">
                      <div className="flex flex-col gap-[23px] justify-start w-full">
                        <div className="flex sm:flex-col flex-row gap-7 items-end justify-between w-full">
                          <Img
                            className="h-[380px] md:h-auto object-cover rounded-[40px]"
                            src="images/img_img86921.png"
                            alt="img86921"
                          />
                          <Img
                            className="h-[302px] md:h-auto sm:mt-0 mt-[77px] object-cover rounded-[45px]"
                            src="images/img_pastorsteve1.png"
                            alt="pastorsteveOne"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row gap-6 items-start justify-start md:ml-[0] ml-[23px] w-[87%] md:w-full">
                          <Img
                            className="h-[259px] md:h-auto object-cover rounded-[30px] w-[41%] sm:w-full"
                            src="images/img_img002911.png"
                            alt="img002911"
                          />
                          <Img
                            className="h-[325px] md:h-auto object-cover rounded-[45px] w-[55%] sm:w-full"
                            src="images/img_picture1.png"
                            alt="pictureOne"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start md:mt-0 mt-[122px] w-[62%] md:w-full">
                      <Text
                        className="leading-[68.00px] text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                        size="txtPoppinsMedium48"
                      >
                        <>
                          The God-Life Assembly Zaria is a people <br />
                          rooted in God and committed to bringing <br />
                          His Kingdom to the nations.
                        </>
                      </Text>
                      <Text
                        className="leading-[50.00px] mt-2.5 text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[1.00px] w-[91%] sm:w-full"
                        size="txtInterLight24"
                      >
                        Raising a pure breed of believers, a kingdom minded
                        people divergent in assignments, roles and functions
                        according to the distribution of grace.
                      </Text>
                      <div className="flex sm:flex-col flex-row font-roboto gap-[47px] items-center justify-start mt-[39px] w-[42%] md:w-full">
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[178px]"
                          rightIcon={
                            <Img
                              className="ml-[13px] my-px"
                              src="images/img_arrowright.svg"
                              alt="arrow_right"
                            />
                          }
                          shape="round"
                        >
                          <div className="text-base text-left">Church News</div>
                        </Button>
                        <Button
                          className="cursor-pointer flex h-[53px] items-center justify-center w-[197px]"
                          rightIcon={
                            <Img
                              className="ml-[13px] my-px"
                              src="images/img_arrowright_black_900.svg"
                              alt="arrow_right"
                            />
                          }
                          shape="round"
                          color="deep_orange_A200"
                          variant="outline"
                        >
                          <div className="text-base text-left">
                            Event Calendar
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <FrameDivsection className="bg-white-A700 h-[1284px] sm:h-[1904px] md:h-[990px] py-32 relative w-full" />
              </div>
            </div>
            <Img
              className="absolute h-[890px] inset-x-[0] mx-auto object-cover top-[0] w-full"
              src="images/img_image1.png"
              alt="imageOne"
            />
          </div>
          <div className="h-[1621px] md:h-[926px] md:px-5 relative w-full">
            <div className="absolute h-[926px] inset-x-[0] mx-auto top-[0] w-full">
              <Img
                className="h-[926px] m-auto object-cover w-full"
                src="images/img_img986911.png"
                alt="img986911"
              />
              <div className="absolute bg-gradient  md:h-[271px] h-[926px] inset-[0] justify-center m-auto p-[183px] md:px-10 sm:px-5 w-full">
                <div className="absolute font-montserrat md:h-[135px] h-[189px] left-[20%] top-[23%] w-[26%] sm:w-full">
                  <Text
                    className="absolute left-[0] md:text-5xl text-7xl text-white-A700 top-[0]"
                    size="txtMontserratRomanBold72"
                  >
                    SCHOOL OF{" "}
                  </Text>
                  <div className="absolute bottom-[0] h-[135px] inset-x-[0] mx-auto w-full">
                    <Text
                      className="m-auto md:text-5xl text-[110px] text-white-A700"
                      size="txtMontserratRomanExtraBold110"
                    >
                      PRAYER
                    </Text>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto md:text-5xl text-[110px] text-white-A700 w-max"
                      size="txtMontserratRomanExtraBold110"
                    >
                      PRAYER
                    </Text>
                  </div>
                </div>
                <Text
                  className="absolute bottom-[32%] leading-[46.00px] left-[20%] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                  size="txtPoppinsRegular36"
                >
                  <>
                    School of Prayer is a Monthly Prayer School that holds every
                    second Saturday of each month. <br />
                    We gather to enquire about the plans of God for his people
                    and abide by his precepts.{" "}
                  </>
                </Text>
              </div>
            </div>
            <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-10 sm:px-5 w-full">
              <Img
                className="h-[443px] md:h-auto mb-[106px] mt-[69px] object-cover w-full"
                src="images/img_glazpartnerwith.png"
                alt="glazpartnerwith"
              />
            </div>
          </div>
          <div className="bg-gradient1  flex flex-col font-roboto h-[594px] md:h-auto items-start justify-center max-w-[1865px] mt-[854px] md:px-10 sm:px-5 px-[410px] py-[120px] w-full">
            <div className="h-[594px] relative w-full">
              <Img
                className="h-[594px] m-auto object-cover w-full"
                src="images/img_img996121.png"
                alt="img996121"
              />
              <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[20%] w-[59%]">
                <Text
                  className="text-base text-white-A700 tracking-[2.00px] uppercase"
                  size="txtRobotoRegular16"
                >
                  Email Newsletter
                </Text>
                <Text
                  className="mt-[25px] md:text-5xl sm:text-[42px] text-[56px] text-white-A700"
                  size="txtRobotoRegular56"
                >
                  Stay Connected
                </Text>
                <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1100px] mt-[53px] pr-[0.02px] w-full">
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[85%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-gray-100 flex flex-col items-start justify-start px-5 py-[16.5px] w-full">
                      <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[165.83px] w-[254px]">
                        <Text
                          className="text-gray-500 text-lg w-auto"
                          size="txtRobotoRegular18"
                        >
                          First Name
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 flex flex-col items-start justify-start px-5 py-[16.5px] w-full">
                      <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[166.83px] w-[254px]">
                        <Text
                          className="text-gray-500 text-lg w-auto"
                          size="txtRobotoRegular18"
                        >
                          Last Name
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 flex flex-col items-start justify-start px-5 py-[16.5px] w-full">
                      <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[138.83px] w-[254px]">
                        <Text
                          className="text-gray-500 text-lg w-auto"
                          size="txtRobotoRegular18"
                        >
                          Email Address
                        </Text>
                      </div>
                    </div>
                  </List>
                  <Button
                    className="cursor-pointer min-w-[143px] text-center text-lg"
                    shape="square"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-black-900 flex font-roboto items-center justify-center mt-[3px] md:px-5 px-[280px] py-[119px] w-full">
            <div className="flex flex-col gap-8 items-center justify-start max-w-[1360px] w-full">
              <div className="flex md:flex-col flex-row gap-4 items-end justify-start max-w-[1360px] w-full">
                <div className="flex flex-col gap-6 items-start justify-start pb-[206px] md:pr-10 sm:pr-5 pr-[110.16px] w-[367px]">
                  <Text
                    className="text-base text-white-A700 tracking-[2.00px] uppercase w-auto"
                    size="txtRobotoRegular16"
                  >
                    About
                  </Text>
                  <div className="flex flex-col items-start justify-start sm:pr-5 pr-[34.03px] w-[298px]">
                    <Text
                      className="leading-[28.00px] text-base text-white-A700"
                      size="txtRobotoRegular16"
                    >
                      <>
                        The GodLife’s Assembly mission is to see
                        <br />
                        the kingdom of God come, to the nations. <br />
                        And becoming his people..
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between pr-[0.01px] w-full">
                  <div className="flex sm:flex-1 flex-col gap-[30px] items-start justify-start pb-[46px] w-[12%] sm:w-full">
                    <Text
                      className="text-base text-white-A700 tracking-[2.00px] uppercase"
                      size="txtRobotoRegular16"
                    >
                      Connect
                    </Text>
                    <ul className="flex flex-col gap-[25px] items-start justify-start w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700_cc"
                        >
                          <Text size="txtRobotoRegular16WhiteA700cc">
                            Weekends
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700_cc"
                        >
                          <Text size="txtRobotoRegular16WhiteA700cc">
                            Get Involved
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700_cc"
                        >
                          <Text size="txtRobotoRegular16WhiteA700cc">
                            Calendar
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700_cc"
                        >
                          <Text size="txtRobotoRegular16WhiteA700cc">
                            Featured Events
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700_cc"
                        >
                          <Text size="txtRobotoRegular16WhiteA700cc">
                            Schools
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700_cc"
                        >
                          <Text size="txtRobotoRegular16WhiteA700cc">
                            Contact Us
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-8 items-start justify-start pb-[46px] w-[17%] sm:w-full">
                    <Text
                      className="text-base text-white-A700 tracking-[2.00px] uppercase"
                      size="txtRobotoRegular16"
                    >
                      Resources
                    </Text>
                    <ul className="flex flex-col items-start justify-start w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700_cc"
                        >
                          <Text size="txtRobotoRegular16WhiteA700cc">
                            The GodLife Assembly
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-[23px] text-base text-white-A700_cc"
                        >
                          <Text size="txtRobotoRegular16WhiteA700cc">
                            School of Music
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-[25px] text-base text-white-A700_cc"
                        >
                          <Text size="txtRobotoRegular16WhiteA700cc">
                            Leaders{" "}
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-[26px] text-base text-white-A700_cc"
                        >
                          <Text size="txtRobotoRegular16WhiteA700cc">
                            Messages
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-[23px] text-base text-white-A700_cc"
                        >
                          <Text size="txtRobotoRegular16WhiteA700cc">
                            Store
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <ul className="flex md:flex-1 flex-col items-start justify-start pb-8 w-[7%] md:w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700 tracking-[2.00px] uppercase"
                      >
                        <Text size="txtRobotoRegular16">More</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[31px] text-base text-white-A700_cc"
                      >
                        <Text size="txtRobotoRegular16WhiteA700cc">Give</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[25px] text-base text-white-A700_cc"
                      >
                        <Text size="txtRobotoRegular16WhiteA700cc">
                          Careers
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[25px] text-base text-white-A700_cc"
                      >
                        <Text size="txtRobotoRegular16WhiteA700cc">News</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[26px] text-base text-white-A700_cc"
                      >
                        <Text size="txtRobotoRegular16WhiteA700cc">
                          Privacy
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[23px] text-base text-white-A700_cc"
                      >
                        <Text size="txtRobotoRegular16WhiteA700cc">Terms</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-col items-start justify-start mt-3.5 py-3">
                          <Text
                            className="text-base text-white-A700_cc w-auto"
                            size="txtRobotoRegular16WhiteA700cc"
                          >
                            Investing
                          </Text>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <ul className="flex md:flex-1 flex-col gap-5 items-start justify-start pb-8 w-[14%] md:w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700 tracking-[2.00px] uppercase"
                      >
                        <Text size="txtRobotoRegular16">Social</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row gap-5 items-start justify-between pr-1.5 py-1.5">
                          <div className="flex flex-col items-start justify-center mt-0.5 pl-[3.75px] pr-[3.25px] w-5">
                            <Img
                              className="h-[23px] w-[13px]"
                              src="images/img_facebook.svg"
                              alt="facebook"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start mb-0.5 mr-3 py-1.5 w-auto">
                            <Text
                              className="text-base text-white-A700_e5 w-auto"
                              size="txtRobotoRegular16WhiteA700e5"
                            >
                              Facebook
                            </Text>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row gap-5 items-start justify-between pr-1.5 py-1.5">
                          <Img
                            className="h-[21px] mt-[3px] w-5"
                            src="images/img_instagram.svg"
                            alt="instagram"
                          />
                          <div className="flex flex-col items-start justify-start mb-0.5 mr-[9px] py-1.5 w-auto">
                            <Text
                              className="text-base text-white-A700_e5 w-auto"
                              size="txtRobotoRegular16WhiteA700e5"
                            >
                              Instagram
                            </Text>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row gap-5 items-start justify-start pr-1.5 py-1.5">
                          <div className="flex flex-col items-start justify-center mt-0.5 w-5">
                            <Img
                              className="h-[23px] w-5"
                              src="images/img_twitter.svg"
                              alt="twitter"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start mb-0.5 py-1.5 w-auto">
                            <Text
                              className="text-base text-white-A700_e5 w-auto"
                              size="txtRobotoRegular16WhiteA700e5"
                            >
                              Twitter
                            </Text>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row gap-5 items-start justify-start pr-1.5 py-1.5">
                          <div className="flex flex-col items-start justify-center pl-[0.25px] pr-[1.75px] w-5">
                            <Img
                              className="h-[23px] w-[18px]"
                              src="images/img_linkedin.svg"
                              alt="linkedin"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start mb-0.5 py-1.5 w-auto">
                            <Text
                              className="text-base text-white-A700_e5 w-auto"
                              size="txtRobotoRegular16WhiteA700e5"
                            >
                              LinkedIn
                            </Text>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row gap-[18px] items-start justify-start pr-1.5 py-1.5">
                          <div className="flex flex-col items-start justify-center mt-0.5 w-[23px]">
                            <Img
                              className="h-[23px] w-[23px]"
                              src="images/img_youtube.svg"
                              alt="youtube"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start mb-0.5 py-1.5 w-auto">
                            <Text
                              className="text-base text-white-A700_e5 w-auto"
                              size="txtRobotoRegular16WhiteA700e5"
                            >
                              YouTube
                            </Text>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row gap-5 items-start justify-between py-1.5">
                          <div className="flex flex-col items-start justify-center mt-0.5 px-[2.5px] w-5">
                            <Img
                              className="h-[23px] w-[15px]"
                              src="images/img_apple.svg"
                              alt="apple"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start mb-0.5 py-1.5 w-auto">
                            <Text
                              className="text-base text-white-A700_e5 w-auto"
                              size="txtRobotoRegular16WhiteA700e5"
                            >
                              Apple Music
                            </Text>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row gap-5 items-start justify-start pr-1.5 py-1.5">
                          <Img
                            className="h-[21px] mt-[3px] w-5"
                            src="images/img_instagram.svg"
                            alt="instagram_Two"
                          />
                          <div className="flex flex-col items-start justify-start mb-0.5 py-1.5 w-auto">
                            <Text
                              className="text-base text-white-A700_e5 w-auto"
                              size="txtRobotoRegular16WhiteA700e5"
                            >
                              Spotify
                            </Text>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <Text
                className="text-center text-sm text-white-A700_7f w-auto"
                size="txtRobotoRegular14"
              >
                © 2023 The GodLife Assembly All Rights Reserved.
              </Text>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default FramePage;
