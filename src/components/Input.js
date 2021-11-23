import React from "react";

const Input = (props) => {
  const { children, label, customClass, ...restProps } = props;

  if (label) {
    return (
      <label>
        {label}
        <input
          {...restProps}
          className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800 ${customClass}`}
        >
          {children}
        </input>
      </label>
    );
  }

  return (
    <input
      {...restProps}
      className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800 ${customClass}`}
    >
      {children}
    </input>
  );
};

export default Input;
