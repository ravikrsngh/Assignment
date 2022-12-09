import './modals.css';
import React from 'react';
import ReactDOM from 'react-dom';

const MediaModal = ({type,source,onClose}) =>{
  return (
    <React.Fragment>
    {ReactDOM.createPortal(
      (
        <div className='modal_container' onClick={onClose}>
          <div className="modal media_modal">
            {type == 'image' ? <img id="media_img" src={source} /> : <video src={source} loop controls muted></video>}
          </div>
        </div>
      ),
      document.getElementById('modals')
    )}
    </React.Fragment>
  )
}

export default MediaModal;
