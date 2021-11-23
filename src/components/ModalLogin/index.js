import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";
import { loginAccount } from "../../redux/actions/authAction";

const ModalLogin = (props) => {
  const { toggle, setToggle, ...restProps } = props;
  const dispatch = useDispatch();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const onInputChange = (e) => {
    return setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAccount(state));
    setToggle(false);
  };

  return (
    <Modal toggle={toggle} setToggle={setToggle}>
      <div className="px-4 py-3">
        <form onSubmit={(e) => onLoginSubmit(e)}>
          <h1 className="text-2xl mt-2 mb-3 font-bold text-gray-700">
            Login with Account The Movie DB
          </h1>
          <Input
            label="Username"
            id="username"
            name="username"
            type="text"
            placeholder="username"
            customClass="mb-1"
            onChange={(e) => onInputChange(e)}
          />
          <Input
            label="Password"
            id="password"
            name="password"
            type="password"
            placeholder="********"
            customClass="mb-2"
            onChange={(e) => onInputChange(e)}
          />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </Modal>
  );
};

export default ModalLogin;
