// import React, { useState, useEffect, } from "react";
// // import { Context } from "../store/appContext";

// export const Home = () => {
// 	// const { store, actions } = useContext(Context);
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     async function getContact() {
//       try {
//         let response = await fetch("api url");
//         let data = await response.json();
//         setContacts(data);
//       } catch (error) {
//         console.error("Error fetching contacts:", error);
//       }
//     }
//     getContact();
//   }, []);

//   return (
//       <div className="container" style={{ width: "1000px", border: "1px solid #ccc" ,}}>
//         <button>Add to contact</button> 
//         <div style={{ maxWidth: "900px", maxHeight: "100px", margin: "auto", padding: "5px", border: "px solid #ccc", borderRadius: "5px", backGroundColor: "#b8b8b8", display: "flex", margin: "5px 10px",}}>
//           <div>
//             <div>
//               <img src="https://www.clipartkey.com/mpngs/m/29-297748_round-profile-image-placeholder.png" width="75px" height="75px" style={{ }} />
//             </div>
//           </div> 
//           <div >
//             <div> 
//               <h5 style={{ marginLeft: "10px",}}>Mike Anamendolla</h5>
//               <div style={{ display: "flex", }}>
//                 <i className="fa-solid fa-location-dot"></i>
//                 <p style={{ fontSize: "12px", height: "5px", }}>123 somewhere ave, some city some state, 00000</p>
//               </div>  
//             </div>
//             <div style={{ display: "flex",}}>
//               <i className="fa-solid fa-phone" styles={{ marginLeft: "10px",}}></i>
//               <p style={{ fontSize: "12px", height: "5px", marginLeft: "5px"}}>(870)288-4149</p>
//             </div>
//             <div style={{ display: "flex"}}>
//               <i className="fa-solid fa-envelope">/</i>
//               <p style={{ fontSize: "12px", height: "5px", marginLeft: "5px",}}>mike.ana@eample.com</p>
//             </div>
//           </div>    
//           <div>
//             <i className="fa-solid fa-pen"></i>
//             <i className="fa-solid fa-trash"></i>
//           </div>
//         </div>
//     </div>    
//   );
// };

// export default Home;


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
        setContacts(data.contacts); // Ensure the response structure is correctly accessed
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    }
    getContacts();
  }, []);

  return (
    <div className="container" style={{ width: "1000px", border: "1px solid #ccc", backgroundColor: "#a3b5c0", paddingBottom: "40px" }}>
      <button style={{ background: "linear-Gradient(#f7e7ce, #f5d041)", border: "3px solid #ffd300", borderRadius: "5%", Color: "7f7d9c", marginLeft: "800px", marginTop: "20px", }} onClick={() => navigate('/create')}>Add to contact</button> 
      {contacts.map((contact, index) => (
        <div 
          key={index}
          style={{ maxWidth: "900px", maxHeight: "100px", margin: "auto", padding: "5px", border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "#b8b8b8", display: "flex", margin: "5px 10px" }}>
          <div>
            <img src="https://www.clipartkey.com/mpngs/m/29-297748_round-profile-image-placeholder.png" width="90px" height="80px" alt="Profile" />
          </div>
          <div style={{ marginLeft: "10px" }}>
            <h5 style={{ marginLeft: "30" }}>{contact.name}</h5>
            <div style={{ display: "flex", marginLeft: "20px" }}>
              <i className="fa-solid fa-location-dot"></i>
              <p style={{ fontSize: "12px", height: "5px", marginLeft: "5px" }}>{contact.address}</p>
            </div>  
            <div style={{ display: "flex", marginLeft: "20px" }}>
              <i className="fa-solid fa-phone"></i>
              <p style={{ fontSize: "12px", height: "5px", marginLeft: "5px" }}>{contact.phone}</p>
            </div>
            <div style={{ display: "flex", marginLeft: "20px" }}>
              <i className="fa-solid fa-envelope"></i>
              <p style={{ fontSize: "12px", height: "5px", marginLeft: "5px" }}>{contact.email}</p>
            </div>
          </div>    
          <div>
            <i className="fa-solid fa-pen" style={{ marginLeft: "350px" }}></i>
            <i className="fa-solid fa-trash"style={{ marginLeft: "30px" }}></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
