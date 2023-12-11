import illustration from '../../../assets/illustration-intro.svg';
import './top-element.styles.scss';

const TopElement = () => {
    return (
        <div className="element-container">
            <div className="element-info">
                <h1>Bring Everyone together to build better products</h1>
                <p>
                    Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view
                </p>
                <div className="get-started">
                    Get Started
                </div>
            </div>
            <div className="img-container">
                <img src={illustration} alt='illustration' />
            </div>
        </div>
    )
}

export default TopElement;