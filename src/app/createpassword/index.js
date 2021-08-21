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

class CreatePassword extends Component {
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
            <div className='createpassword'>
                <section className="header-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-5 offset-xl-3 col-lg-10 offset-lg-2 col-md-10 offset-md-1 col-12 ">
                                <div className="main-head">
                                    <div className="image">
                                        <img src={require("../../static/images/trecsol/dogoo.png")} className="" alt="" />
                                        <p>Meta Mask</p>
                                    </div>
                                    <div className="lower-cont">
                                    <Link className='lower-c' to='#'><h5 className=""><span>&#60;</span>Back</h5></Link>
                                    <h1>Create Password</h1>
                                    <form>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="inputEmail4">New password (min 8 chars)</label>
                                                <input type="email" class="form-control" id="inputEmail4" />
                                            </div>
                                            <div class="form-group col-md-12">
                                                <label for="inputPassword4">Confirm password</label>
                                                <input type="password" class="form-control" id="inputPassword4" />
                                            </div>
                                        </div>
                                        <div className="checkbox">
                                            <div class="form-group">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                                    <label class="form-check-label" for="gridCheck">
                                                    I have read and agree to the<Link className='' to='#'><span>Term of use</span></Link>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <Link className='' to='/securewallet'><button type="button">Create</button></Link>
                                    </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreatePassword);