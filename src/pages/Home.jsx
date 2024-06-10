import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import "../index.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
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