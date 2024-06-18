
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://playground.4geeks.com/contact/agendas/mandoromero/contacts', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          phone: phoneNumber,
          email: email,
          address: address
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      // Navigate back to the home page
      navigate('/');
    } catch (error) {
      console.error("Error creating contact:", error);
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "#8092ac", color: "#000000" }}>
      <h1 style={{ textAlign: "center" }}>Add a new Contact</h1>
      <form onSubmit={handleSubmit} style={{ backgroundColor: "#8092ac", color: "#060000", padding: "20px", borderRadius: "5px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="fullName" style={{ display: "block", marginBottom: "5px" }}>Full Name</label>
          <input id="fullName" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" style={{ width: "100%", padding: "8px", boxSizing: "border-box", backgroundColor: "#08415c", color: "#ffffff", border: "none", borderRadius: "3px" }} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="address" style={{ display: "block", marginBottom: "5px" }}>Address</label>
          <input id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" style={{ width: "100%", padding: "8px", boxSizing: "border-box", backgroundColor: "#08415c", color: "#ffffff", border: "none", borderRadius: "3px" }} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" style={{ width: "100%", padding: "8px", boxSizing: "border-box", backgroundColor: "#08415c", color: "#ffffff", border: "none", borderRadius: "3px" }} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="phoneNumber" style={{ display: "block", marginBottom: "5px" }}>Phone Number</label>
          <input id="phoneNumber" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" style={{ width: "100%", padding: "8px", boxSizing: "border-box", backgroundColor: "#08415c", color: "#ffffff", border: "none", borderRadius: "3px" }} />
        </div>
        <button style={{ background: "linear-gradient(#f7e7ce, #f5d041)", border: "3px solid #ffd300", borderRadius: "5%", color: "#7f7d9c", padding: "10px 20px", cursor: "pointer" }} type="submit">Add Contact</button>
      </form>
      <a style={{ color: "#ffffff", display: "block", marginTop: "20px", textAlign: "center" }} id="backToContact" href="#" onClick={() => navigate('/')}>Back to Contacts</a>
    </div>
  );
};

export default Create;

