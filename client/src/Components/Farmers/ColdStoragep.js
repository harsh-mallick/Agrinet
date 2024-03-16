import React from 'react'
import { FaStar } from "react-icons/fa6";
import { IoStarHalfOutline } from "react-icons/io5";
import video from "../../Images/0001-0080.mp4"
import "../../Css/Farmer/Buyportable.css"

const ColdStoragep = () => {
    return (
        <div className='main-cs'>
            <div className="submain-cs">
                <div className="left-cs">
                    <p className="video-title">Special Design and Enhanced Features</p>
                    <video src={video} autoPlay loop muted className='video'></video>
                </div>
                <div className="right-c">
                    <div className="heading-cs">Protable Cold Storage</div>
                    <div className="rating-cs"><FaStar /><FaStar /><FaStar /><FaStar /><IoStarHalfOutline /> 4.6/5.0</div>
                    <div className="price-cs">₹To be calculated</div>
                    <div className="desc-cs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores velit eos sunt tenetur, vitae illo necessitatibus quas laboriosam laborum, non nisi magni! Ea quia fugit magnam eius officiis, nemo voluptatum.</div>
                    <button className="buttons-cs">Purchase Now</button>
                </div>
            </div>
        </div>
    )
}

export default ColdStoragep
