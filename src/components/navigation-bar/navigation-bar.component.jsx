import logo from '../../assets/logo.svg'
import './navigation-bar.style.scss'
import background from '../../assets/bg-tablet-pattern.svg';
import { motion } from 'framer-motion';
export const NavigationBar = () => {
    return (
        <div className='navigation-bar'>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className='links-holder'>
                <span className='link'>Pricing</span>
                <span className='link'>Product</span>
                <span className='link'>About Us</span>
                <span className='link'>Careers</span>
                <span className='link'>Community</span>
            </div>
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
            <div className='background-style1'>
                <img src={background} alt="background" />
            </div>
            <div className="background-style2">
                <img src={background} alt="background" />
            </div>
        </div>
    )
}