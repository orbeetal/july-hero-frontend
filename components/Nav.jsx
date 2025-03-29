function NavMenu({ dictionary, lang }) {
  return (
    <nav className="mb-1 bg-gradient-to-r from-[#800709] via-[#9b0d0d] to-[#c51114] p-4 font-semibold text-white">
      <ul className="flex justify-center gap-[5%]">
        <li>
          <a href={`/${lang}`} className="hover:text-gray-300">
            {dictionary.home}
          </a>
        </li>
        <li>
          <a href={`/${lang}/martyrs`} className="hover:text-gray-300">
            {dictionary.martyrs}
          </a>
        </li>
        <li>
          <a href={`/${lang}/injured`} className="hover:text-gray-300">
            {dictionary.injuredMenu}
          </a>
        </li>
        <li>
          <a href={`/${lang}/murderers`} className="hover:text-gray-300">
            {dictionary.murderers}
          </a>
        </li>
        <li>
          <a href={`/${lang}/incidents`} className="hover:text-gray-300">
            {dictionary.incidents}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
