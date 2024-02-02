import { useState } from "react";

export default function Landing(){


    const [f,setF] =useState(false);
    const[fullname, setFullname] = useState({
        fname:'',
        lname:''
    });

    const handleChange =(e) => {
        setF(false);
        setFullname( {...fullname,[e.target.name]:e.target.value,})
    }

   const formHandler = (e) => {

        e.preventDefault();
        console.log(e.target.fname.value);
        setF(true);

    }

    return (
        <div>
            <h1>Full Name Display</h1>
            <form onSubmit={formHandler}>
                <label htmlFor="fname">First Name:</label>
                <input type="text" id="fname" name="fname" value={fullname.fname} onChange={handleChange}required/><br/>
                <label htmlFor="lname">Last Name:</label>
                <input type="text" id="lname" name="lname" value={fullname.lname} onChange={handleChange} required/><br/>
                <button type="submit">Sumbit</button>
            </form>
            {f?<div>Full Name: {fullname.fname} {fullname.lname}</div>:null}
        </div>
    );
}