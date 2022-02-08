import React, { useState, useEffect } from 'react';
import './form.css'

const EditUserForm = (props) => {

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const [user, setUser] = useState(props.currentUser);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.name1 && user.username && user.dob) props.updateUser(user);
    }

    return (
        <form>
            <div id='btn'>
                <button className="button button1" type="submit" onClick={handleSubmit} >Update</button>
                <button  className="buttonC" type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
               
            </div>
            <label className='label'>First Name</label>
            <input className="input" type="text" value={user.name} name="name" onChange={handleChange} />
            &nbsp;&nbsp;&nbsp; <label className='label'>Last Name</label>
            <input className="input" type="text" value={user.name1} name="name1" onChange={handleChange} />
            <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label className='label'>E-mail</label>
            <input className="input" type="text" value={user.username} name="username" onChange={handleChange} />
            <label className='label'>Date of Birth</label>
            <input className="input" type="date" value={user.dob} name="dob" onChange={handleChange} />

        </form>
    )
}

export default EditUserForm;