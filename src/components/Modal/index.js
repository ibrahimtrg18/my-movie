import React from "react";
import { createPortal } from "react-dom";

const WrapperModal = (props) => {
  const { children, setToggle, ...restProps } = props;

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={() => setToggle(false)}
        />

        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 sm:my-0 sm:align-middle sm:max-w-lg sm:w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

const Modal = (props) => {
  const modalRoot = document.getElementById("modal-root");
  const { children, toggle, setToggle, ...restProps } = props;

  return createPortal(
    toggle && <WrapperModal setToggle={setToggle}>{children}</WrapperModal>,
    modalRoot
  );
};

export default Modal;
