import React from 'react'
import AuthDetails from './authDetails';
import earthquake from "../earthquake.png"

function Notification() {
  return (
    <>
    <div>
      
    <div className="logo">
    <img src={earthquake} alt="Logo" />
    <h3>Shaky</h3>
    </div>
    <AuthDetails/>
    </div>
    </>
  )
}

export default Notification;