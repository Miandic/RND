import React from "react";

export default function Header(){
    return (
        <div className="header">
            <div className="logo">
                <img src="logo.svg" alt="logo" />
            </div>
            <div className="menu">
                <div className="menu-item main">
                    <img src="#" alt="Main" />
                </div>
                <div className="menu-item profile">
                    <img src="#" alt="Profile" />
                </div>
            </div>

        </div>
    )
}