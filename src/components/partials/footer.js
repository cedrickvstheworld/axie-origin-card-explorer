import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <div className="footer">
    <span>Let's Freaking Go Axie Infinity !!! &nbsp;<FontAwesomeIcon className="footer-heart" icon={faHeart} /></span>
    <span>Visit me at
       <a target="_blank" rel="noreferrer" className="info-text" href="https://cedrickvstheworld.github.io/">
         &nbsp;cedrickvstheworld.github.io</a>
    </span>
  </div>
);

export default Footer;