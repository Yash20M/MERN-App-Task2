import React from "react";
import "./Footer.css";
import logo from "../../../images/logo.png";
import {
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Icon = ({ icon }) => {
  return (
    <>
      <div className="icons">{icon}</div>
    </>
  );
};

const FooterLinks = ({ title, link1, link2, link3, link4 }) => {
  return (
    <>
      <div className="footer_links_col">
        <h3>{title}</h3>
        <ul>
          <li>
            <a href="/">{link1}</a>
          </li>
          <li>
            <a href="/">{link2}</a>
          </li>
          <li>
            <a href="/">{link3}</a>
          </li>
          <li>
            <a href="/">{link4}</a>
          </li>
        </ul>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer_head">
          <div className="footer_head_logo">
            <img src={logo} alt="logo" />
            <h3>Lets Get High</h3>
          </div>

          <div className="footer_head_socials">
            <h3>Follow us on</h3>
            <div className="social_icons">
              <Icon icon={<AiFillInstagram fontSize={25} />} />
              <Icon icon={<FaFacebookF fontSize={25} />} />
              <Icon icon={<AiOutlineWhatsApp fontSize={25} />} />
              <Icon icon={<AiOutlineTwitter fontSize={25} />} />
            </div>
          </div>

          <div className="footer_head_mail">
            <input type="email" placeholder="Enter Your Email To Subscribe" />
          </div>
        </div>

        <div className="footer_links">
          <FooterLinks
            title="Business"
            link1="Technology"
            link2="Transport"
            link3="Finance"
            link4="E-Commerce"
          />
          <FooterLinks
            title="Community"
            link1="Education"
            link2="Empowerment"
            link3="Environment"
            link4="Health"
          />
          <FooterLinks
            title="About"
            link1="Founder"
            link2="Chairman"
            link3="Team"
          />
          <FooterLinks
            title="News"
            link1="Photos"
            link2="Videos"
            link3="News"
            link4="E-Downloads"
          />
        </div>
        <p className="footer_copyright">
          &copy; RedPhantom Industries Private Limited. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
