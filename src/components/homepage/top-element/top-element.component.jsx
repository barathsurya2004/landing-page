import illustration from '../../../assets/illustration-intro.svg';
import './top-element.styles.scss';
import { motion } from 'framer-motion';
const TopElement = () => {
    return (
        <div className="element-container">
            <motion.div className="element-info"
                initial={{
                    y: '100px',
                    opacity: 0
                }}
                whileInView={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 1,
                    ease: 'easeIn'
                }}
            >
                <h1>Bring Everyone together to build better products</h1>
                <p>
                    Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view
                </p>
                <div className="get-started">
                    Get Started
                </div>
            </motion.div>
            <motion.div className="img-container"
                initial={{
                    y: '100px',
                    opacity: 0
                }}
                whileInView={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 1,
                    ease: 'easeIn'
                }}>
                <img src={illustration} alt='illustration' />
            </motion.div>
        </div>
    )
}

export default TopElement;