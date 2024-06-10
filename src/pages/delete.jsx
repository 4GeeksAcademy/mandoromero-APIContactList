import React, { useState } from "react";

const Delete = ({ id }) => {
  const [deleted, setDeleted] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://playground.4geeks.com/contact/doc/agenda/user/${id}`, {
        method: "DELETE"
      });
      if (response.ok) {
        setDeleted(true);
      } else {
        console.error("Failed to delete contact");
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  if (deleted) {
    return <div>Contact deleted successfully!</div>;
  }

  return (
    <div>
      <button onClick={handleDelete}>Delete Contact</button>
    </div>
  );
};

export default Delete;