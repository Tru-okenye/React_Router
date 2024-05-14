import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentDetails = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    return (
      <>
        <div className='pay bg'>
          <div>
        
            <h2>Payment Details</h2>
            <form >
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} /><br></br>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="e.g 2547******81" /><br></br>
              <button type="submit">submit</button>
            </form>

          </div>
        </div>
      </>
    );
}

export default PaymentDetails








