import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Header from './HeaderComponent';
import Footer from "./FooterComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { Redirect, Route, Switch } from "react-router-dom";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
            // selectedDish: null
        };
    }

    // onDishSelect(dishId){
    //     this.setState({selectedDish:dishId});
    // }

    render() {
        const HomePage = () => {
            return (
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]} 
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]} 
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}></Home>
            );
        }
        const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}></DishDetail>
            );
        }
        return (
            <div>
                <Header></Header>
                {/* <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)}></Menu> */}
                {/* <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}></DishDetail> */}
                <Switch>
                    <Route exact path="/home" component={HomePage}></Route>
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}></Menu>}></Route>
                    <Route exact path="/contactus" component={Contact}></Route>
                    <Route exact path="/aboutus" component={()=><About leaders={this.state.leaders}></About>}></Route>
                    <Route exact path="/menu/:dishId" component={DishWithId}></Route>
                    <Redirect to="/home"></Redirect>
                </Switch>
                <Footer></Footer>
            </div>
        );
    }
}

export default Main;