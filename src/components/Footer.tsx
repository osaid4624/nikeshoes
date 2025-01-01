import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="bg-black text-white py-10 mt-20" // Removed mt-20 to remove unnecessary space at the top
      style={{ fontFamily: "'Helvetica Neue', sans-serif", marginBottom: 0 }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4">FIND A STORE</h3>
            <ul className="space-y-2">
              <li>Become a Member</li>
              <li>Sign Up For Email</li>
              <li>Send Us Feedback</li>
              <li>Student Discounts</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4">GET HELP</h3>
            <ul className="space-y-2">
              <li>Order Status</li>
              <li>Delivery</li>
              <li>Returns</li>
              <li>Payment Options</li>
              <li>Contact Us On Nike.com Inquiries</li>
              <li>Contact Us On All Other Inquiries</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4">ABOUT NIKE</h3>
            <ul className="space-y-2">
              <li>News</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Sustainability</li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 items-center -mt-48">
            <a href="https://www.facebook.com/Musaidsaleem786" className="text-xl">
              <i className=""><FaFacebook/></i>
            </a>
            <a href="https://www.instagram.com/dev.usaid/" className="text-xl">
              <i className="fab fa-facebook"><FaInstagram/></i>
            </a>
            <a href="#" className="text-xl">
              <i className="fab fa-youtube"><FaThreads/></i>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm">
              <p>Design By Usaid</p>
              <p>© 2025 Nike, Inc. All Rights Reserved</p>
            </div>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="hover:underline">
                Guides
              </a>
              <a href="#" className="hover:underline">
                Terms of Sale
              </a>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
              <a href="#" className="hover:underline">
                Nike Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
