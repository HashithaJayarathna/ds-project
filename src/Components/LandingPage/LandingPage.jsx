import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {

    const [action,setAction] = useState("Sign Up");
    const navigate = useNavigate();

    return (
        <div className="landing-page">
            <div className="header">
                Microservice Anomaly Detection System
            </div>
            <div className="welcome">
            Welcome to the Microservice Anomaly Detection System!
            </div>
            <div className="description">
                This tool is designed to help you monitor and maintain the health of your microservices architecture by automatically detecting unusual patterns and potential issues. By leveraging advanced machine learning algorithms, our system ensures that your services run smoothly, allowing you to focus on innovation while we take care of reliability.
            </div>
            <div className="landing-page-image">
                <img src = ""/>
            </div>
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{navigate("/Signup")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{navigate("/Login")}}>Login</div>
            </div>
        </div>
    )
}

export default LandingPage;