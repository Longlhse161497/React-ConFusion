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
import { Provider } from 'react-redux';
import { ConfigureStore2 } from './Component/ConfigureStore2';
import { ConfigureStore } from './redux/configureStore';
import ContactPage from './Component/ContactPage';
import Counter from './Component/Counter';

const store = ConfigureStore();

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='App'>
            <Main></Main>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
