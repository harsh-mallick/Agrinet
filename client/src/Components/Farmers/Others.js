import React from 'react'
import '../../Css/Farmer/Others.css'
import { Link } from "react-router-dom"

const Others = () => {
    return (
        <div className="body">
            <div className="more-services">
                <div className="back-ground-parent">
                    <div className="back-ground"></div>
                    <div className="more-services-parent">
                        <h3 className="more-services1">More Services</h3>
                        <div className="crop-yield-predictor-parent">
                            <Link to="/"><p className="crop-yield-predictor">Crop Yield Predictor</p></Link>
                            <Link to="/"><p className="check-soil-details">Check Soil Details</p></Link>
                            <Link to="/weather-details"><p className="check-weather-details">Check Weather Details</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Others
