import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" text-gray-800  py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Logo
          </Link>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} by KhoiVT. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
