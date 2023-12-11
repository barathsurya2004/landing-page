import BottomElement from '../../components/homepage/bottom-element/bottom-element.component';
import TopElement from '../../components/homepage/top-element/top-element.component';
import './homepage.style.scss';
import avatar1 from '../../assets/avatar-ali.png';
import avatar2 from '../../assets/avatar-anisha.png';
import avatar3 from '../../assets/avatar-richard.png';



const Homepage = () => {
    return (
        <div>
            <TopElement />
            <BottomElement />
        </div>

    )
}


export default Homepage;