import logo from '../../assets/logo.svg'
import './navigation-bar.style.scss'
import background from '../../assets/bg-tablet-pattern.svg';
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
            <div className='get-started'>
                Get Started
            </div>
            <div className='background-style1'>
                <img src={background} alt="background" />
            </div>
            <div className="background-style2">
                <img src={background} alt="background" />
            </div>
        </div>
    )
}