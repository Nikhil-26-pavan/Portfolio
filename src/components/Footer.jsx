import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = ["Home", "About", "Skills", "Projects", "Certificates", "Education"];

  return (
    <footer id="contact" className="bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 py-12">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Nikhil Pavan</h3>
            <p className="text-gray-600 dark:text-gray-300">
              BCA Graduate passionate about creating innovative software solutions and continuously learning
              new technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() =>
                      document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h4>
            <div className="space-y-3 text-gray-600 dark:text-gray-300">
              <a
                href="mailto:nikhilpavan7478000226@gmail.com"
                className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span>📧</span>
                <span>nikhilpavan7478000226@gmail.com</span>
              </a>
              <a
                href="tel:+918101046500"
                className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span>📞</span>
                <span>+91 8101046500</span>
              </a>
              <div className="flex items-start gap-2">
                <span className="mt-1">📍</span>
                <span>
                  664/3, Near Mahila Kali Mandir, Aambagan, Malancha, Kharagpur, West Bengal - 721301
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Nikhil Pavan. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition"
              aria-label="LinkedIn"
            >
              🔗
            </a>
            <a
              href="#"
              className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition"
              aria-label="GitHub"
            >
              💻
            </a>
            <a
              href="#"
              className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition"
              aria-label="Twitter"
            >
              🐦
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
