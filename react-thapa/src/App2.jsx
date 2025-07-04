import React from "react";
// import { LiftStateUp } from "./components/LifeStateUp";
import { ToggleSwitch } from "./projects/toggle/ToggleSwitch";
// import { SiblingComponent, UseStateHooks } from "./components/hooks/UseStateHook";
// import { DrivedState } from "./components/DrivedState";
// import { DriveState } from "./components/hooks/DriveState";
// import NetFlixCom from "./components/NetFlixCom";
// import Profile from './components/folder1/Profile'
import './components/EV.css'
// import "./components/Netflix.module.css";
// import { EventPropagation } from "./components/EventPropagatio";
// import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventProps";

function App2() {
  return (
    <section className="container">
      {/* <h1 className='card-heading'>List of Best Netflix Series.</h1>
    <NetFlixCom /> */}
      {/* <Profile/> */}
      {/* <EventHandling data = 'hello'/> */}
      {/* <EventProps /> */}
      {/* <EventPropagation /> */}
        {/* <UseStateHooks />
        <SiblingComponent/> */}

        {/* <DriveState /> */}
        {/* <DrivedState /> */}
        {/* <LiftStateUp /> */}
        <ToggleSwitch />
    </section>
  );
}

export default App2;
