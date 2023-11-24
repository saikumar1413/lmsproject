import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbaradmin from "./Navbaradmin";
function Issueedit() {
    let navigate = useNavigate();

    const { id } = useParams();

    const [user, setUser] = useState({
        fullname: "",
        email: "",
        mobile: "",
        username: "",
        password: "",
    });

    const { fullname, email, mobile, username, password } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/a1/user/${id}`, user);
        navigate("/adminhome");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/api/a1/user/${id}`);
        setUser(result.data);
    };

    return (
        <div>
            <Navbaradmin />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <h2 className="text-center m-4">Edit User</h2>

                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="mb-3">
                                <label htmlFor="FullName" className="form-label">
                                    FullName
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter your name"
                                    name="fullname"
                                    value={fullname}
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
                                    placeholder="Enter your username"
                                    name="email"
                                    value={email}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Mobile" className="form-label">
                                    Mobile
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter your e-mail address"
                                    name="mobile"
                                    value={mobile}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="UserName" className="form-label">
                                    UserName
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter your e-mail address"
                                    name="username"
                                    value={username}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Password" className="form-label">
                                    Password
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter your e-mail address"
                                    name="password"
                                    value={password}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <button type="submit" className="btn btn-outline-primary">
                                Submit
                            </button>
                            <Link className="btn btn-outline-danger mx-2" to="/adminhome">
                                Cancel
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Issueedit

