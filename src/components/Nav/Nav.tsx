import './Nav.css';
import linkedIn from '../../assets/linkedin.svg';
import github from '../../assets/iconmonstr-github-3.svg';

const Nav = () => {
  return (
    <nav className="nav">
      <h1 className="name">Austin Covey</h1>
      <ul className="navlist">
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
