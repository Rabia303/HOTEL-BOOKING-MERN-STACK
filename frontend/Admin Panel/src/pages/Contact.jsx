import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Contact = () => {
const [contact,setContact]=useState([])

useEffect(()=> {

    fetchContact()
},
[]
)
 const fetchContact=async ()=>{
    const res=await axios.get("http://localhost:3000/contact")
    console.log(res);
    
    setContact(res.data)
 }
  return (
    <div style={{ backgroundColor: "#121212", color: "#fff", minHeight: "100vh", padding: "50px", fontFamily: "Arial, sans-serif" }}>
    <h1 style={{ textAlign: "center", fontSize: "26px", marginBottom: "20px" }}>Contact</h1>
    <div style={{ overflowX: "auto", borderRadius: "8px", backgroundColor: "#1e1e1e", padding: "10px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#333", color: "#fff", fontSize: "16px" }}>
   
            <th style={{ padding: "15px", borderBottom: "2px solid #555", textAlign: "left" }}>Name</th>
            <th style={{ padding: "15px", borderBottom: "2px solid #555", textAlign: "left" }}>Email</th>
            <th style={{ padding: "15px", borderBottom: "2px solid #555", textAlign: "left" }}>detail</th>
         
          </tr>
        </thead>
        <tbody>
            {contact.map((contact)=>(
                <tr key={contact._id} style={{ borderBottom: "1px solid #555", transition: "background-color 0.3s", ":hover": { backgroundColor: "#333" } }}>
        
            <td style={{ padding: "15px", color: "#fff" }}>{contact.name}</td>
            <td style={{ padding: "15px", color: "#fff" }}>{contact.email}</td>
            <td style={{ padding: "15px", color: "#fff" }}>{contact.content}</td>
         
          </tr>
            ))}
          
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Contact
