import React, { useState, useEffect, } from "react";
// import { Context } from "../store/appContext";

export const Home = () => {
	// const { store, actions } = useContext(Context);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function getContact() {
      try {
        let response = await fetch("api url");
        let data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    }
    getContact();
  }, []);

  return (
    <div style={{ width: "900px", border: "1px solid #ccc" ,}}>
      <div style={{ maxWidth: "900px", maxheight: "100px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px", backGroundColor: "#b8b8b8", display: "flex",}}>
        <div>
          <div>
            <img src="https://www.clipartkey.com/mpngs/m/29-297748_round-profile-image-placeholder.png" width="150px" height="150px" />
          </div>
        </div> 
        <div >
          <div> 
            <h5>Mike Anamendolla</h5>
            <div style={{ display: "flex", }}>
              <i className="fa-solid fa-location-dot"></i>
              <p>123 somewhere ave, some city some state, 00000</p>
            </div>  
          </div>
          <div>
            <i className="fa-solid fa-phone"></i>
            <p>(870)288-4149</p>
          </div>
          <div>
            <i className="fa-solid fa-envelope">/</i>
            <p>mike.ana@eample.com</p>
          </div>
        </div>    
        <div>
          <i className="fa-solid fa-pen"></i>
          <i className="fa-solid fa-trash"></i>
        </div>
      </div>
    </div>    
  );
};

export default Home;