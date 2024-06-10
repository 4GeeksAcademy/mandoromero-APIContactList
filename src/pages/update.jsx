import React, { useState, useEffect } from "react";


const Update =() => {
    const [name, updateName] = useState("");
    const [address, updateAddress] = useState("");
    const [email, updateEmail] = useState("");
    const [phoneNumber, updatePhoneNumber] = useState("");

    useEffect(() => {
        const updateAgenda = async (id) => {
            let response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/mandoromero", {
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
            <div>
                {/* image here */}
            </div>
            <div>
                <i class="fa-solid fa-location-dot"></i>
                <p>Mike Anamendolla</p>
            </div>
            <div>
                <p>123 somewhere ave, some city some state, 00000</p>
            </div>
            <div>
                <i class="fa-solid fa-phone"></i>
                <p>(870)288-4149</p>
            </div>
            <div>
                <i class="fa-solid fa-envelope">/</i>
                <p>mike.ana@eample.com</p>
            </div>
            <div>
                <i class="fa-solid fa-pen"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
            
        </div>
    )
    }


export default Update;