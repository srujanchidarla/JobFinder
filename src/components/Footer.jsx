import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        {/* Footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Section 1: About Me */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">About Me</h3>
            <p>
              I am Srujan Chidarla I am a passionate web developer with
              expertise in React, Angular, and other modern web technologies. I
              love building web applications that are fast, secure, and
              scalable.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://srujanchidarla.com/"
                  className="hover:text-indigo-400 flex items-center"
                >
                  <FaUser className="mr-2" /> About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-indigo-400 flex items-center"
                >
                  <FaEnvelope className="mr-2" /> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaEnvelope className="mr-2" /> Email:
                contact@srujanchidarla.com
              </li>

              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Location: Maryland, USA
              </li>
            </ul>
          </div>

          {/* Section 4: Social Media */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/srujanchidarla"
                  className="hover:text-indigo-400 flex items-center"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/srujan-chidarla-066830161/"
                  className="hover:text-indigo-400 flex items-center"
                >
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/srujan_chidarla/"
                  className="hover:text-indigo-400 flex items-center"
                >
                  <FaInstagram className="mr-2" /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom - Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center">
          <p>&copy; {currentYear} Srujan Chidarla. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
