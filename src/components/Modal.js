import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Modal = ({ modalType }) => {
  const [qty, setQty] = useState(null);
  const [size, setSize] = useState(null);
  const [modalVal, setModalVal] = useState(null);
  let history = useHistory();
  let list =
    modalType == "quantity"
      ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      : ["S", "M", "L", "XL"];
  return (
    <div>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">Select {modalType}</div>
        <div className="row">
          <div className="flex_row">
            {list.map((val, index) => (
              <div
                id={index + 1}
                className={`qty-list-item ${
                  // modalType == "quantity"
                  //   ? qty == val && "selected"
                  //   : size == val && "selected"
                  modalVal == val && "selected"
                }`}
                onClick={() => {
                  // modalType == "quantity" ? setQty(val) : setSize(val);
                  setModalVal(val);
                }}
              >
                <div className="qty-number">{val}</div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="done-btn"
          onClick={() => {
            console.log("sended", modalVal);
            history.goBack();
          }}
        >
          DONE
        </div>
      </div>
    </div>
  );
};

export default Modal;
