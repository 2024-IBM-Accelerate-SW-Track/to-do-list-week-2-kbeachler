import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/profile_pic.jpeg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            />
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Kaleigh</div>
            <div className="brief_description">
              {"Hi! My name is Kaleigh and I am a second year computer science major at UCSD. I play volleyball and piano, and am involved in CSE research in HCI."}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
