import React, { useState, useRef, useEffect } from 'react';
import { PiButterfly } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import DownloadIcon from '../../assists/download.png';
import GitHubIcon from '../../assists/github.png';
import Downarrow from '../../assists/downarrow.png';
function ViewCodeNavBar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleBackButtonClick = () => {
        navigate('/workspace');
    };

    const navigateToHome = () => {
        navigate('/');
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleDownloadCode = () => {
        // Logic for downloading code
    };

    const handleExportToGitHub = () => {
        // Logic for exporting code to GitHub
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <nav className="navbar">
            <input
                type="button"
                className="button backbtn"
                value="Back"
                onClick={handleBackButtonClick}
            />
            <div
                className="nav-logo-details"
                style={{
                    padding: '20px 25px',
                    marginRight: '80%',
                    marginTop: '18px',
                    cursor: 'pointer',
                }}
            >
                <PiButterfly size={50} className="nav_logo_icon" />
                <span className="logo_name" onClick={navigateToHome}>
                    MetaMorph
                </span>
            </div>
            <div className="dropdown" ref={dropdownRef}>
                <button className="publishButton" onClick={toggleDropdown}>
                    <img src={Downarrow} alt="Downarrow" className="downicon" />
                    Publish Code
                </button>
                {isOpen && (
                    <div className="dropdown-content">
                        <button className="dropdown-button" onClick={handleDownloadCode}>
                            <img src={DownloadIcon} alt="Download" className="icon" />
                            Download code
                        </button>
                        <button className="dropdown-button" onClick={handleExportToGitHub}>
                            <img src={GitHubIcon} alt="GitHub" className="icon" />
                            Export to GitHub
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default ViewCodeNavBar;
