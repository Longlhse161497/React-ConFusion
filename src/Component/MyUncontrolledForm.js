import React from "react";
import { Form, Input } from "reactstrap";
class MyUncontrolledForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCase: false
        }
        this.changeIsCase = this.changeIsCase.bind(this);
    }
    changeIsCase() {
        const value = this.inputText.value;
        this.setState({ isCase: !this.state.isCase });
        if (this.state.isCase) {
            this.inputText.value = value.toUpperCase();
        }
        else {
            this.inputText.value = value.toLowerCase();
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row m-5">
                    <div className="col-2 col-sm-2">
                        <Form>
                            <p><Input type="text" innerRef={inputControl => this.inputText = inputControl} placeholder="input a text"></Input></p>
                            <p><Input type="button" onClick={this.changeIsCase} value="toggle case" className="btn-success"></Input></p>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyUncontrolledForm;