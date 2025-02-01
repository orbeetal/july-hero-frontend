function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="mt-auto bg-gray-800 text-white">
        <div className="container flex items-center justify-center py-4">
          <p>© {year} All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
