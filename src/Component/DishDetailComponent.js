import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

function renderDishes({dish}){
    return(
        <div className="col-12 col-sm-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name}>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardTitle>{dish.description}</CardTitle>
                    </CardBody>
                </CardImg>
            </Card>
        </div>
    );
}

function renderComments({comments}){
    const comment=comments.map((item)=>{
        return(
            <div key={item.id}>
                <p>{item.comment}</p>
                <p>{item.author}</p>
            </div>
        );  
    });
    return(
        <div className="col-12 col-sm-5 text-left">
            <h2>Comments</h2>
            {comment}
        </div>
    );
}

const DishDetail=(props)=>{
    return(
        <div className="container">
            <div className="row">
                <renderDishes dish={props.dish}></renderDishes>
                <renderComments comments={props.dish.comments}></renderComments>
            </div>
        </div>
    );
}

export default DishDetail;