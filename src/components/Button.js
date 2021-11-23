import React from "react";

const Input = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      {...restProps}
      className="shadow bg-gray-800 hover:bg-gray-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};

export default Input;
