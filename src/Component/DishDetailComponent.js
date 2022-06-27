import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";

function RenderDish({ dish }) {
    return (
        <div>
            <Card>
                <CardImg top src={dish.image} alt={dish.name}></CardImg>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardTitle>{dish.description}</CardTitle>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({ comments }) {
    const comment = comments.map((item) => {
        return (
            <div key={item.id}>
                <p>{item.comment}</p>
                <p>{item.author}</p>
            </div>
        );
    });
    return (
        <div>
            <h2>Comments</h2>
            {comment}
        </div>
    );
}

class DishDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.dish !== null) {
            const dish = this.props.dish;
            const comments = this.props.comments;
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{dish.name}</h3>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={dish}></RenderDish>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={comments}></RenderComments>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;