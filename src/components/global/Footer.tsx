const Footer = () => {
  return (
    <footer className="relative font-fira text-shadow-2xs text-shadow-black bg-[#000000] border-t border-gray-800 text-sm text-gray-100 px-8 py-12">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/grany4.png')`,
        }}
      />
      <div className="max-w-7xl relative mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 z-20">
        {/* Logo Section */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <div className="w-10 h-10 bg-yellow-400 rounded-full border-2 border-yellow-500" />
              <div className="absolute top-1.5 left-1.5 w-7 h-7 bg-white rounded-full" />
            </div>
            <span className="font-black text-shadow-2xs text-shadow-black text-xl sm:text-2xl tracking-widest text-gray-300 uppercase font-share">
              Rukaz
            </span>
          </div>
          <p className="mt-4 max-w-sm text-white font-semibold text-shadow-2xs text-shadow-black">
            Build and deploy full stack applications with speed, scalability,
            and ease.
          </p>
        </div>

        {/* Link Groups */}
        <div>
          <h4 className="font-semibold mb-2 text-xl">Product</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-gray-400">
                Overview
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Changelog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-xl">Resources</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-gray-400">
                Docs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Tutorials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                API Reference
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-xl">Company</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t relative z-10 border-gray-200 pt-6 text-center text-xs text-gray-100">
        &copy; {new Date().getFullYear()} Rukaz. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
