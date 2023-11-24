import React, { Component, } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./Question";
import qBank from "./QuestionBank";
import Score from "./Score";
import Navbar from "./Navbar";
//import "./Exam.css";

class Exam extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            questionBank: qBank,
            currentQuestion: 0,
            selectedOption: "",
            score: 0,
            quizEnd: false,
        };
    }
 
    handleOptionChange = (e) => {
        this.setState({ selectedOption: e.target.value });
    };
 
    handleFormSubmit = (e) => {
        e.preventDefault();
        this.checkAnswer();
        this.handleNextQuestion();
    };
 
    checkAnswer = () => {
        const { questionBank, currentQuestion, selectedOption, score } = this.state;
        if (selectedOption === questionBank[currentQuestion].answer) {
            this.setState((prevState) => ({ score: prevState.score + 1 }));
        }
    };
 
    handleNextQuestion = () => {
        const { questionBank, currentQuestion } = this.state;
        if (currentQuestion + 1 < questionBank.length) {
            this.setState((prevState) => ({
                currentQuestion: prevState.currentQuestion + 1,
                selectedOption: "",
            }));
        } else {
            this.setState({
                quizEnd: true,
            });
        }
    };
 
    render() {
        const { questionBank, currentQuestion, selectedOption, score, quizEnd } =
            this.state;
        return (
            <div>
                <Navbar/>
            <div className="App d-flex flex-column align-items-center justify-content-center">
                <h1 className="app-title">QUIZ APP</h1>
                {!quizEnd ? (
                    <Question
                        question={questionBank[currentQuestion]}
                        selectedOption={selectedOption}
                        onOptionChange={this.handleOptionChange}
                        onSubmit={this.handleFormSubmit}
                    />
                ) : (
                    <Score
                        score={score}
                        onNextQuestion={this.handleNextQuestion}
                        className="score"
                    />
                )}
            </div>
            </div>
        );
    }
}
 
export default Exam