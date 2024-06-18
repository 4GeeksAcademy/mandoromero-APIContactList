import React, { useState, useEffect } from "react";

const Update = ({ id }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    // Fetch contact details based on id and populate the form fields
    const fetchContact = async () => {
      try {
        const response = await fetch(`https://playground.4geeks.com/contact/doc/agenda/user/${id}`);
        if (response.ok) {
          const data = await response.json();
          setName(data.name);
          setAddress(data.address);
          setEmail(data.email);
          setPhoneNumber(data.phone);
        } else {
          throw new Error(`Failed to fetch contact with ID: ${id}`);
        }
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    };

    fetchContact();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://playground.4geeks.com/contact/doc/agenda/user/${id}`, {
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
        const data = await response.json();
        console.log("Contact updated successfully:", data);
        // Handle success, redirect or update state
      } else {
        throw new Error(`Failed to update contact with ID: ${id}`);
      }
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  return (
    <div>
      <h2>Update Contact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <br />
        <button type="submit">Update Contact</button>
      </form>
    </div>
  );
};

export default Update;