import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PiButterfly } from "react-icons/pi";
import { MdWorkspacesFilled } from "react-icons/md";
import { GrResources } from "react-icons/gr";
import { MdOutlineSettings } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import '../../CSS/workspace_styling/sidebar.css';

const Sidebar = () => {

  let firstName = localStorage.getItem('firstName');
  let lastName = localStorage.getItem('lastName')

  const [subMenuState, setSubMenuState] = useState({
    workspace: false,
    resources: false,
  });

  let navigate = useNavigate();

  const handleSubMenuToggle = (menu) => {
    setSubMenuState(prevState => ({
      ...prevState,
      [menu]: !prevState[menu]
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('projectCount');
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="logo-details">
        <PiButterfly className='logo_icon'/>
        <span className="logo_name">MetaMorph</span>
      </div>
      <ul className="nav-links">
        <li>
          <div className="icon-link">
            <a href="#" onClick={() => handleSubMenuToggle('workspace')}>
              <MdWorkspacesFilled className='navlink_icon'/>
              <span className="link_name">Workspace</span>
            </a>
            <IoIosArrowDown className='arrow'/>
          </div>
          {subMenuState.workspace && (
            <ul className="sub-menu">
              <li><a className="link_name" href="#">Workspace</a></li>
              <li><a href="#">My Workspace</a></li>
              <li><a href="#">Add Workspace</a></li>
            </ul>
          )}
        </li>

        <li>
          <div className="icon-link">
            <a href="#" onClick={() => handleSubMenuToggle('resources')}>
              <GrResources className='navlink_icon'/>
              <span className="link_name">Resources</span>
            </a>
            <IoIosArrowDown className='arrow'/>
          </div>
          {subMenuState.resources && (
            <ul className="sub-menu">
              <li><a className="link_name" href="#">Resources</a></li>
              <li><a href="#">Figma Plugin</a></li>
              <li><a href="#">Demo Project</a></li>
              <li><a href="#">Video Tutorials</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Discord</a></li>
              <li><a href="#">Video Tutorials</a></li>
              <li><a href="#">Github</a></li>
            </ul>
          )}
        </li>

        <li>
          <a href="#">
            <MdOutlineSettings className='navlink_icon'/>
            <span className="link_name">Profile Settings</span>
          </a>
        </li>
        <li>
          <div className="profile-details">
            <div className="profile-content">
              <FaRegUserCircle className='user_icon profile'/>
            </div>
            <div className="name-job">
              <div className="profile_name">{firstName} {lastName}</div>
              {/* <div className="job">Software Engineer</div> */}
            </div>
            <TbLogout2 className='logout_icon profile' onClick={handleLogout}/>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
