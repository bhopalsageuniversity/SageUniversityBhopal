import React from 'react';


import './Footer.css'
import { Link } from 'react-router-dom';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaSquareInstagram, FaSquareWhatsapp } from 'react-icons/fa6';
import { IoLogoLinkedin, IoLogoYoutube } from 'react-icons/io5';
const Footer = () => {
    return (
        <div>
            <a
                href="https://wa.me/2348100000000"
                class="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp style={{ fontSize: "37px", margin: "-5px 0px 0px 0px" }} />

            </a>

            <div class="footer">
                <div className=''>

                    <section class="columns">

                        <div class="column footertop">
                            <a target="_blank" href="https://sageuniversity.edu.in/virtual-tour/index.htm" class="tran3s">
                                <img src="https://sageuniversity.edu.in/assets/360-view.svg"
                                    style={{ height: "50px", width: "auto" }} alt="SAGE University Bhopal" />
                            </a>
                            <p style={{ fontSize: "20px", margin: "0px " }}>Visit Campus Virtual Tour</p>
                        </div>

                        <div class="column">
                        </div>

                        <div class="column">
                            <div>
                                <Link to=''> <FaFacebook className='iconmedia' /></Link>
                                <Link to=''> <AiFillTwitterCircle className='iconmedia' /></Link>
                                <Link to=''> <FaSquareInstagram className='iconmedia' /> </Link>
                                <Link to=''> <IoLogoLinkedin className='iconmedia' /></Link>
                                <Link to=''> <IoLogoYoutube className='iconmedia' /></Link>
                                <Link to=''> <FaSquareWhatsapp className='iconmedia' /></Link>
                            </div>
                        </div>

                    </section>

                    <hr />

                </div>
                <div class="contentfooter">
                    <div class="servicesfooter">
                        <h4 className="footerh">Sister Concerns</h4>

                        <p className="footerp"> <Link to='' className="footera1"> The SAGE Group</Link></p>
                        <p className="footerp"> <Link to='' className="footera1">Agrawal Construction Co.</Link></p>
                        <p className="footerp"> <Link to='' className="footera1">SAGE Group of Institutions (SGI)</Link></p>
                        <p className="footerp"> <Link to='' className="footera1">SAGE International School</Link></p>
                        <p className="footerp"> <Link to='' className="footera1"> True SAGE Foundation</Link></p>
                        <p className="footerp"> <Link to='' className="footera1"> Agrawal Power Pvt. Ltd.</Link></p>
                        <p className="footerp"> <Link to='' className="footera1"> Apollo SAGE Hospital</Link></p>
                    </div>
                    <div class="social-mediafooter">
                        <h4 className="footerh">Admissions</h4>
                        <p className="footerp"> <Link to='' className="footera1">  Mandatory Disclosure</Link></p>

                        <p className="footerp"> <Link to='' className="footera1"> Anti-Ragging Affidavit </Link></p>
                        <p className="footerp"> <Link to='' className="footera1"> Fee Structure</Link></p>
                        <p className="footerp"> <Link to='' className="footera1"> Scholarship</Link></p>




                        <p className="footerp"> <Link to='' className="footera1">Privacy Policy </Link></p>
                        <p className="footerp"> <Link to='' className="footera1">Value Add Course </Link></p>

                    </div>
                    <div class="social-mediafooter">
                        <h4 className="footerh ">Quick Links</h4>
                        <p className="footerp"> <Link to='' className="footera1"> Virtual Tour</Link></p>
                        <p className="footerp"> <Link to='' className="footera1">  Contact Us</Link></p>

                        <p className="footerp"> <Link to='' className="footera1">  Feedback</Link></p>
                        <p className="footerp"> <Link to='' className="footera1"> Blog </Link></p>
                        <p className="footerp"> <Link to='' className="footera1"> FAQ</Link></p>
                        <p className="footerp"> <Link to='' className="footera1"> SAGE Talk
                        </Link></p>
                        <p className="footerp"> <Link to='' className="footera1"> Career</Link></p>



                    </div>
                    <div class="linksfooter">
                        <h4 className="footerh">Campuses</h4>
                        <p className="footerp"> <Link to='' className="footera1"> SAGE University - Indore</Link></p>
                        <h4 className="footergh">Academic Calender</h4>
                        <p className="footerp mb-3"> <Link to='' className="footera1"> Academic Calender</Link></p>

                        <p style={{ background: "#b91c1c", padding: "6px" }}>Last Update :- 01-05-24 11:46:12</p>

                    </div>
                    <div class="details">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14670.332427169335!2d77.511562!3d23.185411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c416baaaaaaab%3A0xa6a9ac378d4c458e!2sSanjeev%20Agrawal%20Global%20Educational%20(SAGE)%20University%20Bhopal!5e0!3m2!1sen!2sin!4v1714647427321!5m2!1sen!2sin"
                            width="300" height="250"
                            style={{ border: "0" }} allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <footer className='copyright'>
                    <hr />
                    Copyright 2024 ©<Link to="#" style={{ color: "#e7bb10" }}> SAGE University</Link>, The SAGE Group
                </footer>
            </div>
            <div className='marquee1'>
                <div class="row" >

                    <div class="col-xs-12 col-sm-2 navb23">
                        <div className='navb435'>
                           <Link to="" style={{fontWeight:"700",color:"#af1414"}}>HELP AND SUPPORT</Link>
                        </div>
                        
                    </div>

                    <div class="col-xs-12 col-sm-10 navb71 ">
                    <div class="marquee ">
                    <div>
                        <span>++++ this is a running text aka marquee using html &amp;  to the width</span>

                        <span>++++ this is a running text aka marquee using html &amp; css + text length is limited to the width</span>
                    </div>
                </div>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default Footer