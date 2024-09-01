import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-500 py-10 bottom-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ml-12">
          <div>
            <h3 className="text-white font-semibold mb-4">Questions? Call +91-8291018926</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Investor Relations</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Cookie Preferences</a></li>
              <li><a href="#" className="hover:text-white">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white">Corporate Information</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">More Info</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Jobs</a></li>
              <li><a href="#" className="hover:text-white">Terms and Conditions</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Join Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Sign Up</a></li>
              <li><a href="#" className="hover:text-white">Manage Account</a></li>
              <li><a href="#" className="hover:text-white">Redeem Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} @shubham NetflixGPT</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
