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

class SecretBack extends Component {
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
            <div className='seceretbackup'>
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
                                        <div className="col-lg-7">
                                            <div className="lower-cont">
                                                <Link className='lower-c' to='#'><h5 className=""><span>&#60;</span>Back</h5></Link>
                                                <h1>Secret Backup<br></br>Phrase</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br></br> do eiusmod tempor incididunt ut labore et dolore magna<br></br> aliqua. Ut enim ad minim veniam, quis nostrud</p>
                                                <p>WARNING: Never disclose your backup phrase, Anyone with this<br></br> phrase can take your ether forever.</p>
                                                <div className="codes">
                                                    <p>parent dwarf scorpion target rifle grant have stumble life text amused wrap</p>
                                                </div>
                                                <div className="buttons">
                                                    <button type="button">Remind me later</button>
                                                    <Link className='' to='/confirmsecret'> <button className="button-next" type="button">Next</button></Link> 
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="border-r">
                                                <p className="tip">Tip:</p>
                                                <p className="store">Store this phrase in a password manager like 1Password.</p>
                                                <p className="write"> Write this phrase on a piece of paper and store in a secure location. If you want even more security, write it down on multiple pieces of paper and store each in 2 - 3 different locations. </p>
                                                <p className="memories">Memorize this phrase.</p>
                                                <Link className='lower-c' to='#'><p className="linknnn">Download this Secret Backup Phrase and keep it stored safely on an external encrypted hard drive or storage medium.</p></Link>
                                                
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

export default connect(mapStateToProps, mapDispatchToProps)(SecretBack);