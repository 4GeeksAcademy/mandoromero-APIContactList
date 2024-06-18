
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getContacts() {
      try {
        const response = await fetch("https://playground.4geeks.com/contact/agendas/mandoromero/contacts");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setContacts(data.contacts); 
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    }
    getContacts();
  }, []);

  return (
    <div className="container" style={{  width: "800px", border: "1px solid #ccc", backgroundColor: "#8092ac", paddingBottom: "40px" }}>
      <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "15px", marginBottom: "15px" }}>
        <button style={{ background: "linear-gradient(#f7e7ce, #f5d041)", color: "#060000", border: "3px solid #ffd300", borderRadius: "5%", marginTop: "20px" }} onClick={() => navigate('/create')}>Add to contact</button>
      </div> 
      {contacts.map((contact, index) => (
        <div 
          key={index}
          style={{ maxWidth: "750px", color: "#060000", maxHeight: "100px", margin: "auto", padding: "5px", border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "#08415c", display: "flex", margin: "5px 10px" }}>
          <div>
            <img src="https://www.clipartkey.com/mpngs/m/29-297748_round-profile-image-placeholder.png" width="90px" height="80px" alt="Profile" />
          </div>
          <div style={{ color: "#ffffff", marginLeft: "25px" }}>
            <h5 style={{ marginLeft: "30" }}>{contact.name}</h5>
            <div style={{ display: "flex", marginLeft: "20px" }}>
              <i className="fa-solid fa-location-dot"></i>
              <p style={{ fontSize: "12px", height: "5px", marginLeft: "5px" }}>{contact.address}</p>
            </div>  
            <div style={{ display: "flex", marginLeft: "20px" }}>
              <i className="fa-solid fa-phone"></i>
              <p style={{ fontSize: "12px", height: "5px", marginLeft: "5px" }}>{contact.phone}</p>
            </div>
            <div style={{ display: "flex", marginLeft: "20px", width: "500px" }}>
              <i className="fa-solid fa-envelope"></i>
              <p style={{ fontSize: "12px", height: "5px", marginLeft: "5px" }}>{contact.email}</p>
            </div>
          </div>    
          <div>
            <button onClick={() => editContact(contact.id)} style={{ background: "none", border: "none", cursor: "pointer", marginRight: "15px" }}>
                <i className="fa-solid fa-pen" style={{ color: "#ffffff" }}></i>
            </button>
            <button onClick={() => deleteContact(contact.id)} style={{ background: "none", border: "none", cursor: "pointer" }}>
                <i className="fa-solid fa-trash" style={{color: "#ffffff"}} ></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const initializeUser = async() => {
  const response = await fetch(`/users/mandoromero`,{

    Method: 'GET',
    headers: {
      'Content-Tuype': 'application/json'
    }
  })
}


if (response.ok) {
    const data = await response.jason()
      setList(data.todos)
} else {
  await fetch (`https://plalyground.4geeks.com/todo/users/mandoromero`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      }
  });
}
export default Home;
