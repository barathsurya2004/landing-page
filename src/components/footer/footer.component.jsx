import './footer.style.scss';
import facebook from '../../assets/icon-facebook.svg';
import instagram from '../../assets/icon-instagram.svg';
import pinterest from '../../assets/icon-pinterest.svg';
import twitter from '../../assets/icon-twitter.svg';
import youtube from '../../assets/icon-youtube.svg';
import logo1 from '../../assets/logo-dark.svg';
import { motion } from 'framer-motion';
const Footer = () => {
    return (
        <div className="footer">
            <div className="banner">
                <h2>Simplify how your team works today.</h2>
                <motion.div className='get-started'
                    initial={{
                        scale: 1
                    }}
                    whileHover={{
                        scale: 1.05
                    }}
                    whileTap={{
                        scale: 0.95
                    }}
                >
                    Get Started
                </motion.div>
            </div>
            <div className="footer-links">
                <div className="icons">
                    <div className="logo">
                        <img src={logo1} alt="logo" className="logo-img" />
                    </div>
                    <div className="media-links">
                        <div className='links'>
                            <div className='link'>
                                <img src={facebook} alt="facebook" />
                            </div>
                            <div className='link'>
                                <img src={instagram} alt="instagram" />
                            </div>
                            <div className='link'>
                                <img src={pinterest} alt="pinterest" />
                            </div>
                            <div className='link'>
                                <img src={twitter} alt="twitter" />
                            </div>
                            <div className='link'>
                                <img src={youtube} alt="youtube" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='add-links'>
                    <span className='link'>Home</span>
                    <span className='link'>Pricing</span>
                    <span className='link'>Products</span>
                    <span className='link'>About Us</span>
                    <span className='link'>Careers</span>
                    <span className='link'>Community</span>
                    <span className='link'>Privacy Policy</span>
                </div>
                <div className='subscription'>
                    <div className='input-sub'>
                        <input type="email" placeholder='Updates in your inbox' />
                        <motion.div className='get-started'
                            initial={{
                                scale: 1
                            }}
                            whileHover={{
                                scale: 1.05
                            }}
                            whileTap={{
                                scale: 0.95
                            }}
                        >
                            Go
                        </motion.div>
                    </div>
                    <span>Copyright 2023. All rights reserved</span>
                </div>
            </div>
        </div>
    )
}


export default Footer;