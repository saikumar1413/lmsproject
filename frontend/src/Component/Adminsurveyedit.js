import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
//import Navbaradmin from "./Navbaradmin";
function Adminsurveyedit() {
    const [survey, setUser] = useState({
        username: "",
        email: "",
        profession: "",
        interest: "",
        domain: "",
    });
 
    const { id } = useParams();
 
    useEffect(() => {
        loadUser();
    }, []);
 
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/sur/v1/survey/${id}`);
        setUser(result.data);
    };
    return (
        <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>
 
          <div className="card">
            <div className="card-header">
              Details of user id : {survey.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>UserName:</b>&nbsp;&nbsp;
                  {survey.username}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>&nbsp;&nbsp;
                  {survey.email}
                </li>
 
                <li className="list-group-item">
                  <b>Profession:</b>&nbsp;&nbsp;
                  {survey.profession}
                </li>
                <li className="list-group-item">
                  <b>interest:</b>&nbsp;&nbsp;
                  {survey.interest}
                </li>
                <li className="list-group-item">
                  <b>Domain:</b>&nbsp;&nbsp;
                  {survey.domain}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/adminsurvey"}>
            Previous
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Adminsurveyedit