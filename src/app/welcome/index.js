import EventBus from "eventing-bus";
import { connect } from "react-redux";
import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { Send, CheckCircle, Info, Error, Done, Facebook, Twitter, Instagram, LinkedIn, LiveTvRounded } from '@material-ui/icons';
import OwlCarousel from 'react-owl-carousel';
import './index.scss';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  };
  render() {
    const owl_option = {
      margin: 40,
      nav: true,
      dots: true,
      dotsEach: true,
      loop: true,
      infinite: true,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 1,
        },
        600: {
          items: 2,
        },
        700: {
          items: 2,
        },
        1000: {
          items: 3,
        },
        1200: {
          items: 4,
        }
      },
    };

    return (
      <div className='landing-nft'>
        <section className="header-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-5 col-lg-7 col-md-10 col-12 m-auto">
                <div className="main-head">
                  <img src={require("../../static/images/trecsol/dogoo.png")} className="" alt="" />
                  <h1>Welcome to MetaMask</h1>
                  <p>Connecting you to Ethereum and the Decentalized <br></br> Web</p>
                  <p>Were happy to see you</p>
                  <Link className='' to='/newtometamask'><button type="button">Get Started</button></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = {
};

const mapStateToProps = ({ }) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);