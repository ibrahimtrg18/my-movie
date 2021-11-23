import React from "react";
import { createPortal } from "react-dom";

const WrapperModal = ({ children }) => {
  return (
    <div
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        />

        <div class="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 sm:my-0 sm:align-middle sm:max-w-lg sm:w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

const Modal = ({ children, toggle }) => {
  const modalRoot = document.getElementById("modal-root");

  return createPortal(
    toggle && <WrapperModal>{children}</WrapperModal>,
    modalRoot
  );
};

export default Modal;
