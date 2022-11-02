import React from 'react'
import './footer.css'
import HashLogo from './../../assets/images/hashLogomark.svg';
// import WerbLogo from './../../assets/images/sponsors/werb.svg';
import { ReactComponent as WerbLogo } from './../../assets/images/sponsors/werb.svg';

function HashFooter() {
  return (
    <footer className='footer'>
        <div className="footerContentContainer">
            <div className="footerContentLeft">
                <img src={HashLogo} alt="" />
                <div className="contact">
                    <div>
                     <p className="description">Contact Us</p>
                     <h2 className="subheading">hash@mbcet.ac.in</h2>
                    </div>
                    {/* TODO: Links */}
                    <div className="socialIconContainer">
                        <a href="https://twitter.com/" className="socialIcons">
                            <i className="fa fa-twitter" />
                        </a>
                        <a href="https://www.instagram.com/hashmbcet/" className="socialIcons">
                            <i className="fa fa-instagram" />
                        </a>
                        <a href="mailto:hash@mbcet.ac.in" className="socialIcons">
                            <i className="fa fa-envelope" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footerContentRight">
                <h2 className="subheading">Quick Links</h2>
                <p className="footerLink" onClick={() => {
                const anchor = document.querySelector('#events');
                anchor?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }}>Events</p>
                <p className="footerLink" onClick={() => {
                const anchor = document.querySelector('#timeline');
                anchor?.scrollIntoView({ behavior: 'smooth'})
                }}>Timeline</p>
                <p className="footerLink" onClick={() => {
                const anchor = document.querySelector('#sponsors');
                anchor?.scrollIntoView({ behavior: 'smooth'})
                }}>Sponsors</p>
            </div>
        </div>
        <div className="footerBanner">
            <div>   
                <p>@HASH22</p>
            </div>
        </div>
    </footer>
  )
}

export default HashFooter