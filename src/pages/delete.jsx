import React, {useState, useEffect } from "react";


const Delete = async (id) => {
    const res = await fetch(`https://playground.4geeks.com/contact/doc/agenda/user/id`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify ({
            name: name,
            address: address,
            phone: phoneNumber,
            email: email,
        })})
            let data = await response.json();
            console.log(data);
    
 return (
    <div>something</div>
 )
   
}



export default Delete;