import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.dish != null) {
            const comment = this.props.dish.comments.map((item) => {
                return (
                    <div>
                        <p>{item.comment}</p>
                        <p>{item.author}</p>
                    </div>
                );
            });
            const dish=this.props.dish;
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-5">
                            <Card>
                                <CardImg top src={dish.image} alt={dish.name}></CardImg>
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardTitle>{dish.description}</CardTitle>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-sm-7">
                            <h2>Comments</h2>
                            {comment}
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
}

export default DishDetail;