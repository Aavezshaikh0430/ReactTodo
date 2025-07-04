
import { useState } from 'react'
import './ToggleSwitch.css'
import { IoIosSwitch } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";

export const ToggleSwitch = () => {

    const [isOn, setIsOn]= useState(false);

    const handleSwitchToggle = () => {
        setIsOn(!isOn)
    }

    const checkIsOn = isOn ? 'on' : 'off';
    const switchBgColor = {backgroundColor: isOn ? '#4caf50' : ''};
    return(
        <>
        <h1 style={{color: '#000' , textAlign:'center'}}>Toggle Switch Icon</h1>
        <IoIosSwitch style={{color: 'red' , textAlign:'center', fontSize: '4rem'}} />
            <br/>
            <br/>
            
        <FaUserAlt style={{color: 'green' , textAlign:'center', fontSize: '4rem'}}/>


        <div className="toggle-switch" style={switchBgColor} onClick={handleSwitchToggle}>
            <div className={`switch ${checkIsOn}`}>
                <span className="switch-state">{checkIsOn}</span>
            </div>
        </div>
        </>
    )
}
