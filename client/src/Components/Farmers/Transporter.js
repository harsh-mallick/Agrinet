import React, { useEffect, useState } from 'react';
import Buyerimg from '../../Images/Wholesale.jpg'
import { useNavigate } from 'react-router-dom';
import '../../Css/Farmer/Buyer.css'
import GreenButtonWithPopover from '../common/GreenButtonWithPopover Transporter';

const Transporter = () => {
  const history = useNavigate()
  const [transporterData, setUserData] = useState({});

  const gettransporterdata = async () => {
    try {
      const res = await fetch("/getTransporterdata", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include"
      })

      const data = await res.json();
      console.log(data)
      setUserData(data)

      if (!res.status === 200) {
        const error = new Error(res.error)
        throw error
      }
    } catch (error) {
      history('/seller-login')
      console.log(error)
    }
  }

  useEffect(() => {
    gettransporterdata();
  });
  transporterData.length = Object.keys(transporterData).length;
  console.log(Array.prototype.slice.call(transporterData, 4));

  var sliced = [];
  for (var i = 0; i < 4; i++)
    sliced[i] = transporterData[i];
  console.log(sliced);

  const buttonName = "Send Transporting Request"

  return (
    <div className="grid grid-4-col" style={{ marginLeft: "50px" }}>
      {
        Array.isArray(transporterData) && transporterData.map(transporterdatas => {
          return (
            <div className="card-buyer" key={transporterdatas._id}>
              <div className="card-img-buyer">
                <img src={Buyerimg} alt="Buyer Img" className='img-buyer' />
              </div>
              <div className="card-content-buyer">
                <h2 className='h2-buyer'>Transporter</h2>
                <p className='p-buyer'>
                  Name:&nbsp; {transporterdatas.name_farmer}<br />
                  Mobile Number:&nbsp; {transporterdatas.phonenumber}<br />
                  Email:&nbsp; {transporterdatas.email}<br />
                </p>
                <GreenButtonWithPopover buttonName={buttonName} />
              </div>
            </div>
          )
        })
      }
    </div>
  )

}

export default Transporter
