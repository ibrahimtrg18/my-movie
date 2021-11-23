import React from "react";
import Modal from "../Modal";

const ModalLogin = (props) => {
  const { toggle, setToggle, ...restProps } = props;

  return (
    <Modal toggle={toggle} setToggle={setToggle}>
      ModalLogin
    </Modal>
  );
};

export default ModalLogin;
