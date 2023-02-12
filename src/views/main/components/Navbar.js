import React from 'react';
import gsap from "gsap";
import logo from 'assets/img/logo.png'
// import Slogo from '../Slogo.png';
import Slogo1 from 'assets/img/logo.png';
// import logoBW from '../logoBW.svg';
import '../CSS/Navbar.css';
import { Link} from "react-router-dom";

function Navbar() {


    React.useEffect(() => {
        const open = document.querySelector('.container');
        // const badis = document.querySelector('.divbody');
        const close = document.querySelector('.close');
        const navImgs = document.querySelector('.navImgs');
        var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
        open.addEventListener('click', () => {
            if (tl.reversed()) {
                tl.play();
            } else {
                tl.to('nav', { right: 0 })
                    .to('nav', { height: '100vh' }, '-=.1')
                    .to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
                    .to('.navlogoBW', { opacity: 1 }, "-=1")
                    .to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .1 }, '-=.3')
                    .to('nav h2', { opacity: 1 }, '-=1');
            }
            setTimeout(() => {
                navImgs.classList.add('navImgOpen');
                // badis.classList.add('navOpen');

            }, 1500);
        });

        close.addEventListener('click', () => {
            navImgs.classList.remove('navImgOpen');
            tl.reverse();
            // badis.classList.remove('navOpen');
            navImgs.classList.remove('navImgOpen');

        });
    });


    return (
        <div style={{ overflow: "hidden" }}>
            <div className='NavHead'>
                <div className="container">
                    <div className="bars"></div>
                </div>
                <div className='navlogo'>
                    <img src={logo} alt="" />

                </div>
            </div>

            <nav className='nav' style={{ overflow: "hidden" }}>
                <img style={{height:"100vh",marginTop:"5%",position:"relative",opacity:"0"}} className="navImgs" src={Slogo1} alt="" />
                <div className='navlogoBW'>
                    <img src={logo} alt="" />

                </div>
                <div className="close">
                    <div></div>

                    <ul>
                        <li><a href="#home">Home()</a></li>
                        <li><a href="#about">About()</a></li>
                        <li><a href="#timeline">Qualifications()</a></li>
                        <li><a href="#skills">Skills()</a></li>
                        <li><a href="#contact">ContactUs()</a></li>
                    </ul>
                </div>
            </nav>
            <div className='auth'> 
            <Link to={`/auth/sign-in/default`}><button className='auth-btn' href="/auth/sign-in"><p class="hover-underline-animation">Login</p></button></Link>
            <Link to={`/auth/sign-up/default`}><button className='auth-btn'><p class="hover-underline-animation" style={{color:"#333"}}>Signup</p></button></Link>
             </div>
           
        </div>
    );
}

export default Navbar;
