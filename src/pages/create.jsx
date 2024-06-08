import React, { useState, useEffect } from 'react';

const Create = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    useEffect(() => {
        const createAgenda = async () => {
            let response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/mandoromero", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name,
                    address: address,
                    phone: phoneNumber,
                    email: email
                })
            });
            let data = await response.json();
            console.log(data);
        };

        createAgenda();
    }, [name, address, email, phoneNumber]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div style={{maxWidth: "800px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px", backGroundColor: "#b8b8b8",}}>
            <h1 style={{ textAlign: "center" }}>Add a new Contact</h1>
            <form onSubmit={handleSubmit} styles={{backGroundColor: "ccc"}}>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="fullName" style={{ display: "block", marginBottom: "5px" }}>Full Name</label>
                    <input id="fullName" type="text" onChange={(e) => setName(e.target.value)} placeholder="Full Name" style={{ width: "100%", padding: "8px", boxSizing: "border-box" }} />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="address" style={{ display: "block", marginBottom: "5px" }}>Address</label>
                    <input id="address" type="text" onChange={(e) => setAddress(e.target.value)} placeholder="Address" style={{ width: "100%", padding: "8px", boxSizing: "border-box" }} />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email</label>
                    <input id="email" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" style={{ width: "100%", padding: "8px", boxSizing: "border-box" }} />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="phoneNumber" style={{ display: "block", marginBottom: "5px" }}>Phone Number</label>
                    <input id="phoneNumber" type="text" onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" style={{ width: "100%", padding: "8px", boxSizing: "border-box" }} />
                </div>
                <button type="submit" style={{backGroundColor: "blue",}}>Add Contact</button>
            </form >
        </div >
    );
};

export default Create;