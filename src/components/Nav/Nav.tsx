import { useState } from 'react';
import './Nav.css';
import linkedIn from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import menu from '../../assets/menu.svg';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="nav">
      <h1 className="name">Austin Covey</h1>
      <div
        className={`menu-toggle ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        {/* <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div> */}
        <img className="menu-icon" src={menu} alt="" />
      </div>
      <ul className={`navlist ${isOpen ? 'open' : ''}`}>
        <li className="item">About</li>
        <li className="item">Skills</li>
        <li className="item">Projects</li>
        <li className="item">Contact</li>
        <li className="item">Resume</li>
        <li className="item">
          <a
            href="https://www.linkedin.com/in/austin-covey-a49075279"
            target="_blank"
          >
            <img src={linkedIn} alt="linkedIn" />
          </a>
        </li>
        <li className="item">
          <a href="https://github.com/austinc512" target="_blank">
            <img src={github} alt="github" />
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
