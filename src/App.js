import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';
import Hello from './Component/Hello';
import {Hello2} from "./Component/Hello2";
import Comment from "./Component/Comment";
import Account from './Component/Account';
import Store from './Component/Store';
import Stock from './Component/Stock';
import Warning from './Component/Warning';
import Form from './Component/Form';
import Garage from './Component/Garage';
import Welcome from './Component/Welcome';
import Car from './Component/Car';
import Menu from './Component/MenuComponent';

import {Navbar, NavbarBrand} from 'reactstrap';
import { DISHES } from './shared/dishes';

const comment={
  date: new Date(),
  text: 'welcome to react component',
  author:{
    name: 'HaiLong',
    avatarUrl: './logo192.png'
  }
};

const cities=['Jaipur','Jodpur','Udaipur','Pune','Chandigarh'];
const names=cities.map((c, index)=>{return <li key={index}>{c}</li>});

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      dishes: DISHES
    }
  }
  render(){
    return(
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}></Menu>
        {/* <Comment date={comment.date} text={comment.text} author={comment.author}></Comment> */}
        {/* <Account/> */}
        {/*<Store/>
        <Store/>*/}
        {/* <Stock/> */}
        {/*<Warning/>*/}
        {/*<Form/>*/}
        {/*<ul>
          {names}
        </ul>*/}     
        {/* <Garage/> */}
        {/* <Welcome name="Long"/>
        <Welcome name="Thuy Kieu"/> */}
        {/* <Car></Car> */}
      </div>
    );
  }
}

// function formatName(user){
//   return user.firstname + '' + user.lastname;
// }

// const user= {
//   firstname: 'Harper',
//   lastname: 'Perez'
// };

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );

// function App() {
//   const data={id:"1", name:"Thi No" };
//   return (
//     <div className="App">
//       <h1>{element}</h1>
//     </div>

//     <div>
//       <Hello msg="em chan co" user={data}/>
//       <Hello2 msg="ok" />
//     </div> 
//   );
// }

export default App;
