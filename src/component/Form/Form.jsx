import React,{useState} from 'react'
import "./Form.css"

const Form = () => {

    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const submitHandler = (e) =>{
        e.preventDefault()
        let data = {
            firstName,
            lastName,
            email,
            password,
        }
        alert("Data received");
        console.log(data);
    }

    return (
        <div className='container'>

            <h1>Form Handling</h1>

          <form onSubmit={submitHandler}>
            <input type="text"placeholder="Enter Your First Name" 
             value={firstName}
             onChange={(e)=>setFirstName(e.target.value)}required/>

            <input type="text"placeholder="Enter Your Last Name"
             value={lastName}
             onChange={(e)=>setLastName(e.target.value)}required/> 

            <input type="text"placeholder="Enter Your Email " 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}required/>

            <input type="password"placeholder="Enter Your Password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)} required/>

            <input type="submit" className='butn' />
          </form>
       
        </div>
    )
}

export default Form;