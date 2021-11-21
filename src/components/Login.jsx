import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Home from '../components/Home';
import Admin from '../components/Admin';

function Login() {

    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");
    const [adminEmailLog, setEmaillogAdmin] = useState(" ");
    const [adminpasswordlog, setPasswordlogAdmin] = useState(" ");

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);
    const [flagA, setFlagA] = useState(false);
    const [homeA, setHomeA] = useState(true);
    const [infoA, setInfoA] = useState(true);

    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage.getItem('SubmissionPassword').replace(/"/g, "");
        let mail = localStorage.getItem('SubmissionEmail').replace(/"/g, "");
        // .replace(/"/g,"") is used to remove the double quotes for the string

        if (!emaillog || !passwordlog) {
            setFlag(true);
            console.log("EMPTY");
        } else if ((passwordlog !== pass) || (emaillog !== mail)) {
            setFlag(true);
        } else {
            setHome(!home);
            setFlag(false);
        }
    }
    function handleLoginAdmin(e) {
        e.preventDefault();
        let pass = localStorage.getItem('SubmissionPassword').replace(/"/g, "");
        let mail = localStorage.getItem('SubmissionEmail').replace(/"/g, "");
    

        if (!adminEmailLog || !adminpasswordlog) {
            setFlagA(true);
            console.log("EMPTY");
        } else if ((adminpasswordlog !== pass) || (adminEmailLog !== mail)) {
            setFlagA(true);
        } else {
            setHomeA(!Admin); 
            setFlagA(false);
        }
        

    }
  

    return (
        <>
        <div >
            {home ? <form onSubmit={handleLogin}>
                <h3>Employee Log in</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmaillog(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPasswordlog(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" >Login</button>

                {flag && <Alert color='primary' variant="warning" >
                    Incorrect, keep trying.
                        </Alert>}
            </form>
                : <Home />
            }

        </div>
        
        <div>
        {infoA ? <form onSubmit={handleLoginAdmin}>
                <h3>Admin Log in</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmaillogAdmin(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPasswordlogAdmin(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" >Admin Login</button>

                {flagA && <Alert color='primary' variant="warning" >
                    Incorrect Info else keep trying.
                        </Alert>}
            </form>
             : <Admin />
            }
                
        
        </div>
         </>   
    )
}

export default Login