import React from 'react';
import {useState} from 'react';

const NewPara = ({text}) => {
  let [isExtended,setIsExtended] = useState(false)
  return (
    <React.Fragment>
      <p className={isExtended? "" : "eclipse_para"}>
      {text}
      </p>
      <span onClick={(e) => {
        e.stopPropagation()
        if (isExtended) {
          setIsExtended(false)
        } else {
          setIsExtended(true)
        }
      }}>View {isExtended? "Less":"More"}</span>
    </React.Fragment>
  )
}

export default NewPara;
