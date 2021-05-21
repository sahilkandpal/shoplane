import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Modal from "./Modal";
const ModalPage = () => {
  const [modalType, setModalType] = useState(null);
  const [qtyModal, setQtyModal] = useState(false);
  const [sizeModal, setSizeModal] = useState(false);
  let location = useLocation();
  let history = useHistory();

  useEffect(() => {
    console.log("modal", location);
    if (location.state) {
      setModalType(location.state.modalType);
      modalHandler(location.state);
    }
  }, []);

  const modalHandler = (state) => {
    console.log(state.modalType);
    switch (state.modalType) {
      case "quantity":
        setQtyModal(true);
        break;
      case "size":
        setSizeModal(true);
      default:
        break;
    }
  };

  return modalType ? (
    <div
      className="modal-container"
      onClick={() => {
        history.goBack();
      }}
    >
      {qtyModal && <Modal modalType={modalType} />}
      {sizeModal && <Modal modalType={modalType} />}
    </div>
  ) : null;
};

export default ModalPage;
