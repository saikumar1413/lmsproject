import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbaradmin from "./Navbaradmin";
function Reportview() {
    const [user, setUser] = useState({
        fullname: "",
        email: "",
        mobile: "",
        username: "",
        password: "",
    });

    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/api/a1/user/${id}`);
        setUser(result.data);
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">User Details</h2>

                    <div className="card">
                        <div className="card-header">
                            <center>
                            <table>
                            Details of user id : {user.id}
                                <tr><td>FullName:</td><td><b>{user.fullname}</b></td></tr>
                                <tr><td>Email:</td><td><b>{user.email}</b></td></tr>
                                <tr><td>Mobile:</td><td><b>{user.mobile}</b></td></tr>
                                <tr><td>UserName:</td><td><b> {user.username}</b></td></tr>
                            </table>
                            </center>


                            {/* Details of user id : {user.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>FullName:</b>
                                    {user.fullname}
                                </li>
                                <li className="list-group-item">
                                    <b>Email:</b>
                                    {user.email}
                                </li>
                                <li className="list-group-item">
                                    <b>Mobile:</b>
                                    {user.mobile}
                                </li>
                                <li className="list-group-item">
                                    <b>UserName:</b>
                                    {user.username}
                                </li>
                            </ul> */}






                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/report"}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Reportview