import React, { useState } from 'react';
import {  useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
  const navigate = useNavigate();
  const [user]=useAuthState(auth);
  const [name,setName]=useState('');
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
 

    const handleName=event=>{
      setName(event.target.value)
    }
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setAddress(event.target.value);
  };
  const handleComfiram = (event) => {
    setPhone(event.target.value);
  };
 
  const ceratefromsubmit = (event) => {
    event.preventDefault();
    const shipment={name,address,phone,email}
    console.log(shipment);
   
  };
    return (
      <div className="auth-form-container ">
      <div className="auth-form">
        <h1>Shipping Information</h1>
        <form onSubmit={ceratefromsubmit}>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <div className="input-wrapper">
              <input
                onBlur={handleName}
                type="text"
                name="name"
                id="name"
                required
              />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <input
              value={user?.email}
              readOnly
                onBlur={handleEmail}
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="address">Address</label>
            <div className="input-wrapper">
              <input
                onBlur={handlePassword}
                type="text"
                name="address"
                id=""
                required
              />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="phone">Phone</label>
            <div className="input-wrapper">
              <input
                onBlur={handleComfiram}
                type="text"
                name="phone"
                id=""
                required
              />
            </div>
          </div>
          <button type="submit" className="auth-form-submit">
          Shipment
          </button>
        </form>
      </div>
    </div>
    );
};

export default Shipment;