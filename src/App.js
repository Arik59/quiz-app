import React, { Component }from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import qBank from './Components/QuestionBank';
import Question from './Components/Question';
import Options from './Components/Options';
import Score from './Components/Options';

function App() {
  constructor(props) {
    super(props)
    this.state = {
      questionBank : qBank,
      currentQuestion : 0,
      selectedOption: "",
      score: 0,
      quizEnd: false,
    };
  }

  handleOptinoChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.checkAnswer();
    this.handleNextQuestion();
  }

  checkAnswer = () => {
    const {questionBank, currentQuestion, selectedOption, score} = this.state;
    if (selectedOption === questionBank[currentQuestion].answer){
      continue
    }
  }

  handleNextQuestion = () => {
    const { questionBank, currentQuestion } = this.state;
    if (currentQuestion + 1 <= questionBank.length){
      this.setState((prevState) => ({
        currentQuestion : prevState.currentQuestion + 1,
        selectedOption: "",
      }));
    } else {
      this.setState({
        quizEnd: true
      })
    }
  }
  render(){

    const {questionBank, currentQuestion, selectedOption, score, quizEnd} = this.state

    return (
      <div className="App">
        <h1>Quiz</h1>
        {!quizEnd ? (
          <Question
          question={}
          selectedOption={}
          onOptionChange={}
          onSubmit={}
          />
        ) : (
          <Score/>
        )}
      </div>
    )
  }
}

export default App;
