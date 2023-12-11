import './bottom-element.style.scss';


const BottomElement = () => {
    return (
        <div className='element-container'>
            <div className='element-info'>
                <h2>
                    What's different about Manage ?
                </h2>
                <p>
                    Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
                </p>
            </div>
            <div className='features'>
                <div className='feature'>
                    <div className='get-started'>01</div>
                    <div className='text'>
                        <h3>Track company-wide progress</h3>
                        <p>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the samllest of details. Never lose sight of the bigger picture again</p>
                    </div>
                </div>
                <div className='feature'>
                    <div className='get-started'>02</div>
                    <div className='text'>
                        <h3>Advanced built-in reports</h3>
                        <p>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed</p>
                    </div>
                </div>
                <div className='feature'>
                    <div className='get-started'>03</div>
                    <div className='text'>
                        <h3>Everything you need in one place</h3>
                        <p>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Magage offers an all-in-one team productivity solution.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BottomElement;