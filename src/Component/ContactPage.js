import React from "react";
import SimpleForm from "./SimpleForm";

class ContactPage extends React.Component{
    submit = values =>{
        console.log(values)
    }
    render(){
        return(
            <SimpleForm onSubmit={this.submit}></SimpleForm>
        );
    }
}

export default ContactPage;