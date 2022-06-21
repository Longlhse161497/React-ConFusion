import React from "react";
import { Form, FormGroup, Label, Input, Button, FormFeedback } from "reactstrap";

class BootstrapForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fullname:'',
            age:0,
            email:'',
            error:{
                fullname:'',
                age:'',
                email:''
            }
        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleInputBlur=this.handleInputBlur.bind(this);
    }
    handleInputChange(event){
        const nameControl = event.target.name;
        const value = event.target.value;
        this.setState({[nameControl]:value});
    }
    handleInputBlur(event){
        const nameControl = event.target.name;
        const value = event.target.value;
        const pattern = /^[a-zA-Z]+[@][a-zA-Z]+([.][a-zA-Z]+){1,2}$/;
        if(nameControl==="fullname" && value.length<3){
            this.setState({error: {...this.state.error, fullname:'Your fullname should be from 3 chars'}});
        }
        else if(nameControl==="age" && (parseInt(value)<18 || parseInt(value)>65)){
            this.setState({error: {...this.state.error, age:"Tour age must be from 18 to 65"}});
        }
        else if(nameControl==="email" && !pattern.test(value)){
            this.setState({error: {...this.state.error, email:"Your email is invalid"}});
        }
        else{
            this.setState({error: {...this.state.error, fullname:"", age:"", email:""}});
        }
    }
    handleSubmit(event){
        event.preventDefault();
        alert("You click the submit button");
    }
    render(){
        return(
            <div className="container">
                <div className="row row-content">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="fullname">Fullname:</Label>
                            <Input type="text" id="fullname" name="fullname" placeholder="fullname" value={this.state.fullname} 
                            valid={this.state.error.fullname===''} invalid={this.state.error.fullname!==''}
                            onChange={this.handleInputChange} onBlur={this.handleInputBlur}></Input>
                            <FormFeedback>{this.state.error.fullname}</FormFeedback>
                            <Label for="fullname">Age:</Label>
                            <Input type="text" id="age" name="age" placeholder="age" value={this.state.age} 
                            valid={this.state.error.age===''} invalid={this.state.error.age!==''}
                            onChange={this.handleInputChange} onBlur={this.handleInputBlur}></Input>
                            <FormFeedback>{this.state.error.age}</FormFeedback>
                            <Label for="fullname">Email:</Label>
                            <Input type="text" id="email" name="email" placeholder="email" value={this.state.email} 
                            valid={this.state.error.email===''} invalid={this.state.error.email!==''}
                            onChange={this.handleInputChange} onBlur={this.handleInputBlur}></Input>
                            <FormFeedback>{this.state.error.email}</FormFeedback>
                            <Input type="submit"></Input>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }
}

export default BootstrapForm;