import React, { useState, useEffect } from 'react'
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet"
import "../../Css/Farmer/Maps.css"
import "leaflet/dist/leaflet.css"
import { Icon } from 'leaflet'

const Coldstorage = () => {
    const [Data, setData] = useState();
    const [runned, setRunned] = useState(false)

    const callcoldstorage = async () => {
        if (runned === false) {
            try {
                const res = await fetch("/getcoldstoragedata", {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    credentials: "include"
                })

                const data = await res.json();
                console.log(data)
                setData(data)

                if (!res.status === 200) {
                    const error = new Error(res.error)
                    throw error
                }
                setRunned(true)
            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        callcoldstorage();
    });

    const ZOOM_LEVEL = 8

    const customicon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/128/1483/1483336.png",
        iconSize: [38, 38]
    })
    return (
        <div>
            <MapContainer center={[28.644800, 77.216721]} zoom={ZOOM_LEVEL} scrollWheelZoom={true}>
                <TileLayer url='https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=bOaMCsLdzdn8rXVvNAHp' attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'></TileLayer>
                {Array.isArray(Data) && Data.map(markers => (
                    <Marker position={[markers.lat, markers.long]} icon={customicon}>
                        <Popup>
                            {markers.name_storage}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>

        </div>
    )
}

export default Coldstorage
