import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import Home from "./Home";
import Header from './HeaderComponent';
import Footer from "./FooterComponent";
import {DISHES} from "../shared/dishes";
import { Redirect, Route, Switch } from "react-router-dom";

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            dishes: DISHES,
            // selectedDish: null
        };
    }

    // onDishSelect(dishId){
    //     this.setState({selectedDish:dishId});
    // }

    render(){
        return(
            <div>
                <Header></Header>
                {/* <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)}></Menu> */}
                {/* <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}></DishDetail> */}
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}></Menu>}></Route>
                    <Redirect to="/home"></Redirect>
                </Switch>
                <Footer></Footer>
            </div>
        );
    }
}

export default Main;