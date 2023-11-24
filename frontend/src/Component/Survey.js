import { useNavigate } from "react-router-dom";
import './Survey.css';
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
function Survey() {
    let navigate = useNavigate();

    const [survey, setUser] = useState({
        username: "",
        email: "",
        interest: "",
        profession: "",
        domain: "",
    });

    const { username, email, interest, profession, domain } = survey;

    const onInputChange = (e) => {
        setUser({ ...survey, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/sur/v1/survey", survey);
        navigate("/home");
    };
    return (
        <div>
            <center>
                <div>
                    <Navbar/>
                    <div id="heading">
                        <h2>“Education is one thing no one can take away from you.”</h2>
                    </div>
                </div>
                <div id="background">

                    <form onSubmit={(e) => onSubmit(e)} class="s-form">
                        <h1 id="shead">Survey</h1>
                        <div class="style1">
                            <label id="input-head">Enter your UserName</label>
                            <input type="text" placeholder="Enter your username."
                                name="username"
                                value={username}
                                onChange={(e) => onInputChange(e)}
                                className="input-box"
                            />
                            <label id="input-head1">Enter Your Email</label>
                            <input type="email" placeholder="Enter your email."
                                name="email"
                                value={email}
                                onChange={(e) => onInputChange(e)}
                                className="input-box"
                            />
                            <label id="input-head2">Interests</label>
                            <input type="interest" placeholder="Enter your interests."
                                name="interest"
                                value={interest}
                                onChange={(e) => onInputChange(e)}
                                className="input-box"
                            />
                            <label id="input-head3">Profession</label>
                            <input type="text" placeholder="Enter your profession."
                                name="profession"
                                value={profession}
                                onChange={(e) => onInputChange(e)}
                                className="input-box"
                            />
                            <label id="input-head4">In Which Domain are you Interested</label>
                            <input type="text" placeholder="In Which Domain are you Interested"
                                name="domain"
                                value={domain}
                                onChange={(e) => onInputChange(e)}
                                className="input-box"
                            />
                        </div>
                        <button type="submit">
                            Submit
                        </button>
                    </form>
                    <img src="https://tek-ritr.com/wp-content/uploads/2018/06/AboutUs2016-300x200.jpg" id="surimg" />
                </div>
            </center >
        </div>
    )
}

export default Survey;