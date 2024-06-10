import React, { useState, useEffect } from "react";

import "../index.css";

export const Home = () => {
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
    <div>
      something
    </div>
  );
};

export default Home;