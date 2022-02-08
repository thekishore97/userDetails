import React, {useState} from 'react';
import './form.css'
const AddUserForm = (props) => {

    const initUser = {id: null, name: '',name1: '', username: '',dob:''};

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.name1 &&  user.username && user.dob ) {
            handleChange(e, props.addUser(user));
        }
    }

    return (
        <form>
            <div id='btn'>
              <button className="button button1" type="submit" onClick={handleSubmit} >Save</button>
              </div>
            <label className='label'>First Name</label>
            <input className="input" type="text" value={user.name} name="name" onChange={handleChange} />
            &nbsp;&nbsp;&nbsp;   <label className='label'>Last Name</label>
            <input className="input" type="text" value={user.name1} name="name1" onChange={handleChange} />
            <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label className='label'>E-mail</label>
            <input className="input" type="text" value={user.username} name="username" onChange={handleChange} />
            <label className='label'>Date of Birth</label>
            <input className="input" type="date" value={user.dob} name="dob" onChange={handleChange} />
          
        </form>
    )
}

export default AddUserForm;