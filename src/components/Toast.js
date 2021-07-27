import React from "react";
import { useDispatch } from "react-redux";
import { removeToast } from "../store/actions/index";

const Toast = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="toast" onClick={() => dispatch(removeToast())}>
      <img className="toast-thumbnail" src={item.preview} />
      <div className="toast-text">Added to bag</div>
    </div>
  );
};

export default Toast;
