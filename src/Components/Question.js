import React, {Component} from "react";
import Options from "./Options"

class Question extends Component{
    render(){
        const {question, selectedOption, onOptionChange, onSubmit} = this.props;

        return (
            <div className="">
                <h3>№{question.id}</h3>
                <h5 className="mt-2">{question.question}</h5>
                <form onSubmit={onSubmit} className="">
                    <Options
                    options = {question.options}
                    selectedOption = {selectedOption}
                    onOptionChange = {onOptionChange}
                    />
                    <button type="submit" className="">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default Question;