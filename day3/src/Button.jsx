import React from "react";
import PropTypes from "prop-types";

/**
 * @typedef ButtonProps
 *
 * @property {string} title - Text hiển thị
 * @property {() => void} onClick - Hàm xử lý sự kiện click
 */

/**
 * @param {ButtonProps} props - hiển thị button
 */
export default function Button(props) {
  return <button onClick={props.onClick}>{props.title}</button>;
}

Button.defaultProps = {
  children: null,
  onClick: () => {},
};

Button.propTypes = {
  onClick: PropTypes.func,
};
