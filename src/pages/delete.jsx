import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Delete = () => {
  const [deleted, setDeleted] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const slug = "mandoromero";

  const handleDelete = async () => {
    setError(null); 

   
    const url = `https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}`;

    console.log("DELETE request URL:", url); 

    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Accept": "application/json"
        }
      });

      console.log('Response status:', response.status); 
      console.log('Response:', response); 

      if (response.status === 204 || response.status === 200) {
        setDeleted(true);
        navigate('/'); 
      } else {
        const errorData = await response.json();
        console.error("Failed to delete contact:", errorData);
        setError(`Failed to delete contact: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
      setError(`Error deleting contact: ${error.message}`);
    }
  };

  if (deleted) {
    return <div>Contact deleted successfully!</div>;
  }

  return (
    <div>
      <button onClick={handleDelete} style={{ background: "linear-gradient(#f7e7ce, #f5d041)", border: "3px solid #ffd300", borderRadius: "5%", color: "#7f7d9c", padding: "10px 20px", cursor: "pointer" }}>
        Delete Contact
      </button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default Delete;
