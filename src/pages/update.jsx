import React, { useState, useEffect } from "react";


const Update =() => {
    const [name, updateName] = useState("");
    const [address, updateAddress] = useState("");
    const [email, updateEmail] = useState("");
    const [phoneNumber, updatePhoneNumber] = useState("");

    useEffect(() => {
        const updateAgenda = async (id) => {
            let response = await fetch('https://playground.4geeks.com/contact/agendas/mandoromero/contacts', {
                method: "PUT",
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

       updateAgenda();
    }, [name, address, email, phoneNumber]);

    
       const handleSubmit = (e) => {
            e.preventDefault();
    };

    return (
        <div>
            something
        </div>
    )
    }


export default Update;