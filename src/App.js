import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Component/MenuComponent';
import Main from './Component/MainComponent';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <div className='App'>
          <Main></Main>
        </div>
      </div>
    );
  }
}

export default App;
