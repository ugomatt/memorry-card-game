import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const ModalComp = () => {
  //  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="py-5">
      <button onClick={openModal} className="btn btn-success">
        connect wallet
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className="btn btn-danger">
          close
        </button>
        <div className="my-5">
          <div className="border row px-5">
            <img
              src="/images/everscale.png"
              alt="everscale_logo"
              className="col-6"
              height="70px"
            />
            <h3 className="col-6 my-auto ">EverWallet</h3>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalComp;
