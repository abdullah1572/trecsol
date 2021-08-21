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

class NewToMetamask extends Component {
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
            <div className='newtometa'>
                <section className="header-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-7 col-lg-10 col-md-12 col-12 m-auto">
                                <div className="main-head">
                                    <div className="image">
                                        <img src={require("../../static/images/trecsol/dogoo.png")} className="" alt="" />
                                        <p>Meta Mask</p>
                                    </div>

                                    <h1 className="text-center">New to MetaMask?</h1>
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="box-meta response">
                                                <img src={require("../../static/images/trecsol/download.png")} className="" alt="" />
                                                <h4>No, I already have a Secret Recovery Pharse</h4>
                                                <p>Import your existing wallet using a secret Recovery Pharse</p>
                                                <Link className='' to='/recoveryphrase'><button type="button">Import wallet</button></Link>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="box-meta">
                                                <img src={require("../../static/images/trecsol/pluscircle .png")} className="" alt="" />
                                                <h4>Yes,let's get set up</h4>
                                                <p>This will create a new wallet and Secret Recovey Pharse</p>
                                                <Link className='' to='/createpassword'><button type="button">Create a wallet</button></Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewToMetamask);