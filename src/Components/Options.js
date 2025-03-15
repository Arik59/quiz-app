import React, {Component} from "react";

class Options extends Component {
    render() {
        const { options, selectOption, onOptionChange } = this.props

        return (
            <div className="options">
                {options.map((option, index) => (
                    <div key={index} className="form-check">
                    <input className="form-check-input" type="radio" name="option" value={option} checked={selectOption === option} onChange={onOptionChange}>
                    <label className="form-check-label">
                      {option}
                    </label>
                    </div>
                ))}
            </div>
        )
    }
}

export default Options;