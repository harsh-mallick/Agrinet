import React, { useState } from 'react'
import "../../Css/common/Coldstorage.css"
import Image from "../../Images/Cold Storage.png"

const Coldstoragesignup = () => {
    const [user, setUser] = useState({
        name_owner: "",
        name_storage: "",
        email_owner: "",
        mobile_owner: "",
        Address_storage: "",
    });

    let name, value;
    const handleInput = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }


    const postData = async (e) => {
        e.preventDefault();
        const { name_owner, name_storage, email_owner, mobile_owner, Address_storage } = user
        console.log(user)

        const res = await fetch("/addcoldstorage", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name_owner, name_storage, email_owner, mobile_owner, Address_storage
            })
        });
        const data = await res.json();
        console.log(data)
        console.log(res.status)
        if (res.status === 422 || res.status === 404 || !data) {

            window.alert("Invalid Registration")
            console.log("Invalid Registration")

        } else if (res.status === 500) {
            window.alert("Internal Server Error")
            console.log("Internal Server Error")
        } else {
            window.alert("Registration Successful");
            console.log("Registration Successful");
            window.location.reload();
        };
    }
    return (
        <div className='body-cstorage'>
            <div class="container-cstorage">
                <h2>COLD STORAGE FORM</h2>
                <div class="wrapper-cstorage">
                    <form class="form-cstorage">
                        <div class="input-cstorage">
                            <p class="lable-cstorage">Enter your Name:</p>
                            <input type="text" placeholder="Enter Your Name" onChange={handleInput} name='name_owner' value={user.name_owner} />
                        </div>
                        <div class="input-cstorage">
                            <p class="lable-cstorage">Enter your Email:</p>
                            <input type="email" placeholder="Enter Your Email" onChange={handleInput} name='email_owner' value={user.email_owner} />
                        </div>
                        <div class="input-cstorage">
                            <p class="lable-cstorage">Enter your Address:</p>
                            <input type="text" placeholder="Enter Your Address" onChange={handleInput} name='Address_storage' value={user.Address_storage} />
                        </div>
                        <div class="input-cstorage">
                            <p class="lable-cstorage">Enter Your Phone Number:</p>
                            <input type="number" placeholder="Enter Your mobilenumber" onChange={handleInput} name='mobile_owner' value={user.mobile_owner} />
                        </div>
                        <div class="input-cstorage">
                            <p class="lable-cstorage">Enter your Store name:</p>
                            <input type="text" placeholder="Enter Your Store Name" onChange={handleInput} name='name_storage' value={user.name_storage} />
                        </div>
                    </form>
                    <div className="container1-cstorage">
                        <div class="img-cstorage">
                            <img src={Image} alt="" />
                        </div>
                        <button class="button" onClick={postData}>Register !</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Coldstoragesignup
