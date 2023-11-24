import React, {useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import './Ticketraise.css';
function Ticketraise() {
    let navigate = useNavigate();

    const [ticket, setTicket] = useState({
        username: "",
        email: "",
        issue: "",
    });

    const { username, email, issue } = ticket;

    const onInputChange = (e) => {
        setTicket({ ...ticket, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/tic/a1/ticket", ticket);
        navigate("/home");
    };

    return (
        <div>
            <Navbar />
            <div className="py-20 container">
                
                <div className="row">
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <h2 className="text-center m-4">Any Issues</h2>

                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="mb-3">
                                <label htmlFor="UserName" className="form-label">
                                    UserName
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter your name"
                                    name="username"
                                    value={username}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter your e-mail address"
                                    name="email"
                                    value={email}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Issue" className="form-label">
                                    Issue
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter your Issue"
                                    name="issue"
                                    value={issue}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <button type="submit" className="btn btn-outline-primary ml-60">
                                Submit
                            </button>
                            <Link className="btn btn-outline-danger mx-2" to="/home">
                                Cancel
                            </Link>
                        </form>
                    </div>
                   
                </div>
             
            </div>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8vjXTrfV8Ba0Ghy6nEsyP-5C5vwbQRZHtCw&usqp=CAU" id="issueimg"/>
        </div>

    );
}
export default Ticketraise