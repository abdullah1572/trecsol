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

class ConfirmSecret extends Component {
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
            <div className='confirm-secret'>
                <section className="header-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-7 m-xl-auto col-lg-11 offset-lg-2 col-md-10 m-md-auto col-12 ">
                                <div className="main-head">
                                    <div className="image">
                                        <img src={require("../../static/images/trecsol/dogoo.png")} className="" alt="" />
                                        <p>Meta Mask</p>
                                    </div>
                                    <div className="lower-cont">
                                        <Link className='lower-c' to='#'><h5 className=""><span>&#60;</span>Back</h5></Link>
                                        <h1>Confirm your Secret Backup phrase</h1>
                                        <p>Please select each phrase in order to make sure it is correct.</p>
                                    </div>
                                    <div className="button-code-select">
                                        <button type="button">amused</button>
                                        <button type="button">dawart</button>
                                        <button type="button">grant</button>
                                        <button type="button">have</button>
                                        <button type="button">life</button>
                                        <button type="button">parent</button>
                                        <button type="button">rifle</button>
                                        <button type="button">scorpion</button>
                                        <button type="button">stumble</button>
                                        <button type="button">target</button>
                                        <button type="button">text</button>
                                        <button type="button">wrap</button>
                                    </div>
                                    <div className="button-code-se">
                                        <button type="button">amused</button>
                                        <button type="button">dawart</button>
                                        <button type="button">grant</button>
                                        <button type="button">have</button>
                                        <button type="button">life</button>
                                        <button type="button">parent</button>
                                        <button type="button">rifle</button>
                                        <button type="button">scorpion</button>
                                        <button type="button">stumble</button>
                                        <button type="button">target</button>
                                        <button type="button">text</button>
                                        <button type="button">wrap</button>
                                    </div>
                                    <Link className='' to='/secretbackup'><button className="confirm-button" type="button">Confirm</button></Link>
                                    
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

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmSecret);