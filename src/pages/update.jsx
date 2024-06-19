import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const slug = "mandoromero";  

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`);
        if (response.ok) {
          const data = await response.json();
          const contact = data.contacts.find(contact => contact.id == id);
          if (contact) {
            setName(contact.name);
            setAddress(contact.address);
            setEmail(contact.email);
            setPhoneNumber(contact.phone);
          } else {
            throw new Error(`Contact with ID: ${id} not found`);
          }
        } else {
          throw new Error(`Failed to fetch contacts`);
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContact();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          address: address,
          phone: phoneNumber,
          email: email
        })
      });
      if (response.ok) {
        console.log("Contact updated successfully");
        navigate('/'); // Navigate back to the home page
      } else {
        throw new Error(`Failed to update contact with ID: ${id}`);
      }
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "#8092ac", color: "#000000" }}>
      <h2 style={{ textAlign: "center" }}>Update Contact</h2>
      <form onSubmit={handleSubmit} style={{ backgroundColor: "#8092ac", color: "#060000", padding: "20px", borderRadius: "5px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>Full Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", padding: "8px", boxSizing: "border-box", backgroundColor: "#08415c", color: "#ffffff", border: "none", borderRadius: "3px" }} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="address" style={{ display: "block", marginBottom: "5px" }}>Address</label>
          <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} style={{ width: "100%", padding: "8px", boxSizing: "border-box", backgroundColor: "#08415c", color: "#ffffff", border: "none", borderRadius: "3px" }} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: "8px", boxSizing: "border-box", backgroundColor: "#08415c", color: "#ffffff", border: "none", borderRadius: "3px" }} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="phoneNumber" style={{ display: "block", marginBottom: "5px" }}>Phone Number</label>
          <input type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={{ width: "100%", padding: "8px", boxSizing: "border-box", backgroundColor: "#08415c", color: "#ffffff", border: "none", borderRadius: "3px" }} />
        </div>
        <button type="submit" style={{ background: "linear-gradient(#f7e7ce, #f5d041)", border: "3px solid #ffd300", borderRadius: "5%", color: "#7f7d9c", padding: "10px 20px", cursor: "pointer" }}>Update Contact</button>
      </form>
    </div>
  );
};

export default Update;
