import React from "react";
import "./Footer.css";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";

export default function Footer() {
  return (
    <footer>
      <div className="mt-6 pt-10 pb-12 bg-gray-800 ">
        <div className="flex justify-center mx-auto">
          <div className="footer-col">
            <h4>company</h4>
            <ul className="list-services">
              <li>
                <a href="/about">about us</a>
              </li>
              <li>
                <a href="/home">our services</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <ul className="list-services">
              <h4>contact us</h4>
              <li>
                <a href="" target="_blank">
                  E-mail
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a
                href="https://www.facebook.com/profile.php?id=100084676761716"
                target="_blank"
              >
                <RiFacebookCircleFill size={42} />
              </a>
              <a href="https://www.twitter.com/" target="_blank">
                <AiFillTwitterCircle size={42} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <TiSocialLinkedin size={37} className="linkedin-icon" />
              </a>
              <a href="https://www.github.com/" target="_blank">
                <AiFillGithub size={42} className="github-icons" />
              </a>
            </div>
          </div>
        </div>
        <div className=" text-center text-white pt-6 mx-8">
          © 2022 Copyright:
          <a className=" text-white" href="/">
            UNIVERSAL MUSIC APP
          </a>
        </div>
      </div>
    </footer>
  );
}
