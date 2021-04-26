import React, { useState } from 'react'
import './App.css';
import Modal from './modal';
import Confetti from 'react-dom-confetti';
import { SETTINGS, colorPresets } from './confettiUtils';

const App = () => {

  const [isShowing, setIsShowing] = useState(false)
  const [confettiOn, setConfettiOn] = useState(false)
  const [settings] = useState(SETTINGS.reduce(
    (acc, curr) =>
      Object.assign({}, acc, {
        [curr[0]]: curr[1]
      }),
    {}
  ))
  const [colorPreset] = useState(0)

  // const colors = settings["colors"];

  const allSettings = Object.assign({}, settings, {
    colors: colorPresets[colorPreset]
  });

  const openModalHandler = () => {
    setIsShowing(true);
    setConfettiOn(true)
    setTimeout(() => setConfettiOn(false), 1000);
  }

  const closeModalHandler = () => {
    setIsShowing(false)
  }

  console.log(allSettings);

  return (
    <div>

        { isShowing ? <div onClick={() => closeModalHandler()} className="back-shed">
          <Confetti
              active={ !confettiOn }
              config={ allSettings }
            />
        </div> : null }

        <button className="open-modal-btn" onClick={() => openModalHandler()}>Open Modal</button>

        <Modal
          className="modal"
          show={isShowing}
          close={closeModalHandler}>
        </Modal>
      </div>
  );
}

export default App;
