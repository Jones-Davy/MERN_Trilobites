import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Register = () => {

    const history = useHistory()

    const [user, setUser] = useState({
username : "",
email : "",
password : ""
    });

    // handle inputs
    const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
       
    setUser({...user, [name]:value})
    }

const handleSubmit = async (event) => {
    event.preventDefault();

    const {username, email, password} = user;
    try {

        const res = await fetch('/register', { 
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            username, email, password
        })
    })

    if(res.status === 400 || !res) {
        window.alert("Already Used Details")
    }else{
        window.alert("Registered Successfully")
        history.push('/login')
        

    }
    } catch (error) {
        console.log(error);
    } 
    
}

    return (
        <div>
            <div className='container shadow my-5'>
            <div className="row justify-content-end">
                <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center  form order-2 " id="regist">
                    <h1 className="display-4 fw-bolder">Hello, Friend</h1>
                    <p className="lead text-center">
                        Enter Your Details to Register
                    </p>
                    <h5 className="mb-4">OR</h5>
                    <NavLink
                        to="/login"
                        className="btn xx btn-outline-light rounded-pill pb-2 w-50"
                    >
                        Login
                    </NavLink>
                </div>
                <div className="col-md-6 p-5">
                    <form onSubmit={handleSubmit} method="POST">
                        <div class="mb-3">
                            <label for="name" class="form-label">
                                Username
                            </label>
                            <input type="text" class="form-control" id="name"
                            name="username"
                            value={user.username}
                            onChange={handleInput}
                            />
                        </div>
                        <div class="mb-3">
                            <label
                                for="exampleInputEmail1"
                                class="form-label"
                            >
                                Email address
                            </label> 
                            <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                name="email"
                            value={user.email}
                            onChange={handleInput}
                            />
                        </div>
                        <div class="mb-3">
                            <label
                                for="exampleInputPassword1"
                                class="form-label"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                class="form-control"
                                id="exampleInputPassword1"
                                name="password"
                                value={user.password}
                                onChange={handleInput}
                            />
                        </div>
                        <div class="mb-3 form-check">
                            <input
                                type="checkbox"
                                class="form-check-input"
                                id="exampleCheck1"
                            />
                            <label class="form-check-label" for="exampleCheck1">
                                I A gree Terms and Conditions
                            </label>
                        </div>
                        <button type="submit" class="btn xx btn-outline-success w-100 mt-4 rounded-pill">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};
export default Register;
