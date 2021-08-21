import EventBus from "eventing-bus";
import React, { Component } from 'react';
import Error from '@material-ui/icons/Error';
import { createBrowserHistory } from "history";
import { ToastContainer, toast } from 'react-toastify';
import CheckCircle from '@material-ui/icons/CheckCircle';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Welcome from './welcome';
import NewToMetamask from './new-to-metamask';
import CreatePassword from './createpassword';
import RecovryPhrase from './recoveryphrase';
import SecureWallet from './secure-wallet';
import SecretBack from './secretbackup';
import ConfirmSecret from './confirm-secert';
// import '../static/css/style.css';
import '../static/css/style.scss';

import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import 'font-awesome/css/font-awesome.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css'; 
import 'owl.carousel/dist/assets/owl.theme.default.css';
import newToMetamask from "./new-to-metamask";

const hist = createBrowserHistory();
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  };

  componentDidMount() {
    EventBus.on('tokenExpired', () => this.props.logout());
    EventBus.on('error', (e) => toast.error(() => <div> <Error /> {e}</div>));
    EventBus.on('success', (e) => toast.success(() => <div> <CheckCircle /> {e}</div>));
  };

  render() {

    return (
      <div>
        
        <ToastContainer
          closeOnClick
          position="bottom-left"
        />
        <Router history={hist}>
          <Switch>
            <Route exact path='/' component={props => <Welcome {...props} />} />
            <Route exact path='/landing' component={props => <Welcome {...props} />} />
            <Route exact path='/newtometamask' component={props => <NewToMetamask {...props} />} />
            <Route exact path='/createpassword' component={props => <CreatePassword {...props} />} />
            <Route exact path='/recoveryphrase' component={props => <RecovryPhrase {...props} />} />
            <Route exact path='/securewallet' component={props => <SecureWallet {...props} />} />
            <Route exact path='/secretbackup' component={props => <SecretBack {...props} />} />
            <Route exact path='/confirmsecret' component={props => <ConfirmSecret {...props} />} />
          </Switch>
        </Router>
      
      </div>
    );
  }
}

export default App;