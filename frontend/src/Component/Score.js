import React, { useState, Component } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
//import './Exam.css';
class Score extends Component {
    render() {
        const { score, onNextQuestion } = this.props;

        return (
            <div>
                <h2>Results</h2>
                <h4>Your score: {score}</h4>
                <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/webinar`}
                >
                    next
                </Link>
            </div>
        );
    }
}

export default Score;