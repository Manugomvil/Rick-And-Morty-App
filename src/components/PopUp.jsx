import React from 'react'
import '../assets/style/components/PopUp.css'

const Popup = ({children,closePopup}) =>{
    return (
        <div className='popup'>
          <div className="popup" onClick={closePopup}>close me</div>
          <div className='popup_inner'>
              {children}
          </div>
        </div>
      );
  }
  export default Popup