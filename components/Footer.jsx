import Image from "next/image";
import BloodBackground from "./common/BloodBackground";

const Footer = ({dictionary}) => {
  const year = new Date().getFullYear();
  return (
    <BloodBackground>
      <footer style={{ backgroundColor: 'rgba(290, 15, 15, 0.7)' }} className="text-white py-8 px-4 md:px-12 lg:px-[10%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

        {/* Left: Logo */}
        <div className="flex flex-col items-center md:items-start">
          <div className="bg-white p-3 rounded-lg">
            <span className="text-black font-semibold text-lg">Logo</span>
          </div>
        </div>

        {/* Center: Navigation & Contact */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-3">{dictionary.pages}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">{dictionary.martyrs}</a></li>
              <li><a href="#" className="hover:text-gray-300">{dictionary.injuredMenu}</a></li>
              <li><a href="#" className="hover:text-gray-300">{dictionary.murderers}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">{dictionary.contact}</h3>
            <ul className="space-y-2">
              <li><a href="tel:+123456789" className="hover:text-gray-300">{dictionary.phone}</a></li>
              <li><a href="mailto:info@example.com" className="hover:text-gray-300">{dictionary.email}</a></li>
            </ul>
          </div>
        </div>

        {/* Right: Submit & Developer */}
        <div className="flex flex-col items-center md:items-end">
          <button className="bg-transparent border border-white text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-[#800709] transition hover:scale-110">
            Submit Information
          </button>
          {/* <div className="flex flex-col items-center justify-center w-full md:items-end mt-4">
            <h3 className="text-lg font-semibold mb-2">Developed By</h3>
            <div className="relative w-32 h-8">
              <Image 
                alt="developer"
                src="/orbeetal.png"
                layout="fill"
                objectFit="contain"
              /> 
            </div>
          </div> */}
        </div>

      </div>
      <div className="container flex items-center justify-center py-4">
        <p>© {year} All rights reserved</p>
      </div>
    </footer>
    </BloodBackground>
  );
};

export default Footer;
