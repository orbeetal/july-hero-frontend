import Link from "next/link";
import BloodBackground from "./common/BloodBackground";
const Footer = ({ dictionary, lang }) => {
  const year = new Date().getFullYear();
  return (
    <BloodBackground ackground>
      <footer
        style={{ backgroundColor: "rgba(163, 29, 29, 0.8)" }}
        className="px-4 py-8 text-white md:px-12 lg:px-[10%]"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Left Section: Navigation & Contact */}
          <div className="grid h-full grid-cols-2 gap-8 text-center md:grid-cols-2 md:text-left">
            <div>
              <h3 className="mb-3 text-lg font-semibold">{dictionary.pages}</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={`/${lang}/martyrs`}
                    className="hover:text-gray-300"
                  >
                    {dictionary.martyrs}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${lang}/injured`}
                    className="hover:text-gray-300"
                  >
                    {dictionary.injuredMenu}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${lang}/murderers`}
                    className="hover:text-gray-300"
                  >
                    {dictionary.murderers}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold">
                {dictionary.contact}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="tel:+123456789" className="hover:text-gray-300">
                    {dictionary.phone}
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@example.com"
                    className="hover:text-gray-300"
                  >
                    {dictionary.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section: Submit Button */}
          <div className="flex h-full flex-col items-center justify-center md:items-end">
            <button className="self-center rounded-lg border border-white bg-transparent px-4 py-2 font-semibold text-white shadow-md transition hover:scale-110 hover:bg-[#800709] md:self-end">
              <a target="_blank" href="https://forms.gle/KWrkwvM6oqqv6Rq77">
                {dictionary.submitInformation}
              </a>
            </button>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-4 text-center text-sm text-white/70">
          <p>© {year} All rights reserved</p>
          <p className="mt-1">
            Developed by{" "}
            <a
              href="https://orbeetal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold text-white hover:scale-105 transition-transform duration-200"
            >
              Orbeetal
            </a>
          </p>
        </div>

      </footer>
    </BloodBackground>
  );
};

export default Footer;
