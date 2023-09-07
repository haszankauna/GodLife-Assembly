import React from "react";

const sizeClasses = {
  txtRobotoRegular16Black900: "font-normal font-roboto",
  txtRobotoRegular16WhiteA700e5: "font-normal font-roboto",
  txtPoppinsRegular36: "font-normal font-poppins",
  txtMontserratRomanExtraBold110: "font-extrabold font-montserrat",
  txtMontserratRomanBold72: "font-bold font-montserrat",
  txtRobotoRegular56: "font-normal font-roboto",
  txtRobotoRegular36: "font-normal font-roboto",
  txtInterLight24: "font-inter font-light",
  txtRobotoRegular14: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRobotoRegular18: "font-normal font-roboto",
  txtRobotoRegular16WhiteA700cc: "font-normal font-roboto",
  txtInterThin57: "font-hairline font-inter",
  txtInterRegular69: "font-inter font-normal",
  txtPoppinsMedium48: "font-medium font-poppins",
  txtRobotoRegular22: "font-normal font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
