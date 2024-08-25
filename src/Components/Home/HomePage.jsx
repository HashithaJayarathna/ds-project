import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {

    const [action,setAction] = useState();
    const navigate = useNavigate();

    return (
        <div className="Home-page">
            <div className="header">
                Microservice Anomaly Detection System
            </div>
            <div className="welcome">
                What is this tool used for?
            </div>
            <div className="description">
                This tool is designed to help you monitor and maintain the health of your microservices architecture by automatically detecting unusual patterns and potential issues. By leveraging advanced machine learning algorithms, our system ensures that your services run smoothly, allowing you to focus on innovation while we take care of reliability.
            </div>
            <div className="landing-page-image">
                <img src = ""/>
            </div>
            <div className="submit-container">
                <div className={action==="cAdvisor"?"submit gray":"submit"} onClick={()=>{navigate("/cAdvisor")}}>cAdvisor</div>
                <div className={action==="Response Times"?"submit gray":"submit"} onClick={()=>{navigate("/ResponseTimes")}}>Response Times</div>
            </div>
        </div>
    )
}

export default HomePage;