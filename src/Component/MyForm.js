import React from "react";

class MyForm extends React.Component {
    constructor() {
        super();
        this.state = {
            text: ''
        }
    }
    handleOnChange = (e) => {
        this.setState({ text: e.target.value })
    }
    handleOnSubmit = (e) => {
        e.preventDefault()
        alert('Text was submitted: ' + this.state.text)
        this.setState({ text: '' })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" value={this.state.text} onChange={this.handleOnChange}></input>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}

export default MyForm;