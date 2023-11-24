import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbaradmin from "./Navbaradmin";
import './Reportgeneration.css';
function Reportgeneration() {

    const [users, setUsers] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/api/a1/users");
        setUsers(result.data);
    };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/api/a1/user/${id}`);
        loadUsers();
    };

    return (
        <center>
            <div>
                <Navbaradmin />
                <div className="Rcontainer" >
                  <b>User data Report</b>  
                    <div className="py-6">
                        <table border="2" className="table_">
                            <thead>
                                <tr>
                                    <th scope="col" className="tcolumn">S.N</th>
                                    <th scope="col" className="tcolumn">FullName</th>
                                    <th scope="col" className="tcolumn">Email</th>
                                    <th scope="col" className="tcolumn">Mobile</th>
                                    <th scope="col" className="tcolumn">UserName</th>
                                    <th scope="col" className="tcolumn">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr className="trow">
                                        <th scope="row" key={index}>
                                            {index + 1}
                                        </th>
                                        <td>{user.fullname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.mobile}</td>
                                        <td>{user.username}</td>
                                        <td>
                                            <Link
                                                className="btn btn-outline-primary mx-2"
                                                to={`/reportview/${user.id}`}
                                            >
                                                View
                                            </Link>
                                            <Link
                                                className="btn btn-outline-primary mx-2"
                                                to={`/edituserdetails/${user.id}`}
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                class="w px-12 py-2 text-sm font-end tracking-wide text-white capitalize transition-colors md:text-center duration-300 transform bg-blue-400 rounded-md hover:bg-blue-400"
                                                onClick={() => deleteUser(user.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </center>
    );
}
export default Reportgeneration