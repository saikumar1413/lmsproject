import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbaradmin from "./Navbaradmin";
import './Adminsurvey.css'; 
export default function Adminsurvey() {
    const [surveys, setSurvey] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/sur/v1/surveys");
        setSurvey(result.data);
    };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/sur/v1/survey/${id}`);
        loadUsers();
    };

    return (
        <div>
            <Navbaradmin />
            <div className="container">
                <div className="py-6">
                    <center>
                        <table className="table-border-shadow1" >
                            <thead>
                                <tr>
                                    <th scope="col" className="surveyColumn">S.N</th>
                                    <th scope="col" className="surveyColumn">Username</th>
                                    <th scope="col" className="surveyColumn">Email</th>
                                    <th scope="col" className="surveyColumn">Profession</th>
                                    <th scope="col" className="surveyColumn">Interests</th>
                                    <th scope="col" className="surveyColumn">DomainIntrested</th>
                                    <th scope="col" className="surveyColumn">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {surveys.map((survey, index) => (
                                    <tr>
                                        <th scope="row" className="surveydata" key={index}>
                                            {index + 1}
                                        </th>
                                        <td className="surveydata">{survey.username}</td>
                                        <td className="surveydata">{survey.email}</td>
                                        <td className="surveydata">{survey.profession}</td>
                                        <td className="surveydata">{survey.interest}</td>
                                        <td className="surveydata">{survey.domain}</td>
                                        <td className="surveydata">
                                            <Link
                                                className="btn btn-primary mx-2"
                                                to={`/adminview/${survey.id}`}
                                            >
                                                View
                                            </Link>
                                            <button
                                                class=" px-12 py-2 text-sm font-end tracking-wide text-white capitalize transition-colors md:text-center duration-300 transform bg-blue-400 rounded-md hover:bg-blue-400"
                                                onClick={() => deleteUser(survey.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </center>
                </div>
            </div>
        </div>
    );
}
