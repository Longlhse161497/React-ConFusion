import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Component/MenuComponent';
import Main from './Component/MainComponent';
import Layout from './Component/Layout';
import Home from './Component/Home';
import Blogs from './Component/Blogs';
import Contact from './Component/Contact';
import NoPage from './Component/NoPage';
import Profile from './Component/Profile';
import MyForm from './Component/MyForm';
import MyUncontrolledForm from './Component/MyUncontrolledForm';
import BootstrapForm from './Component/BootstrapForm';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className='App'>
            <Main></Main>
          </div>
        </BrowserRouter>  
      </div>
    );
  }
}

export default App;
