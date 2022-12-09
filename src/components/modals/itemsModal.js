import './modals.css';
import NewPara from './../newpara/newpara';
import scrollicon from './../../assets/scroll.png';
import React from 'react';
import {useState} from 'react';
import MediaModal from './mediaModal';
import ReactDOM from 'react-dom';

const ItemsModal = ({data,opened, onClose}) => {

  let [mediamodalDisplay,setMediaModalDisplay] = useState(false)

  const close = () => {
    console.log("hey");
    onClose();
  }

  if (!opened) return null;

  return (
    <React.Fragment>
    {ReactDOM.createPortal(
        (<div className='modal_container' onClick={close}>
          <div className="modal">
          <div className="spotlight_section">
            <div className="spotlight_1">
              <h2>{data.title}</h2>
              <NewPara text={data.explanation} />
            </div>
            <div className="spotlight_2" onClick={(e) => {
              e.stopPropagation()
              setMediaModalDisplay(true)
            }}>
              {data.media_type == 'image'? <img src={data.url} /> : <img src={data.thumbnail_url} />}
            </div>
          </div>
          </div>
        </div>
        ),
        document.getElementById('modals')
      )}
      {mediamodalDisplay &&  <MediaModal type={data.media_type} source={data.url} onClose={() => setMediaModalDisplay(false)}/>}
    </React.Fragment>
  )
}

export default ItemsModal;
