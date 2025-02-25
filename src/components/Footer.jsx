import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/noclogo.png";

function Footer() {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "News & Updates", path: "/news" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" }
  ];
  return (
    <footer className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12  rounded-full flex items-center justify-center mr-3">
                <img src={logo} alt="" />
              </div>
              <h3 className="text-2xl font-bold">Nepal Oil Corporation</h3>
            </div>
            <p className="text-gray-800 mb-4">
              Delivering quality petroleum products and services across Nepal with reliability and commitment to national development.
            </p>
            <div className="flex space-x-4 mt-6">
              {[
                { icon: FaFacebook, link: "#" }, 
                { icon: FaTwitter, link: "#" }, 
                { icon: FaLinkedin, link: "#" },
                { icon: FaInstagram, link: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="bg-white text-yellow-500 p-2 rounded-full hover:bg-gray-100 transition duration-300"
                  aria-label={`Visit our ${social.icon.name} page`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-8 h-1 bg-white rounded-full mr-3"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
      {menuItems.map((item, index) => (
        <li key={index}>
          <Link
            to={item.path}
            className="text-gray-800 hover:text-white transition duration-300 flex items-center"
          >
            <span className="mr-2">→</span> {item.name}
          </Link>
        </li>
      ))}
    </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-8 h-1 bg-white rounded-full mr-3"></span>
              Contact Info
            </h4>
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-white" />
                <span>Babarmahal, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-white" />
                <span>+977-1-4262780</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-white" />
                <span>info@noc.org.np</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-yellow-400 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Nepal Oil Corporation. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
