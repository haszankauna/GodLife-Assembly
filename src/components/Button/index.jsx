import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-[5px]" };
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-blue_gray-900",
    black_900: "bg-black-900 text-white-A700",
  },
  outline: {
    deep_orange_A200:
      "border-2 border-deep_orange-A200 border-solid text-black-900",
  },
};
const sizes = { xs: "p-[15px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "black_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["white_A700", "black_900", "deep_orange_A200"]),
};

export { Button };
