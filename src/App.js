import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';
import Hello from './Component/Hello';
import {Hello2} from "./Component/Hello2";

import {Navbar, NavbarBrand} from 'reactstrap';

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
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
