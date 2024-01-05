import React from 'react'
import Footer from './Footer'

const Contact = () => {
  return (
   <>
    <div className="contact-section">
    <h1><span>Contact Me</span></h1>
    <div className="contact-page">
       <div className="d-flex">
        <div className="address-section">
            <div className="round">
             <i className="fa-sharp fa-solid fa-location-dot"></i>
            </div>
             <div className="address-detail">
                <h3>Address Details</h3>
             <p>Fazilnagar Kushinagar (U.P) PinCode - 274401</p>
             </div>
            
            </div>
            <div className="phone-section">
                <div className="round">
                    <i className="fa-sharp fa-solid fa-phone"></i>
                </div>
                <div className="call-detail">
                    <h3>Call Details</h3>
                   <p> Phone-No 7905948645</p>
                   <p>WhatsApp-No 9670660505</p>
                </div>
    
            </div>
            <div className="e-mail-section">
              <div className="round">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="e-mail-detail">
                <h3>E-mail Details</h3>
                <p>sahibakhatoon2023@gmail.com sahidaansari2024@gmail.com</p>
              </div>
            </div>
       </div>
    </div>
</div>
<Footer />
   </>
  )
}

export default Contact