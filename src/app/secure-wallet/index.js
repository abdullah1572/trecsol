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

class SecureWallet extends Component {
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
            <div className='securewallet'>
                <section className="header-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-7 m-xl-auto col-lg-11 m-lg-auto col-md-10 offset-md-1 col-12 ">
                                <div className="main-head">
                                    <div className="image">
                                        <img src={require("../../static/images/trecsol/dogoo.png")} className="" alt="" />
                                        <p>Meta Mask</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="lower-cont">
                                                <Link className='lower-c' to='#'><h5 className=""><span>&#60;</span>Back</h5></Link>
                                                <h1>Secure your wallet</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br></br> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                                                <video className="banner-video "
                                                    autoPlay loop muted controls
                                                >
                                                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                                </video>
                                                <Link className='' to='/secretbackup'><button type="button">Next</button></Link>
                                                
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="border-r">
                                                <h4>What is a recovery phrase</h4>
                                                <p>met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                                <h4>How do I save my recovery phrase?</h4>
                                                <p>met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                                <h4>Should l share my recovery phrase?</h4>
                                                <p>met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                                <p>met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                                            </div>
                                        </div>
                                    </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(SecureWallet);