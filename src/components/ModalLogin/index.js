import React from "react";
import Modal from "../Modal";

const ModalLogin = (props) => {
  const { toggle, ...restProps } = props;

  return <Modal toggle={toggle}>ModalLogin</Modal>;
};

export default ModalLogin;
