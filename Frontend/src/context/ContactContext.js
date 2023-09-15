import { createContext, createRef } from "react";
import { useState } from "react";
export const contactContext = createContext();

const ContactState = (props) => {
  const [contact, setcontact] = useState([]);
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(true);

  const getAllContacts = async (token1) => {
    // const response = await fetch("http://localhost:5000/getcontacts", {
    const response = await fetch("https://contacteasebackend.onrender.com/getcontacts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token1,
      },
    });

    if (response.ok) {
      setIsLoading(false);
      const result = await response.json();
      setcontact(result);
    } else {
      // Handle error when fetching contacts fails.
      console.error("Error:", response.statusText);
    }
  };

  const addContact = async (email,phone,name) => {
    const response = await fetch("https://contacteasebackend.onrender.com/addcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":token},
      body: JSON.stringify({email,phone,name}),
    });

    const result = await response.json();
    // console.log(result);

     setcontact( contact.concat(result));
    
  };

  const deleteContact = async (id) => {
    try {
      const response = await fetch(`https://contacteasebackend.onrender.com/deletecontact/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
  
      if (response.ok) {
        // Contact successfully deleted, update the state
        const newContacts = contact.filter((c) => c._id !== id);
        setcontact(newContacts);
      } else {
        console.error('Error deleting contact:', response.statusText);
        // Handle the error as needed
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
      // Handle network or other unexpected errors
    }
  };

  const updateContact = async(id,name,email,phone)=>{
      
        const response = await fetch(`https://contacteasebackend.onrender.com/updatecontact/${id}`,{
          method:'PUT',
          headers:{
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({email,phone,name})
        });
        let newContact = JSON.parse(JSON.stringify(contact))

        for (let index = 0; index < newContact.length; index++) {
          const element = newContact[index];
          if (element._id === id) {
            newContact[index].name = name;
            newContact[index].email = email;
            newContact[index].phone = phone; 
            break; 
          }
        }  
        setcontact(newContact);

      
  }
  

  return (
    <contactContext.Provider value={{ getAllContacts, isLoading,updateContact,contact,addContact,deleteContact }}>
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
