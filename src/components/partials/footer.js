import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <div className="footer">
    <span>I really will appreciate some &nbsp;<FontAwesomeIcon className="footer-heart" icon={faHeart} /></span>
    <span>my ronin address: <span className="info-text">ronin:37975019149bc5b9974916314d17d9a516096c3a</span></span>
    <span>I can also accept paid quests. Visit my portfolio at 
       <a target="_blank" rel="noreferrer" className="info-text" href="https://cedrickvstheworld.github.io/">
         &nbsp;cedrickvstheworld.github.io</a>
    </span>
  </div>
);

export default Footer;