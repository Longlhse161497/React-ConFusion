import React from "react";
import { reduxForm, Field } from "redux-form";

const SimpleForm = props => {
    const {handleSubmit} = props
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Firstname:</label>
                <Field name="firstname" component="input" type="text" placeholder="Firstname"></Field>
            </div>
            <div>
                <label>Lastname:</label>
                <Field name="lastname" component="input" type="text" placeholder="Lastname"></Field>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default reduxForm({form:'simple'})(SimpleForm);