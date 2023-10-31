import React from 'react'
import home from "../../icons/Vector.png"
import search from "../../icons/Vector-1.png"
import more from "../../icons/Vector-2.png"
import notification from "../../icons/Group-24.png"
import circle from "../../icons/Ellipse-12.png"
import profile from "../../icons/Ellipse-13.png"
import menu from "../../icons/Rectangle-60.png"
const Home = () => {
    return (
        <>
            <div className="Menu-wrapper">
                <img src={home} alt="1" />
                <img src={search} alt="2" />
                <img src={more} alt="3" />
                <img src={circle} alt="" />
                <img src={menu} alt="" />
                <img src={notification} alt="" />
                <img src={profile} alt="" />

            </div>
            <p>HOLA DESDE HOME</p>
        </>
    )
}

export default Home