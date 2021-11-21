import React, { useState } from 'react'
import { form, Alert } from 'react-bootstrap';
import Login from '../components/Login';


function Registration() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const [info, setInfo] = useState(true);

    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password || !phone || !age  || !gender) {
            setFlag(true);

        } else {
            setFlag(false);
            localStorage.setItem("SubmissionEmail", JSON.stringify(email));
            localStorage.setItem("SubmissionPassword", JSON.stringify(password));
            console.log("Saved in Local Storage");

            setLogin(!login)

        }

    }
  
    function handleClick() {
        setLogin(!login)
    }


    function infoClick() {
        setInfo(!info)
    }


    return (
        <>
            <nav className="navbar navbar-light">
                <div className="container" onClick={infoClick}>
                    <h4 className="btn btn-dark btn-lg btn-block">Vaccination</h4>
                </div>
            </nav>
            {info ? <div> {login ? <form onSubmit={handleFormSubmit}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Full Name" name="name" onChange={(event) => setName(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
                </div>


                <div className="form-group">
                    <label>Phone No.</label>
                    <input type="Phone" className="form-control" placeholder="Enter contact no" onChange={(event) => setPhone(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input type="age" className="form-control" placeholder="Enter Age" onChange={(event) => setAge(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Gender</label>
                    <input type="gender" className="form-control" placeholder="Enter Gender" onChange={(event) => setGender(event.target.value)} />
                </div>


                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#" onClick={handleClick} >log in?</a>
                </p>
                {flag &&
                    <Alert variant="danger" >
                        Every Field is important!
                </Alert>
                }

            </form> : <Login />}
            </div> : <div>
                    
                    <p><a href="#" onClick={infoClick}> Click here </a><strong> to Register for Vaccination</strong></p>
                </div>}
        </>
    )
}

export default Registration