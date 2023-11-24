import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbaradmin from "./Navbaradmin";
import './Issuereceived.css';
function Issuesreceived() {
    const [tickets, setTicket] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/tic/a1/tickets");
        setTicket(result.data);
    };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/tic/a1/ticket/${id}`);
        loadUsers();
    };

    return (
        <center>
            <div>
                <Navbaradmin />
                <div className="Issuecontainer">
                    Issues Raised by Users
                    <div className="py-6">
                        <table className="table-border-shadow">
                            <thead>
                                <tr>
                                    <th scope="col" className="issuecolumn">S.N</th>
                                    <th scope="col" className="issuecolumn">UserName</th>
                                    <th scope="col" className="issuecolumn">Email</th>
                                    <th scope="col" className="issuecolumn">Issue</th>
                                    <th scope="col" className="issuecolumn">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tickets.map((ticket, index) => (
                                    <tr >
                                        <th scope="row"  key={index} className="datacolumn">
                                            {index + 1}
                                        </th>
                                        <td className="datacolumn">{ticket.username}</td>
                                        <td className="datacolumn">{ticket.email}</td>
                                        <td className="datacolumn">{ticket.issue}</td>
                                        <td className="datacolumn">
                                            <button
                                                class="w px-12 py-2 text-sm font-end tracking-wide text-white capitalize transition-colors md:text-center duration-300 transform bg-blue-400 rounded-md hover:bg-blue-400"
                                                onClick={() => deleteUser(ticket.id)}
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
export default Issuesreceived