"use client";

export default function Overlay({ navbar, handleNavbar }) {

    return (
        <div className={`${navbar ? "visible opacity-100" : "invisible opacity-0"} overlay`} onClick={handleNavbar}></div>
    )
}
