import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-blue-900 py-14">
      <div className="container mx-auto">
        <div className="flex items-center justify-between text-white">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl uppercase font-semibold">our information</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="#"
                  className="hover:text-red-500 inline-flex items-center gap-1"
                >
                  <MdOutlineKeyboardDoubleArrowRight />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-red-500 inline-flex items-center gap-1"
                >
                  <MdOutlineKeyboardDoubleArrowRight />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-red-500 inline-flex items-center gap-1"
                >
                  <MdOutlineKeyboardDoubleArrowRight />
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-red-500 inline-flex items-center gap-1"
                >
                  <MdOutlineKeyboardDoubleArrowRight />
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-red-500 inline-flex items-center gap-1"
                >
                  <MdOutlineKeyboardDoubleArrowRight />
                  Business License
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl uppercase font-semibold">my account</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="#"
                  className="hover:text-red-500 inline-flex items-center gap-1"
                >
                  <MdOutlineKeyboardDoubleArrowRight />
                  Manage Account
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-red-500 inline-flex items-center gap-1"
                >
                  <MdOutlineKeyboardDoubleArrowRight />
                  Safety Tips
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-red-500 inline-flex items-center gap-1"
                >
                  <MdOutlineKeyboardDoubleArrowRight />
                  Account Verification
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-red-500 inline-flex items-center gap-1"
                >
                  <MdOutlineKeyboardDoubleArrowRight />
                  Safety & Security
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-red-500 inline-flex items-center gap-1"
                >
                  <MdOutlineKeyboardDoubleArrowRight />
                  Membership Level
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl uppercase font-semibold">help center</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="#"
                  className="hover:text-red-500 inline-flex items-center gap-1"
                >
                  <MdOutlineKeyboardDoubleArrowRight />
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-red-500 inline-flex items-center gap-1"
                >
                  <MdOutlineKeyboardDoubleArrowRight />
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-red-500 inline-flex items-center gap-1"
                >
                  <MdOutlineKeyboardDoubleArrowRight />
                  Quick Start Guide
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-red-500 inline-flex items-center gap-1"
                >
                  <MdOutlineKeyboardDoubleArrowRight />
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-red-500 inline-flex items-center gap-1"
                >
                  <MdOutlineKeyboardDoubleArrowRight />
                  Associate Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl uppercase font-semibold">legal</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="#"
                  className="hover:text-red-500 inline-flex items-center gap-1"
                >
                  <MdOutlineKeyboardDoubleArrowRight />
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-red-500 inline-flex items-center gap-1"
                >
                  <MdOutlineKeyboardDoubleArrowRight />
                  End User Agreements
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-red-500 inline-flex items-center gap-1"
                >
                  <MdOutlineKeyboardDoubleArrowRight />
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-red-500 inline-flex items-center gap-1"
                >
                  <MdOutlineKeyboardDoubleArrowRight />
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-red-500 inline-flex items-center gap-1"
                >
                  <MdOutlineKeyboardDoubleArrowRight />
                  Report Abuse
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white">
              Copyright © 2023. All Rights Reserved By{" "}
              <span className="text-red-500">End-Game-Army</span>
            </p>
          </div>
          <div className="flex flex-row gap-5">
            <Link to="#">
              <p className="text-2xl text-white bg-red-500 p-2 rounded-full">
                <FaFacebookF />
              </p>
            </Link>
            <Link to="#">
              <p className="text-2xl text-white bg-red-500 p-2 rounded-full">
                <FaTwitter />
              </p>
            </Link>
            <Link to="#">
              <p className="text-2xl text-white bg-red-500 p-2 rounded-full">
                <FaInstagram />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
