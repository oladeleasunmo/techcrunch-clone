import React from 'react';
import {Link} from 'react-router-dom'
import {FiFacebook} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {FiYoutube} from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'

const Footer = () => {

  return (
    <div className="footer">
        <div className="top-nav">
          <div className="row">
            <ul className="footer-list">
                <h3>About</h3>
                <li className="footer-item"><Link to="">TechCrunch</Link></li>
                <li className="footer-item"><Link to="">Staff</Link></li>
                <li className="footer-item"><Link to="">Contact Us</Link></li>
                <li className="footer-item"><Link to="">Advertise</Link></li>
            </ul>
            <ul className="footer-list">
                <h3>Legal</h3>
                <li className="footer-item"><Link to="">Privacy Policy</Link></li>
                <li className="footer-item"><Link to="">Terms of Service</Link></li>
                <li className="footer-item"><Link to="">Extra Crunch Terms</Link></li>
                <li className="footer-item"><Link to="">Code of Conduct</Link></li> 
            </ul>
            <ul className="footer-list">
                <h3>Read Anywhere</h3>
                <li className="footer-item"><Link to="">Google Play</Link></li>
                <li className="footer-item"><Link to="">App Store</Link></li>
            </ul>
            <ul className="footer-list">
                <h3>International</h3>
                <li className="footer-item"><Link to="">Japan</Link></li>
            </ul>
          </div>
        </div>
        <div className="mid-nav">
          <Link to="" className="f">< FiFacebook /><span>Facebook</span></Link>
          <Link to="" className="t">< FiTwitter /><span>Twitter</span></Link>
          <Link to="" className="y">< FiYoutube /><span>Youtube</span></Link>
          <Link to="" className="i">< FiInstagram /><span>Instagram</span></Link>
          <Link to="" className="l">< FiLinkedin /><span>Linkedin</span></Link>
        </div>
        <div className="below-nav">
          <p>© 2013-2021 Verizon Media.</p>
          <p>All rights reserved.</p>
          <p>Powered by WordPress VIP(opens in a new window).</p>
        </div>
    </div>
  );
}

export default Footer;