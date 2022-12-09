import './itemcard.css';
import React from 'react';
import {useState} from 'react';
import ItemsModal from './../modals/itemsModal.js';

const ItemCard = ({data}) => {

  let [modalDisplay,setModalDisplay] = useState(false)

  return (
    <React.Fragment>
    <div className="item_card" onClick={() => setModalDisplay(true)}>
      <div className="item_img_container" style={{backgroundImage: `url(${data.media_type == 'image'? data.url : data.thumbnail_url})`}}>

      </div>
      <div className="item_card_info">
        <h4>{data.title}</h4>
        <span>{data.date}</span>
      </div>

    </div>
    {modalDisplay && <ItemsModal data={data} opened={modalDisplay} onClose={() => setModalDisplay(false)}/>}
    </React.Fragment>
  )
}

export default ItemCard;
