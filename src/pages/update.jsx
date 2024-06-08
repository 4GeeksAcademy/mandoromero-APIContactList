import React, { useState, useEffect} from "react";


const Update =() => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumnber, setPhoneNumber] = useState("");

    useEffect(() => {
        const updateAgenda = async () => {
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

        createAgenda();
    }, [name, address, email, phoneNumber]);

    const handleSubmit = (e) => {
        e.preventDefault();const handleSubmit = (e) => {
            e.preventDefault();
    };

    retrun (
        <div>
            
        </div>
    )
